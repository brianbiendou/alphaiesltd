import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? `${SITE_URL}/` : `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}/`,
        fr: `${SITE_URL}/fr`,
      },
    },
  }));
}
