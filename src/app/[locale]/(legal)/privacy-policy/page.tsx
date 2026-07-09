import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/utils";
import {
  LegalShell,
  LSection,
  LP,
  LUL,
  LLI,
  LA,
} from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale === "fr";
  return {
    title: `${fr ? "Politique de Confidentialité" : "Privacy Policy"} — ${SITE_NAME}`,
    description: fr
      ? "Comment Alpha IES Ltd collecte, utilise et protège vos données personnelles."
      : "How Alpha IES Ltd collects, uses and protects your personal data.",
    alternates: {
      canonical: `${SITE_URL}${fr ? "/fr" : ""}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <LegalShell
      eyebrow={fr ? "Vie privée" : "Privacy"}
      title={fr ? "Politique de Confidentialité" : "Privacy Policy"}
      updated={fr ? "Dernière mise à jour : 9 juillet 2026" : "Last updated: 9 July 2026"}
    >
      <LSection heading={fr ? "Introduction" : "Introduction"}>
        <LP>
          {fr
            ? `${SITE_NAME} accorde une grande importance à la protection de vos données personnelles. La présente politique explique quelles données nous collectons via ce site, pourquoi, et quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD) et au droit irlandais applicable.`
            : `${SITE_NAME} is committed to protecting your personal data. This policy explains what data we collect through this website, why, and what your rights are, in accordance with the General Data Protection Regulation (GDPR) and applicable Irish law.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Responsable du traitement" : "Data controller"}>
        <LP>
          {fr
            ? "Le responsable du traitement des données est "
            : "The data controller is "}
          <strong>{SITE_NAME}</strong>
          {fr ? ". Pour toute question relative à vos données, contactez-nous à " : ". For any question regarding your data, contact us at "}
          <LA href={`mailto:${CONTACT.email}`}>{CONTACT.email}</LA>.
        </LP>
      </LSection>

      <LSection heading={fr ? "Données que nous collectons" : "Data we collect"}>
        <LP>
          {fr
            ? "Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact, à savoir :"
            : "We only collect the data you voluntarily provide through the contact form, namely:"}
        </LP>
        <LUL>
          <LLI>{fr ? "votre nom complet ;" : "your full name;"}</LLI>
          <LLI>{fr ? "votre adresse email ;" : "your email address;"}</LLI>
          <LLI>
            {fr
              ? "le nom de votre entreprise (facultatif) ;"
              : "your company name (optional);"}
          </LLI>
          <LLI>
            {fr
              ? "le contenu de votre message."
              : "the content of your message."}
          </LLI>
        </LUL>
        <LP>
          {fr
            ? "Nous ne collectons aucune donnée de navigation à des fins publicitaires et n'utilisons pas d'outils de suivi (analytics) tiers."
            : "We do not collect any browsing data for advertising purposes and do not use third-party tracking or analytics tools."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Finalités et base légale" : "Purpose and legal basis"}>
        <LP>
          {fr
            ? "Les données du formulaire de contact sont utilisées exclusivement pour traiter votre demande et y répondre. La base légale de ce traitement est notre intérêt légitime à répondre aux sollicitations qui nous sont adressées, ainsi que les mesures précontractuelles prises à votre demande."
            : "Contact form data is used solely to process and respond to your request. The legal basis for this processing is our legitimate interest in responding to enquiries addressed to us, as well as pre-contractual steps taken at your request."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Destinataires et sous-traitants" : "Recipients and processors"}>
        <LP>
          {fr
            ? "Vos données ne sont ni vendues ni louées. Elles sont accessibles à notre équipe interne et à nos prestataires techniques agissant en qualité de sous-traitants :"
            : "Your data is never sold or rented. It is accessible to our internal team and to our technical service providers acting as processors:"}
        </LP>
        <LUL>
          <LLI>
            {fr
              ? "Resend (envoi et acheminement des emails du formulaire de contact) — "
              : "Resend (delivery and routing of contact form emails) — "}
            <LA href="https://resend.com/legal/privacy-policy">
              resend.com
            </LA>
            {fr ? " ;" : ";"}
          </LLI>
          <LLI>
            {fr
              ? "notre hébergeur web, pour la mise à disposition technique du site."
              : "our web hosting provider, for the technical operation of the website."}
          </LLI>
        </LUL>
      </LSection>

      <LSection heading={fr ? "Durée de conservation" : "Data retention"}>
        <LP>
          {fr
            ? "Les messages reçus via le formulaire de contact sont conservés le temps nécessaire au traitement de votre demande et à la gestion de la relation qui peut en découler, puis archivés ou supprimés conformément à nos obligations légales."
            : "Messages received through the contact form are kept for as long as necessary to process your request and manage any resulting relationship, then archived or deleted in accordance with our legal obligations."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Cookies" : "Cookies"}>
        <LP>
          {fr
            ? "Ce site n'utilise pas de cookies publicitaires ni de cookies de mesure d'audience. Un cookie strictement fonctionnel (« NEXT_LOCALE ») peut être déposé afin de mémoriser votre préférence de langue. Ce cookie est nécessaire au bon fonctionnement du site et ne requiert pas de consentement."
            : "This website does not use advertising or analytics cookies. A strictly functional cookie (“NEXT_LOCALE”) may be stored to remember your language preference. This cookie is necessary for the website to function properly and does not require consent."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Vos droits" : "Your rights"}>
        <LP>
          {fr
            ? "Conformément au RGPD, vous disposez des droits suivants sur vos données : droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité."
            : "Under the GDPR, you have the following rights over your data: the right to access, rectify, erase, restrict, object to processing, and data portability."}
        </LP>
        <LP>
          {fr
            ? "Pour exercer ces droits, écrivez-nous à "
            : "To exercise these rights, contact us at "}
          <LA href={`mailto:${CONTACT.email}`}>{CONTACT.email}</LA>
          {fr
            ? ". Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle irlandaise, la "
            : ". You also have the right to lodge a complaint with the Irish supervisory authority, the "}
          <LA href="https://www.dataprotection.ie">
            {fr ? "Data Protection Commission" : "Data Protection Commission"}
          </LA>
          {fr
            ? ", ou auprès de l'autorité compétente de votre pays de résidence."
            : ", or with the competent authority in your country of residence."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Sécurité" : "Security"}>
        <LP>
          {fr
            ? "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès, altération ou divulgation non autorisés."
            : "We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration or disclosure."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Modifications" : "Changes to this policy"}>
        <LP>
          {fr
            ? "Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour figure en haut de cette page."
            : "This policy may be updated at any time. The date of the last update is shown at the top of this page."}
        </LP>
      </LSection>
    </LegalShell>
  );
}
