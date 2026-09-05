import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { COMPANY, CONTACT, HOSTING, SITE_NAME, SITE_URL } from "@/lib/utils";
import { LegalShell, LSection, LP, LA } from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale === "fr";
  return {
    title: `${fr ? "Mentions légales" : "Legal Notice"} — ${SITE_NAME}`,
    description: fr
      ? "Mentions légales et informations sur l'éditeur du site Alpha IES Ltd."
      : "Legal notice and publisher information for the Alpha IES Ltd website.",
    alternates: {
      canonical: `${SITE_URL}${fr ? "/fr" : ""}/legal-notice`,
    },
  };
}

export default async function LegalNoticePage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  const address = `${CONTACT.address.streetAddress}, ${CONTACT.address.addressLocality}, ${CONTACT.address.postalCode}, ${CONTACT.address.addressRegion}, ${fr ? "Irlande" : "Ireland"}`;

  return (
    <LegalShell
      eyebrow={fr ? "Informations légales" : "Legal information"}
      title={fr ? "Mentions Légales" : "Legal Notice"}
      updated={fr ? "Dernière mise à jour : 5 septembre 2026" : "Last updated: 5 September 2026"}
    >
      <LSection heading={fr ? "Éditeur du site" : "Site publisher"}>
        <LP>
          {fr
            ? "Le présent site est édité par :"
            : "This website is published by:"}
        </LP>
        <LP>
          <strong>{SITE_NAME}</strong>
          <br />
          {fr
            ? "Société à responsabilité limitée de droit irlandais (private company limited by shares)"
            : "Private company limited by shares incorporated in Ireland"}
          <br />
          {fr ? "Siège social : " : "Registered office: "}
          {address}
          <br />
          {fr
            ? "Numéro d'enregistrement au registre des sociétés (CRO) : "
            : "Company registration number (CRO): "}
          <strong>{COMPANY.registrationNumber}</strong>
          <br />
          {fr ? "Lieu d'immatriculation : " : "Place of registration: "}
          {fr
            ? `Irlande — ${COMPANY.registrar}`
            : `${COMPANY.placeOfRegistration} — ${COMPANY.registrar}`}
          <br />
          {fr ? "Email : " : "Email: "}
          <LA href={`mailto:${CONTACT.email}`}>{CONTACT.email}</LA>
          <br />
          {fr ? "Téléphone : " : "Phone: "}
          <LA href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</LA>
        </LP>
        <LP>
          {fr ? "Directrice de la publication : " : "Publication director: "}
          <strong>{COMPANY.director}</strong>
          {fr ? ", Fondatrice et Présidente" : ", Founder & CEO"}
        </LP>
      </LSection>

      <LSection heading={fr ? "Hébergement" : "Hosting"}>
        <LP>
          {fr
            ? "Le site est hébergé par :"
            : "The website is hosted by:"}
        </LP>
        <LP>
          <strong>{HOSTING.name}</strong>
          <br />
          {HOSTING.address}
          <br />
          <LA href={HOSTING.url}>{HOSTING.url.replace("https://", "")}</LA>
        </LP>
      </LSection>

      <LSection heading={fr ? "Propriété intellectuelle" : "Intellectual property"}>
        <LP>
          {fr
            ? `L'ensemble des éléments du site (textes, logos, marques, images, graphismes, mise en page) est la propriété de ${SITE_NAME} ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.`
            : `All elements of the website (text, logos, trademarks, images, graphics, layout) are the property of ${SITE_NAME} or its partners and are protected by intellectual property law. Any reproduction, representation or distribution, in whole or in part, without prior written consent is prohibited.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Responsabilité" : "Liability"}>
        <LP>
          {fr
            ? `${SITE_NAME} s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne saurait garantir qu'elles soient exhaustives, précises ou à jour. Les informations sont fournies à titre indicatif et ne constituent pas une offre contractuelle. ${SITE_NAME} ne pourra être tenue responsable de tout dommage résultant de l'accès au site ou de son utilisation.`
            : `${SITE_NAME} strives to ensure the accuracy of the information published on this website but cannot guarantee that it is complete, accurate or up to date. Information is provided for indicative purposes only and does not constitute a contractual offer. ${SITE_NAME} shall not be liable for any damage arising from access to or use of the website.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Données personnelles" : "Personal data"}>
        <LP>
          {fr
            ? "Le traitement de vos données personnelles est décrit dans notre "
            : "The processing of your personal data is described in our "}
          <LA href={fr ? "/fr/privacy-policy" : "/privacy-policy"}>
            {fr ? "Politique de Confidentialité" : "Privacy Policy"}
          </LA>
          .
        </LP>
      </LSection>

      <LSection heading={fr ? "Droit applicable" : "Governing law"}>
        <LP>
          {fr
            ? "Le présent site et les présentes mentions légales sont régis par le droit irlandais. Tout litige relève de la compétence des tribunaux irlandais."
            : "This website and this legal notice are governed by Irish law. Any dispute shall fall under the jurisdiction of the Irish courts."}
        </LP>
      </LSection>
    </LegalShell>
  );
}
