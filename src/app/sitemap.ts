import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { routing } from "@/i18n/routing";

const LEGAL_PATHS = ["/legal-notice", "/privacy-policy", "/terms"] as const;

function localizedUrl(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path || "/"}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = routing.locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}/`,
        fr: `${SITE_URL}/fr`,
      },
    },
  }));

  const legal = routing.locales.flatMap((locale) =>
    LEGAL_PATHS.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${SITE_URL}${path}`,
          fr: `${SITE_URL}/fr${path}`,
        },
      },
    })),
  );

  return [...home, ...legal];
}
