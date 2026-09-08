import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

/** Native language label shown in the language dropdown, per locale. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

/** BCP 47 tags used for `hreflang`, `og:locale` and structured data. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
};

/** Underscored variants required by the Open Graph spec. */
export const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
};

/** Builds the public path for a locale, honouring the `as-needed` prefix. */
export function localePath(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}`;
}

/** `alternates.languages` map for a given page path (e.g. "/terms"). */
export function languageAlternates(baseUrl: string, path = "") {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      `${baseUrl}${localePath(locale, path) || "/"}`,
    ]),
  );
  return { ...languages, "x-default": `${baseUrl}${path || "/"}` };
}
