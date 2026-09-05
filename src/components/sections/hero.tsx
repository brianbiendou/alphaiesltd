import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85svh] flex-col overflow-hidden md:min-h-[70svh] md:flex-row md:items-center"
    >
      <Image
        src="/images/hero/heromobile.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        quality={90}
        className="-z-10 object-cover object-top md:hidden"
      />
      <Image
        src="/images/hero/hero.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        quality={90}
        className="-z-10 hidden object-cover object-center md:block"
      />
      <div
        aria-hidden
        className="-z-10 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream-100"
      />

      <div className="container-section flex w-full flex-1 flex-col pt-40 pb-10 md:flex-none md:pt-28 md:pb-28">
        <div className="relative flex max-w-3xl flex-1 flex-col md:flex-none">
          <div
            aria-hidden
            className="absolute -left-32 right-56 -top-20 -bottom-4 -z-10 rounded-[50%] bg-cream-100/50 blur-3xl"
          />

          <h1 className="text-balance font-display text-3xl font-semibold leading-[1.05] text-ink-900 md:text-4xl lg:text-5xl">
            {t.rich("title", {
              br: () => <br />,
              lgbr: () => <br className="hidden lg:inline" />,
              highlight: (chunks) => (
                <span className="text-gold-600">{chunks}</span>
              ),
            })}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-700 md:text-lg">
            {t("description")}
          </p>
          <a
            href="#contact"
            className="group mt-auto inline-flex w-fit items-center gap-2 rounded-sm bg-gold-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-gold-600 md:mt-10"
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
