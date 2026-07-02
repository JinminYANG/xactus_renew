import { useAppStore } from "../../store/useAppStore";
import "./LanguageSelector.css";

const LANGUAGE_OPTIONS = [
  { value: "ko", label: "KO", description: "한국어" },
  { value: "en", label: "EN", description: "English" },
] as const;

export default function LanguageSelector() {
  const lang = useAppStore((s) => s.language);
  const setLang = useAppStore((s) => s.setLanguage);
  const activeIndex = LANGUAGE_OPTIONS.findIndex((option) => option.value === lang);

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <span className="lang-toggle__thumb" aria-hidden="true" style={{ transform: `translateX(${activeIndex * 100}%)` }} />
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`lang-toggle__option${lang === option.value ? " is-active" : ""}`}
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          title={option.description}
        >
          <span className={`lang-flag${option.value === "ko" ? " is-ko" : " is-en"}`} aria-hidden="true" />
          <span className="lang-toggle__label">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
