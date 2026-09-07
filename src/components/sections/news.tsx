import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Market watch: the sources shared by the company, each presented with its own
 * title, description and real image taken from the source page rather than a
 * stock photo of ours. `fit` is "contain" when that image is a logo (INN
 * publishes its logo as its Open Graph image) and "cover" when it is a
 * photograph.
 */
const SOURCES = [
  {
    key: "inn",
    href: "https://investingnews.com/world/resource-investing/precious-metals-investing/",
    image: "/images/news/investing-news-network.webp",
    width: 1200,
    height: 903,
    fit: "contain",
  },
  {
    key: "lbma",
    href: "https://www.lbma.org.uk/",
    image: "/images/news/lbma.webp",
    width: 1400,
    height: 933,
    fit: "cover",
  },
] as const;

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
          <p className="mt-5 mx-auto max-w-2xl text-pretty leading-relaxed text-ink-400">
            {t("intro")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2">
          {SOURCES.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={cn(
                  "relative aspect-[16/10] w-full overflow-hidden border-b border-ink-100",
                  s.fit === "contain" && "flex items-center justify-center p-8",
                )}
              >
                <Image
                  src={s.image}
                  alt={t(`items.${s.key}.source`)}
                  {...(s.fit === "cover"
                    ? { fill: true, sizes: "(min-width: 768px) 50vw, 100vw" }
                    : {
                        width: s.width,
                        height: s.height,
                        sizes: "(min-width: 768px) 320px, 60vw",
                      })}
                  className={cn(
                    s.fit === "cover"
                      ? "object-cover transition-transform duration-500 group-hover:scale-105"
                      : "h-auto w-full max-w-[200px] object-contain",
                  )}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t(`items.${s.key}.source`)}
                </p>
                <h3 className="mt-3 text-pretty font-display text-lg font-semibold leading-snug text-ink-700">
                  {t(`items.${s.key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">
                  {t(`items.${s.key}.excerpt`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600 transition-colors group-hover:text-gold-700">
                  {t("readMore")}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-ink-400">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
