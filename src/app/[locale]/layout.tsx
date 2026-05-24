import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "../globals.css";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = locale === routing.defaultLocale ? "/" : `/${locale}`;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: { telephone: true, email: true, address: true },
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/`,
        fr: `${SITE_URL}/fr`,
        "x-default": `${SITE_URL}/`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: t("title"),
      description: t("description"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [
        {
          url: "/images/hero/hero.png",
          width: 1920,
          height: 800,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/hero/hero.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-ink-700 antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}#organization`,
                name: SITE_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/images/logo/logo.png`,
                description:
                  "Strategic minerals trading and sourcing company connecting resources with global opportunities.",
                address: {
                  "@type": "PostalAddress",
                  ...CONTACT.address,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: CONTACT.phone,
                  contactType: "customer support",
                  email: CONTACT.email,
                  availableLanguage: ["English", "French"],
                },
                sameAs: [CONTACT.social.linkedin, CONTACT.social.x],
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}#website`,
                url: SITE_URL,
                name: SITE_NAME,
                publisher: { "@id": `${SITE_URL}#organization` },
                inLanguage: locale === "fr" ? "fr-FR" : "en-US",
              },
            ],
          }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
