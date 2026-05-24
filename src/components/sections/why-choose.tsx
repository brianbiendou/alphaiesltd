import { useTranslations } from "next-intl";
import { Award, Handshake, BadgeCheck, HeartHandshake, Lightbulb } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/reveal";

const ITEMS = [
  { key: "expertise", Icon: Award },
  { key: "partnerships", Icon: Handshake },
  { key: "quality", Icon: BadgeCheck },
  { key: "customer", Icon: HeartHandshake },
  { key: "innovation", Icon: Lightbulb },
] as const;

export function WhyChoose() {
  const t = useTranslations("why");

  return (
    <section id="why" className="bg-white pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="container-section">
        <Reveal className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <span
            aria-hidden
            className="mx-auto mt-2 block h-px w-40 bg-gold-500"
          />
          <h2 className="mt-6 mx-auto max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-800 md:text-5xl lg:text-6xl">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-gold-600">{chunks}</span>
              ),
            })}
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-ink-500 md:text-base">
            {t("subtitle")}
          </p>
        </Reveal>

        <RevealStagger className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map(({ key, Icon }) => (
            <RevealItem
              key={key}
              className="group relative flex flex-col items-center rounded-md border border-gold-200/40 bg-white px-5 pt-8 pb-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-300/70 bg-white text-gold-500">
                <Icon className="h-8 w-8" strokeWidth={1.3} />
              </div>
              <span
                aria-hidden
                className="mt-1 block h-4 w-px bg-gold-300/70"
              />
              <h3 className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-800">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {t(`items.${key}.description`)}
              </p>
              <span
                aria-hidden
                className="mt-6 block h-px w-8 bg-gold-500"
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
