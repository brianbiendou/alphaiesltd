import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/site/reveal";

export function Commodities() {
  const t = useTranslations("commodities");

  return (
    <section id="commodities" className="bg-white pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="container-section">
        <Reveal className="text-center">
          <p className="section-eyebrow text-gold-600!">{t("eyebrow")}</p>
          <span
            aria-hidden
            className="mx-auto mt-3 block h-px w-10 bg-gold-500"
          />
          <h2 className="mt-6 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-ink-600 md:text-base">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16" delay={0.15} duration={0.9}>
          <Image
            src="/images/commodities/minerals.webp"
            alt={t("title")}
            width={2092}
            height={752}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="mx-auto h-auto w-full max-w-6xl"
          />
        </Reveal>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border border-ink-300 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-800 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-700"
          >
            {t("viewAll")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
