import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const ITEMS = ["energy", "supply", "africa", "outlook"] as const;

const POSITIONS = ["20% center", "55% center", "75% center", "40% center"];

export function News() {
  const t = useTranslations("news");

  return (
    <section id="news" className="bg-cream-100 py-20 md:py-28">
      <div className="container-section">
        <div className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-700 md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((key, i) => (
            <article
              key={key}
              className="group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/hero/hero.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: POSITIONS[i] }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t(`items.${key}.date`)}
                </p>
                <h3 className="mt-3 text-pretty font-display text-lg font-semibold leading-snug text-ink-700">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
                  {t(`items.${key}.excerpt`)}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600 transition-colors hover:text-gold-700"
                >
                  {t("readMore")}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
