import { useTranslations } from "next-intl";
import { Globe2, ShieldCheck, Users2, TrendingUp } from "lucide-react";

const FEATURES = [
  { key: "global", Icon: Globe2 },
  { key: "trust", Icon: ShieldCheck },
  { key: "expert", Icon: Users2 },
  { key: "sustainable", Icon: TrendingUp },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-700 md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-ink-500">
              {t("paragraph1")}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-ink-500">
              {t("paragraph2")}
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center rounded-sm bg-gold-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold-600"
            >
              {t("cta")}
            </a>
          </div>

          <div className="flex items-center">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:gap-5">
              {FEATURES.map(({ key, Icon }) => (
                <div
                  key={key}
                  className="flex flex-col items-center justify-center rounded-md border border-gold-200/60 bg-white px-3 py-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:px-4 md:py-8"
                >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-300/70 text-gold-500">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide text-ink-700">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
