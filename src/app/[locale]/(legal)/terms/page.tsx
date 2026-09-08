import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/utils";
import { languageAlternates, localePath } from "@/i18n/routing";
import { LegalShell, LSection, LP, LA } from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

const PATH = "/terms";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.terms" });

  return {
    title: `${t("metaTitle")} — ${SITE_NAME}`,
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, PATH)}`,
      languages: languageAlternates(SITE_URL, PATH),
    },
  };
}

export default async function TermsPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.terms");

  return (
    <LegalShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      updated={t("updated")}
    >
      <LSection heading={t("purpose.heading")}>
        <LP>{t("purpose.body", { site: SITE_NAME })}</LP>
      </LSection>

      <LSection heading={t("access.heading")}>
        <LP>{t("access.body")}</LP>
      </LSection>

      <LSection heading={t("content.heading")}>
        <LP>{t("content.body", { site: SITE_NAME })}</LP>
      </LSection>

      <LSection heading={t("ip.heading")}>
        <LP>{t("ip.body", { site: SITE_NAME })}</LP>
      </LSection>

      <LSection heading={t("links.heading")}>
        <LP>{t("links.body")}</LP>
      </LSection>

      <LSection heading={t("data.heading")}>
        <LP>
          {t.rich("data.body", {
            privacy: (chunks) => (
              <LA href={localePath(locale, "/privacy-policy")}>{chunks}</LA>
            ),
          })}
        </LP>
      </LSection>

      <LSection heading={t("law.heading")}>
        <LP>{t("law.body")}</LP>
      </LSection>

      <LSection heading={t("contact.heading")}>
        <LP>
          {t.rich("contact.body", {
            email: CONTACT.email,
            mail: (chunks) => (
              <LA href={`mailto:${CONTACT.email}`}>{chunks}</LA>
            ),
          })}
        </LP>
      </LSection>
    </LegalShell>
  );
}
