import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/utils";
import { languageAlternates, localePath } from "@/i18n/routing";
import {
  LegalShell,
  LSection,
  LP,
  LUL,
  LLI,
  LA,
} from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

const PATH = "/privacy-policy";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  return {
    title: `${t("metaTitle")} — ${SITE_NAME}`,
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, PATH)}`,
      languages: languageAlternates(SITE_URL, PATH),
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.privacy");

  const mail = (chunks: React.ReactNode) => (
    <LA href={`mailto:${CONTACT.email}`}>{chunks}</LA>
  );

  return (
    <LegalShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      updated={t("updated")}
    >
      <LSection heading={t("intro.heading")}>
        <LP>{t("intro.body", { site: SITE_NAME })}</LP>
      </LSection>

      <LSection heading={t("controller.heading")}>
        <LP>
          {t.rich("controller.body", {
            site: SITE_NAME,
            email: CONTACT.email,
            b: (chunks) => <strong>{chunks}</strong>,
            mail,
          })}
        </LP>
      </LSection>

      <LSection heading={t("collect.heading")}>
        <LP>{t("collect.intro")}</LP>
        <LUL>
          <LLI>{t("collect.items.name")}</LLI>
          <LLI>{t("collect.items.email")}</LLI>
          <LLI>{t("collect.items.company")}</LLI>
          <LLI>{t("collect.items.message")}</LLI>
        </LUL>
        <LP>{t("collect.outro")}</LP>
      </LSection>

      <LSection heading={t("purpose.heading")}>
        <LP>{t("purpose.body")}</LP>
      </LSection>

      <LSection heading={t("recipients.heading")}>
        <LP>{t("recipients.intro")}</LP>
        <LUL>
          <LLI>
            {t.rich("recipients.resend", {
              resend: (chunks) => (
                <LA href="https://resend.com/legal/privacy-policy">{chunks}</LA>
              ),
            })}
          </LLI>
          <LLI>{t("recipients.hosting")}</LLI>
        </LUL>
      </LSection>

      <LSection heading={t("retention.heading")}>
        <LP>{t("retention.body")}</LP>
      </LSection>

      <LSection heading={t("cookies.heading")}>
        <LP>{t("cookies.body")}</LP>
      </LSection>

      <LSection heading={t("rights.heading")}>
        <LP>{t("rights.body")}</LP>
        <LP>
          {t.rich("rights.exercise", {
            email: CONTACT.email,
            mail,
            dpc: (chunks) => (
              <LA href="https://www.dataprotection.ie">{chunks}</LA>
            ),
          })}
        </LP>
      </LSection>

      <LSection heading={t("security.heading")}>
        <LP>{t("security.body")}</LP>
      </LSection>

      <LSection heading={t("changes.heading")}>
        <LP>{t("changes.body")}</LP>
      </LSection>
    </LegalShell>
  );
}
