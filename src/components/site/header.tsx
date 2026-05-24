"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";

const SECTIONS = [
  { id: "top", key: "home" },
  { id: "about", key: "about" },
  { id: "services", key: "services" },
  { id: "commodities", key: "commodities" },
  { id: "markets", key: "markets" },
  { id: "why", key: "sustainability" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homeHref = locale === "en" ? "/" : `/${locale}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <a
        href={homeHref}
        className="absolute left-6 top-1/2 z-10 flex -translate-y-1/2 items-center sm:left-10 md:left-12 md:translate-y-0 md:top-0 lg:left-16 lg:-top-2 xl:left-44 xl:-top-6 2xl:left-46"
        aria-label={`${t("home")} — Alpha IES Ltd`}
      >
        <Image
          src="/images/logo/logo.webp"
          alt="Alpha IES Ltd logo"
          width={240}
          height={86}
          priority
          className="h-[5.5rem] w-auto md:h-24 lg:h-24 xl:h-28"
        />
      </a>

      <div className="flex h-24 w-full items-center justify-end gap-4 pl-6 pr-6 sm:pl-10 sm:pr-10 md:pl-12 md:pr-12 md:h-16 lg:pl-[16rem] lg:pr-6 xl:gap-6 xl:pl-[31rem] xl:pr-28 2xl:pr-52">
        <div className="flex items-center gap-4 xl:gap-7">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-3 lg:flex xl:gap-7"
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-600 transition-colors hover:text-gold-600 xl:text-[11px] xl:tracking-[0.14em]"
              >
                {t(s.key)}
              </a>
            ))}
          </nav>
          <LocaleSwitcher dark={true} />
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-sm bg-gold-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-gold-600 md:inline-block xl:text-[11px] xl:tracking-[0.14em]"
          >
            {t("cta")}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-ink-700 lg:hidden"
            aria-label={t("menu")}
            aria-expanded={open}
          >
            <Menu className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("close")}
            className="fixed inset-0 z-[59] bg-black/40 lg:hidden"
          />
          <div className="fixed inset-y-0 right-0 z-[60] flex w-1/2 min-w-[15rem] flex-col bg-white shadow-2xl lg:hidden">
            <div className="flex h-20 items-center justify-between px-5">
              <Image
                src="/images/logo/logo.webp"
                alt="Alpha IES Ltd logo"
                width={180}
                height={64}
                className="h-10 w-auto"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-ink-700"
                aria-label={t("close")}
              >
                <X className="h-7 w-7" strokeWidth={1.5} />
              </button>
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col items-start gap-5 px-5 pt-8"
            >
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink-800 transition-colors hover:text-gold-600"
                >
                  {t(s.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-sm bg-gold-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-colors hover:bg-gold-600"
              >
                {t("cta")}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
