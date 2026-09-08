import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { COMPANY, CONTACT, HOSTING, SITE_NAME, SITE_URL } from "@/lib/utils";
import { languageAlternates, localePath } from "@/i18n/routing";
import { LegalShell, LSection, LP, LA } from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

const PATH = "/legal-notice";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.notice" });

  return {
    title: `${t("metaTitle")} — ${SITE_NAME}`,
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, PATH)}`,
      languages: languageAlternates(SITE_URL, PATH),
    },
  };
}

export default async function LegalNoticePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal.notice");
  const tl = await getTranslations("legal");

  const address = `${CONTACT.address.streetAddress}, ${CONTACT.address.addressLocality}, ${CONTACT.address.postalCode}, ${CONTACT.address.addressRegion}, ${tl("country")}`;

  return (
    <LegalShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      updated={t("updated")}
    >
      <LSection heading={t("publisher.heading")}>
        <LP>{t("publisher.intro")}</LP>
        <LP>
          <strong>{SITE_NAME}</strong>
          <br />
          {t("publisher.legalForm")}
          <br />
          {t("publisher.officeLabel")}
          {address}
          <br />
          {t("publisher.croLabel")}
          <strong>{COMPANY.registrationNumber}</strong>
          <br />
          {t("publisher.placeLabel")}
          {t("publisher.place", { registrar: COMPANY.registrar })}
          <br />
          {t("publisher.emailLabel")}
          <LA href={`mailto:${CONTACT.email}`}>{CONTACT.email}</LA>
          <br />
          {t("publisher.phoneLabel")}
          <LA href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</LA>
        </LP>
        <LP>
          {t("publisher.directorLabel")}
          <strong>{COMPANY.director}</strong>
          {t("publisher.directorRole")}
        </LP>
      </LSection>

      <LSection heading={t("hosting.heading")}>
        <LP>{t("hosting.intro")}</LP>
        <LP>
          <strong>{HOSTING.name}</strong>
          <br />
          {HOSTING.address}
          <br />
          <LA href={HOSTING.url}>{HOSTING.url.replace("https://", "")}</LA>
        </LP>
      </LSection>

      <LSection heading={t("ip.heading")}>
        <LP>{t("ip.body", { site: SITE_NAME })}</LP>
      </LSection>

      <LSection heading={t("liability.heading")}>
        <LP>{t("liability.body", { site: SITE_NAME })}</LP>
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
    </LegalShell>
  );
}
