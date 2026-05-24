import { useTranslations } from "next-intl";
import { Award, Handshake, BadgeCheck, HeartHandshake, Lightbulb } from "lucide-react";

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
    <section id="why" className="bg-cream-100 py-20 md:py-28">
      <div className="container-section">
        <div className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-700 md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map(({ key, Icon }) => (
            <div key={key} className="group text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center text-gold-500 transition-transform group-hover:scale-110">
                <Icon className="h-10 w-10" strokeWidth={1.4} />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-ink-700">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-ink-400 md:text-sm">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
