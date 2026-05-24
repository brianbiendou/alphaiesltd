import Image from "next/image";
import { useTranslations } from "next-intl";

const ITEMS = [
  "lithium",
  "cobalt",
  "nickel",
  "manganese",
  "chromium",
  "rareEarths",
  "graphite",
] as const;

const POSITIONS = [
  "85% center",
  "37% center",
  "12% center",
  "62% center",
  "37% center",
  "85% center",
  "12% center",
];

export function Commodities() {
  const t = useTranslations("commodities");

  return (
    <section id="commodities" className="bg-ink-800 py-20 md:py-28">
      <div className="container-section">
        <div className="text-center">
          <p className="section-eyebrow !text-gold-400">{t("eyebrow")}</p>
          <h2 className="mt-4 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-white/60 md:text-base">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-7 md:mt-16">
          {ITEMS.map((key, i) => (
            <div key={key} className="group flex flex-col items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/10 md:h-24 md:w-24">
                <Image
                  src="/images/commodities/minerals.png"
                  alt={t(`items.${key}`)}
                  fill
                  sizes="(min-width: 1024px) 96px, 80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: POSITIONS[i] }}
                />
              </div>
              <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white md:text-sm">
                {t(`items.${key}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300"
          >
            {t("viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
