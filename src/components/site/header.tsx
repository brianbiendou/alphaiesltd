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
        className="absolute left-40 -top-6 z-10 flex items-center sm:left-44 lg:left-46"
        aria-label={`${t("home")} — Alpha IES Ltd`}
      >
        <Image
          src="/images/logo/logo.png"
          alt="Alpha IES Ltd logo"
          width={240}
          height={86}
          priority
          className="h-24 w-auto md:h-28"
        />
      </a>

      <div className="flex h-14 w-full items-center justify-end gap-6 pl-6 pr-28 sm:pl-10 sm:pr-36 md:h-16 lg:pl-12 lg:pr-52">
        <div className="flex items-center gap-5 xl:gap-7">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
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
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink-800 lg:hidden">
          <div className="container-section flex h-20 items-center justify-between">
            <Image
              src="/images/logo/logo.png"
              alt="Alpha IES Ltd logo"
              width={180}
              height={64}
              className="h-12 w-auto brightness-0 invert"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white"
              aria-label={t("close")}
            >
              <X className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="container-section flex flex-1 flex-col items-start gap-6 pt-12"
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream-100 transition-colors hover:text-gold-400"
              >
                {t(s.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-sm bg-gold-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              {t("cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
