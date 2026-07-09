import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/utils";
import { LegalShell, LSection, LP, LA } from "@/components/site/legal";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale === "fr";
  return {
    title: `${fr ? "Conditions Générales d'Utilisation" : "Terms & Conditions"} — ${SITE_NAME}`,
    description: fr
      ? "Conditions générales d'utilisation du site Alpha IES Ltd."
      : "Terms and conditions governing the use of the Alpha IES Ltd website.",
    alternates: {
      canonical: `${SITE_URL}${fr ? "/fr" : ""}/terms`,
    },
  };
}

export default async function TermsPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === "fr";

  return (
    <LegalShell
      eyebrow={fr ? "Conditions" : "Terms"}
      title={fr ? "Conditions Générales d'Utilisation" : "Terms & Conditions"}
      updated={fr ? "Dernière mise à jour : 9 juillet 2026" : "Last updated: 9 July 2026"}
    >
      <LSection heading={fr ? "Objet" : "Purpose"}>
        <LP>
          {fr
            ? `Les présentes conditions générales régissent l'accès et l'utilisation du site ${SITE_NAME} (le « Site »). En accédant au Site, vous acceptez sans réserve les présentes conditions.`
            : `These terms and conditions govern access to and use of the ${SITE_NAME} website (the “Site”). By accessing the Site, you accept these terms without reservation.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Accès au site" : "Access to the site"}>
        <LP>
          {fr
            ? "Le Site est accessible gratuitement. Nous nous efforçons d'en assurer la disponibilité mais ne pouvons la garantir. Le Site peut être interrompu, notamment pour maintenance, sans que notre responsabilité puisse être engagée."
            : "The Site is accessible free of charge. We endeavour to keep it available but cannot guarantee this. The Site may be interrupted, in particular for maintenance, without incurring any liability on our part."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Contenu et responsabilité" : "Content and liability"}>
        <LP>
          {fr
            ? `Les informations présentées sur le Site sont fournies à titre général et indicatif. Elles ne constituent ni un conseil, ni une offre contractuelle, ni un engagement de la part de ${SITE_NAME}. Toute opération de négoce ou de sourcing fait l'objet d'accords contractuels distincts et spécifiques.`
            : `The information presented on the Site is provided for general and indicative purposes only. It does not constitute advice, a contractual offer, or a commitment on the part of ${SITE_NAME}. Any trading or sourcing operation is subject to separate, specific contractual agreements.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Propriété intellectuelle" : "Intellectual property"}>
        <LP>
          {fr
            ? `Tous les contenus du Site (textes, images, logos, marques) sont protégés et demeurent la propriété de ${SITE_NAME} ou de ses partenaires. Toute utilisation non autorisée est interdite.`
            : `All content on the Site (text, images, logos, trademarks) is protected and remains the property of ${SITE_NAME} or its partners. Any unauthorised use is prohibited.`}
        </LP>
      </LSection>

      <LSection heading={fr ? "Liens externes" : "External links"}>
        <LP>
          {fr
            ? "Le Site peut contenir des liens vers des sites tiers. Nous n'exerçons aucun contrôle sur ces sites et déclinons toute responsabilité quant à leur contenu."
            : "The Site may contain links to third-party websites. We have no control over these sites and accept no responsibility for their content."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Données personnelles" : "Personal data"}>
        <LP>
          {fr
            ? "L'utilisation de vos données personnelles est régie par notre "
            : "The use of your personal data is governed by our "}
          <LA href={fr ? "/fr/privacy-policy" : "/privacy-policy"}>
            {fr ? "Politique de Confidentialité" : "Privacy Policy"}
          </LA>
          .
        </LP>
      </LSection>

      <LSection heading={fr ? "Droit applicable" : "Governing law"}>
        <LP>
          {fr
            ? "Les présentes conditions sont régies par le droit irlandais. Tout litige relève de la compétence exclusive des tribunaux irlandais."
            : "These terms are governed by Irish law. Any dispute shall fall under the exclusive jurisdiction of the Irish courts."}
        </LP>
      </LSection>

      <LSection heading={fr ? "Contact" : "Contact"}>
        <LP>
          {fr
            ? "Pour toute question relative aux présentes conditions, contactez-nous à "
            : "For any question regarding these terms, contact us at "}
          <LA href={`mailto:${CONTACT.email}`}>{CONTACT.email}</LA>.
        </LP>
      </LSection>
    </LegalShell>
  );
}
