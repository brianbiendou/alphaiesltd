import { useTranslations } from "next-intl";
import {
  HandCoins,
  Boxes,
  LineChart,
  ShieldAlert,
  Truck,
} from "lucide-react";

const SERVICES = [
  { key: "trading", Icon: HandCoins },
  { key: "supply", Icon: Boxes },
  { key: "intelligence", Icon: LineChart },
  { key: "risk", Icon: ShieldAlert },
  { key: "logistics", Icon: Truck },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-cream-100 pb-20 md:pb-28">
      <div className="container-section">
        <div className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-700 md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map(({ key, Icon }) => (
            <div key={key} className="group text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-gold-500 transition-transform group-hover:scale-110">
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
