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
      <div className="flex h-[4.32rem] w-full items-center gap-4 px-6 sm:px-10 md:h-16 md:px-12 lg:px-16 xl:px-28 2xl:px-52">
        <a
          href={homeHref}
          className="flex shrink-0 items-center"
          aria-label={`${t("home")} — Alpha IES Ltd`}
        >
          <Image
            src="/images/logo/logo.webp"
            alt="Alpha IES Ltd logo"
            width={623}
            height={156}
            priority
            className="h-[3.24rem] w-auto md:h-[3.0375rem]"
          />
        </a>

        <div className="flex flex-1 items-center justify-end gap-4 xl:gap-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-3 lg:flex xl:gap-6"
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
            <div className="flex h-[4.32rem] items-center justify-between px-5 md:h-16">
              <Image
                src="/images/logo/logo.webp"
                alt="Alpha IES Ltd logo"
                width={623}
                height={156}
                className="h-9 w-auto"
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
