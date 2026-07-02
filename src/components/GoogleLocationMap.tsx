import { useEffect, useRef, useState } from "react";

type GoogleLocationMapProps = {
  language: "ko" | "en";
  title: string;
  addressLines: string[];
};

type MapStatus = "idle" | "loading" | "ready" | "missing-config" | "error";

type GoogleMapConfig = {
  apiKey: string;
  mapId: string;
  lat: number;
  lng: number;
  zoom: number;
  markerTitle: string;
};

const REQUIRED_ENV_KEYS = [
  "VITE_GOOGLE_MAPS_API_KEY",
  "VITE_GOOGLE_MAPS_MAP_ID",
  "VITE_GOOGLE_MAPS_LAT",
  "VITE_GOOGLE_MAPS_LNG",
] as const;

let googleMapsScriptPromise: Promise<void> | null = null;
let googleMapsAuthError = false;
const GOOGLE_MAPS_CALLBACK = "__xactusGoogleMapsInit";

function readGoogleMapConfig(): GoogleMapConfig | null {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim() ?? "";
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID?.trim() ?? "";
  const lat = Number(import.meta.env.VITE_GOOGLE_MAPS_LAT);
  const lng = Number(import.meta.env.VITE_GOOGLE_MAPS_LNG);
  const zoom = Number(import.meta.env.VITE_GOOGLE_MAPS_ZOOM || 17);
  const markerTitle = import.meta.env.VITE_GOOGLE_MAPS_MARKER_TITLE?.trim() || "XACTUS Onco";

  if (!apiKey || !mapId || Number.isNaN(lat) || Number.isNaN(lng)) {
    return null;
  }

  return {
    apiKey,
    mapId,
    lat,
    lng,
    zoom: Number.isNaN(zoom) ? 17 : zoom,
    markerTitle,
  };
}

function loadGoogleMapsScript(apiKey: string) {
  if (window.google?.maps?.Map) {
    return Promise.resolve();
  }

  if (googleMapsScriptPromise) {
    return googleMapsScriptPromise;
  }

  googleMapsScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-google-maps-loader="true"]');

    if (existingScript) {
      if (existingScript.dataset.ready === "true" && window.google?.maps?.Map) {
        resolve();
        return;
      }

      existingScript.addEventListener(
        "load",
        () => {
          if (window.google?.maps?.Map) {
            resolve();
          }
        },
        { once: true },
      );
      existingScript.addEventListener("error", () => reject(new Error("Google Maps script failed to load.")), { once: true });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      reject(new Error("Google Maps script load timed out."));
    }, 15000);

    window[GOOGLE_MAPS_CALLBACK] = () => {
      const script = document.querySelector<HTMLScriptElement>('script[data-google-maps-loader="true"]');
      if (script) {
        script.dataset.ready = "true";
      }
      window.clearTimeout(timeoutId);
      resolve();
    };

    window.gm_authFailure = () => {
      googleMapsAuthError = true;
      window.clearTimeout(timeoutId);
      reject(new Error("Google Maps authentication failed."));
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&libraries=marker&callback=${GOOGLE_MAPS_CALLBACK}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsLoader = "true";
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      reject(new Error("Google Maps script failed to load."));
    };
    document.head.appendChild(script);
  });

  return googleMapsScriptPromise;
}

function buildInfoWindowMarkup(title: string, addressLines: string[], directionLabel: string, directionUrl: string) {
  const addressMarkup = addressLines
    .map((line) => `<div class="xactus-map-info-window__address-line">${line}</div>`)
    .join("");

  return `
    <div class="xactus-map-info-window">
      <div class="xactus-map-info-window__title">${title}</div>
      <div class="xactus-map-info-window__address">${addressMarkup}</div>
      <a
        class="xactus-map-info-window__link"
        href="${directionUrl}"
        target="_blank"
        rel="noreferrer"
      >
        ${directionLabel}
      </a>
    </div>
  `;
}

