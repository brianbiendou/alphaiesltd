import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  HandCoins,
  Boxes,
  LineChart,
  ShieldAlert,
  Truck,
} from "lucide-react";

const SERVICES = [
  {
    key: "trading",
    Icon: HandCoins,
    image: "/images/section3/trading sourcing.png",
    number: "01",
  },
  {
    key: "supply",
    Icon: Boxes,
    image: "/images/section3/supply chain.png",
    number: "02",
  },
  {
    key: "intelligence",
    Icon: LineChart,
    image: "/images/section3/market intelligence.png",
    number: "03",
  },
  {
    key: "risk",
    Icon: ShieldAlert,
    image: "/images/section3/risk management.png",
    number: "04",
  },
  {
    key: "logistics",
    Icon: Truck,
    image: "/images/section3/logistic solutions.png",
    number: "05",
  },
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-cream-100 pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container-section">
        <div className="text-center">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <span
            aria-hidden
            className="mx-auto mt-3 block h-px w-10 bg-gold-500"
          />
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.15] text-ink-700 md:text-4xl lg:text-5xl">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-gold-600">{chunks}</span>
              ),
            })}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-ink-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map(({ key, Icon, image, number }) => (
            <article
              key={key}
              className="group relative flex flex-col overflow-hidden rounded-md border border-gold-200/40 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>

              <div className="relative -mt-8 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-200/60 bg-white text-gold-500 shadow-md">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-4 pt-4 pb-2 text-center">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-700">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {t(`items.${key}.description`)}
                </p>
              </div>

              <div className="px-4 pb-3">
                <span className="font-display text-4xl font-bold leading-none text-ink-100">
                  {number}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
