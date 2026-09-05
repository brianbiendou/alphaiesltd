import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

/**
 * Market watch: the source shared by the company, presented with the article's
 * own title, description and Open Graph image rather than a stock photo of ours.
 */
const SOURCE = {
  href: "https://investingnews.com/world/resource-investing/precious-metals-investing/",
  image: "/images/news/investing-news-network.webp",
} as const;

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

        <a
          href={SOURCE.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mt-12 flex max-w-3xl flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg md:mt-16 md:flex-row"
        >
          <div className="flex shrink-0 items-center justify-center border-b border-ink-100 bg-white p-8 md:w-64 md:border-b-0 md:border-r">
            <Image
              src={SOURCE.image}
              alt={t("item.source")}
              width={1200}
              height={903}
              sizes="(min-width: 768px) 256px, 100vw"
              className="h-auto w-full max-w-[180px] object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">
              {t("item.source")}
            </p>
            <h3 className="mt-3 text-pretty font-display text-xl font-semibold leading-snug text-ink-700">
              {t("item.title")}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">
              {t("item.excerpt")}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600 transition-colors group-hover:text-gold-700">
              {t("readMore")}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </div>
        </a>

        <p className="mt-8 text-center text-xs leading-relaxed text-ink-400">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