function getErrorMessage(error: unknown) {
  if (googleMapsAuthError) {
    return "Google Maps 인증에 실패했습니다. API 키 제한, Maps JavaScript API 활성화, 결제 계정 연결 여부를 확인해 주십시오.";
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Google Maps 초기화에 실패했습니다.";
}

export default function GoogleLocationMap({ language, title, addressLines }: GoogleLocationMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<MapStatus>(() => (readGoogleMapConfig() ? "idle" : "missing-config"));
  const [errorMessage, setErrorMessage] = useState("");
  const normalizedTitle = language === "ko" ? "XACTUS Onco 위치" : title;

  useEffect(() => {
    const config = readGoogleMapConfig();

    if (!config) {
      setStatus("missing-config");
      return;
    }

    let disposed = false;
    let marker: any = null;

    const setupMap = async () => {
      try {
        setStatus("loading");
        setErrorMessage("");
        googleMapsAuthError = false;

        await loadGoogleMapsScript(config.apiKey);

        if (disposed || !containerRef.current || !window.google?.maps?.Map) {
          return;
        }

        const googleMaps = window.google.maps as any;
        const center = { lat: config.lat, lng: config.lng };
        const map = new googleMaps.Map(containerRef.current, {
          center,
          zoom: config.zoom,
          mapId: config.mapId,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        const markerNamespace = googleMaps.marker;
        if (markerNamespace?.AdvancedMarkerElement && markerNamespace?.PinElement) {
          const pin = new markerNamespace.PinElement({
            background: "#15a06d",
            borderColor: "#0b564b",
            glyphColor: "#ffffff",
            scale: 1.08,
          });

          marker = new markerNamespace.AdvancedMarkerElement({
            map,
            position: center,
            title: config.markerTitle,
            content: pin.element,
          });
        } else {
          marker = new googleMaps.Marker({
            map,
            position: center,
            title: config.markerTitle,
          });
        }

        const directionLabel = language === "ko" ? "찾아오는 길" : "Directions";
        const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${config.lat},${config.lng}`;
        const infoWindow = new googleMaps.InfoWindow({
          content: buildInfoWindowMarkup(normalizedTitle, addressLines, directionLabel, directionUrl),
          ariaLabel: normalizedTitle,
          headerDisabled: true,
        });

        infoWindow.open({
          anchor: marker,
          map,
        });

        marker.addListener(markerNamespace?.AdvancedMarkerElement ? "gmp-click" : "click", () => {
          infoWindow.open({
            anchor: marker ?? undefined,
            map,
          });
        });

        window.setTimeout(() => {
          if (!disposed) {
            googleMaps.event?.trigger?.(map, "resize");
            map.setCenter(center);
          }
        }, 180);

        setStatus("ready");
      } catch (error) {
        console.error(error);
        if (!disposed) {
          setErrorMessage(getErrorMessage(error));
          setStatus("error");
        }
      }
    };

    void setupMap();

    return () => {
      disposed = true;
      if (marker) {
        marker.map = null;
      }
    };
  }, [addressLines, language, normalizedTitle]);

  if (status === "missing-config") {
    return (
      <div className="google-location-map google-location-map--fallback" style={fallbackShellStyle}>
        <div style={fallbackBadgeStyle}>Google Maps Setup Required</div>
        <div style={fallbackTitleStyle}>`.env`에 아래 값을 입력해 주십시오.</div>
        <div style={fallbackListStyle}>
          {REQUIRED_ENV_KEYS.map((key) => (
            <code key={key} style={fallbackCodeStyle}>
              {key}
            </code>
          ))}
          <code style={fallbackCodeStyle}>VITE_GOOGLE_MAPS_ZOOM=17</code>
          <code style={fallbackCodeStyle}>VITE_GOOGLE_MAPS_MARKER_TITLE=XACTUS Onco</code>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="google-location-map google-location-map--fallback" style={fallbackShellStyle}>
        <div style={fallbackBadgeStyle}>Google Maps Error</div>
        <div style={fallbackTitleStyle}>{errorMessage}</div>
        <div style={fallbackHelpStyle}>
          1. `Maps JavaScript API`가 활성화되어 있는지 확인해 주십시오.
          <br />
          2. API Key 제한에 `http://localhost:5173/*` 또는 현재 개발 주소가 포함되어 있는지 확인해 주십시오.
          <br />
          3. Map ID가 같은 Google Cloud 프로젝트에 연결되어 있는지 확인해 주십시오.
        </div>
      </div>
    );
  }

  return (
    <div className="google-location-map" style={mapShellStyle}>
      {status !== "ready" && <div style={mapLoadingStyle}>Google Maps loading...</div>}
      <div ref={containerRef} className="google-location-map__canvas" style={mapCanvasStyle} />
    </div>
  );
}

const mapShellStyle = {
  position: "relative" as const,
  width: "100%",
  height: "100%",
  minHeight: "520px",
};

const mapCanvasStyle = {
  width: "100%",
  height: "100%",
  minHeight: "520px",
  background: "rgba(255,255,255,0.02)",
};

const mapLoadingStyle = {
  position: "absolute" as const,
  inset: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, rgba(17,49,82,0.28), rgba(14,42,72,0.18))",
  color: "rgba(255,255,255,0.82)",
  fontSize: "0.94rem",
  fontWeight: 600,
  letterSpacing: "0.04em",
};

const fallbackShellStyle = {
  width: "100%",
  height: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  gap: "14px",
  padding: "32px",
  background: "linear-gradient(180deg, rgba(17,49,82,0.62), rgba(14,42,72,0.52))",
  color: "#ffffff",
};

const fallbackBadgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(39,169,75,0.14)",
  border: "1px solid rgba(39,169,75,0.22)",
  color: "var(--xactus-green)",
  fontSize: "0.78rem",
  fontWeight: 800,
  letterSpacing: "0.08em",
};

const fallbackTitleStyle = {
  fontSize: "1.05rem",
  fontWeight: 700,
  lineHeight: 1.6,
};

const fallbackHelpStyle = {
  color: "rgba(226,239,252,0.82)",
  fontSize: "0.94rem",
  lineHeight: 1.75,
};

const fallbackListStyle = {
  display: "grid",
  gap: "10px",
};

const fallbackCodeStyle = {
  display: "inline-block",
  padding: "10px 12px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(226,239,252,0.92)",
  fontSize: "0.9rem",
};
