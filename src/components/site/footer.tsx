import Image from "next/image";
import { useTranslations } from "next-intl";
import { Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const QUICK = [
  { hash: "top", key: "home" },
  { hash: "about", key: "about" },
  { hash: "services", key: "services" },
  { hash: "commodities", key: "commodities" },
  { hash: "markets", key: "markets" },
] as const;

const COMPANY = [
  { hash: "why", key: "sustainability" },
  { hash: "contact", key: "contact" },
] as const;

const LEGAL = [
  { href: "/legal-notice", key: "legal" },
  { href: "/privacy-policy", key: "privacy" },
  { href: "/terms", key: "terms" },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-800 text-white">
      <div className="container-section grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr_1fr]">
        <div>
          <Image
            src="/images/logo/logo.webp"
            alt="Alpha IES Ltd"
            width={623}
            height={156}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {t("footer.tagline")}
          </p>
        </div>

        <FooterCol title={t("footer.quickLinks")}>
          {QUICK.map((l) => (
            <FooterLink key={l.key} href={{ pathname: "/", hash: l.hash }}>
              {t(`nav.${l.key}`)}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title={t("footer.company")}>
          {COMPANY.map((l) => (
            <FooterLink key={l.key} href={{ pathname: "/", hash: l.hash }}>
              {t(`nav.${l.key}`)}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title={t("footer.contactTitle")}>
          <li className="flex items-start gap-3 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" strokeWidth={1.6} />
            <span>{t("contact.address")}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-white/70">
            <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" strokeWidth={1.6} />
            <a href={`tel:${CONTACT.phone}`} className="hover:text-gold-300">
              {CONTACT.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3 text-sm text-white/70">
            <Mail className="h-4 w-4 flex-shrink-0 text-gold-400" strokeWidth={1.6} />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">
              {CONTACT.email}
            </a>
          </li>
        </FooterCol>

        <FooterCol title={t("footer.followUs")}>
          <div className="flex gap-3">
            <a
              href={CONTACT.social.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-gold-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href={CONTACT.social.x}
              aria-label="X (Twitter)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-gold-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-section flex flex-col items-center justify-between gap-4 py-5 text-xs text-white/50 md:flex-row">
          <p>{t("footer.rights", { year })}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {LEGAL.map((l) => (
              <Link key={l.key} href={l.href} className="hover:text-gold-300">
                {t(`footer.${l.key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: { pathname: "/"; hash: string };
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/70 transition-colors hover:text-gold-300"
      >
        {children}
      </Link>
    </li>
  );
}
