import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[70svh] items-center overflow-hidden"
    >
      <Image
        src="/images/hero/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="-z-10 object-cover object-center"
      />
      <div
        aria-hidden
        className="-z-10 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream-100"
      />

      <div className="w-full pl-6 pr-6 pt-24 pb-20 sm:pl-10 md:pt-28 md:pb-28 lg:pl-[31rem] lg:pr-12">
        <div className="relative max-w-3xl">
          <div
            aria-hidden
            className="absolute -inset-x-16 -inset-y-12 -z-10 rounded-[50%] bg-cream-100/80 blur-3xl"
          />

          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] text-ink-900 md:text-6xl lg:text-7xl">
            {t.rich("title", {
              br: () => <br />,
              highlight: (chunks) => (
                <span className="text-gold-600">{chunks}</span>
              ),
            })}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-700 md:text-lg">
            {t("description")}
          </p>
          <a
            href="#about"
            className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-gold-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-gold-600"
          >
            {t("cta")}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
