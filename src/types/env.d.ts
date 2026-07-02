/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_GOOGLE_MAPS_MAP_ID?: string;
  readonly VITE_GOOGLE_MAPS_LAT?: string;
  readonly VITE_GOOGLE_MAPS_LNG?: string;
  readonly VITE_GOOGLE_MAPS_ZOOM?: string;
  readonly VITE_GOOGLE_MAPS_MARKER_TITLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __xactusGoogleMapsInit?: () => void;
  gm_authFailure?: () => void;
  google?: {
    maps?: {
      Map?: new (...args: any[]) => any;
    };
  };
}
