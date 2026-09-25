"use client";

import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const copy = localeCopy[locale].switcher;
  return (
    <nav className="language-switcher" aria-label={copy.label}>
      <button
        type="button"
        lang="en"
        aria-current={locale === "en" ? "page" : undefined}
        aria-label={locale === "en" ? copy.english : `${copy.switchTo} ${copy.english}`}
        className={locale === "en" ? "is-current" : undefined}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="fr"
        aria-current={locale === "fr" ? "page" : undefined}
        aria-label={locale === "fr" ? copy.french : `${copy.switchTo} ${copy.french}`}
        className={locale === "fr" ? "is-current" : undefined}
        onClick={() => setLocale("fr")}
      >
        FR
      </button>
    </nav>
  );
}
