import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Building2, Mountain, Compass, Sun } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/reveal";

const REGIONS = [
  { key: "africa", Icon: MapPin },
  { key: "europe", Icon: Building2 },
  { key: "northAmerica", Icon: Mountain },
  { key: "southAmerica", Icon: Compass },
  { key: "middleEast", Icon: Sun },
] as const;

export function Markets() {
  const t = useTranslations("markets");

  return (
    <section
      id="markets"
      className="bg-cream-100 pt-10 pb-10 md:pt-14 md:pb-14"
    >
      <div className="container-section">
        <Reveal className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <span
            aria-hidden
            className="mx-auto mt-3 block h-px w-10 bg-gold-500"
          />
          <h2 className="mt-6 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-700 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-ink-500 md:text-base">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16" delay={0.15} duration={0.9}>
          <Image
            src="/images/markets/world-map.webp"
            alt=""
            width={1774}
            height={887}
            sizes="(min-width: 1280px) 1100px, 100vw"
            className="mx-auto h-auto w-full max-w-5xl opacity-60"
          />
        </Reveal>

        <RevealStagger className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-3 lg:grid-cols-5">
          {REGIONS.map(({ key, Icon }) => (
            <RevealItem key={key} className="group text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream-100 text-gold-500 ring-1 ring-gold-300/60 transition-all group-hover:bg-gold-500 group-hover:text-white">
                <Icon className="h-7 w-7" strokeWidth={1.4} />
              </div>
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-ink-700">
                {t(`regions.${key}`)}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
