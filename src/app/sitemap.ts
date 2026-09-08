import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { routing, languageAlternates, localePath } from "@/i18n/routing";

const LEGAL_PATHS = ["/legal-notice", "/privacy-policy", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = routing.locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale) || "/"}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages: languageAlternates(SITE_URL) },
  }));

  const legal = routing.locales.flatMap((locale) =>
    LEGAL_PATHS.map((path) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages: languageAlternates(SITE_URL, path) },
    })),
  );

  return [...home, ...legal];
}
