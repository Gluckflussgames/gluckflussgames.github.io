"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale, type Translations } from "@/lib/i18n";

const storageKey = "gluckfluss.language";
type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLanguage] = useState<Locale>("en");
  const pathname = usePathname();
  useEffect(() => {
    let preferred: Locale = navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "en" || saved === "pt") preferred = saved;
    } catch {
      /* Browser language still works when storage is unavailable. */
    }
    setLanguage(preferred);
  }, []);
  const t = translations[locale];
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    const copy = pathname?.includes("war-effort")
      ? t.war
      : pathname?.includes("bulicho-de-campanha")
        ? t.bulicho
        : t.home;
    document.title = copy.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
  }, [locale, pathname, t]);
  function setLocale(next: Locale) {
    setLanguage(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* The selection remains available for this page. */
    }
  }
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div className="language-switch" role="group" aria-label={t.nav.language}>
      <button
        type="button"
        lang="en"
        aria-label="Switch to English"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="pt-BR"
        aria-label="Mudar para português"
        aria-pressed={locale === "pt"}
        onClick={() => setLocale("pt")}
      >
        PT
      </button>
    </div>
  );
}
