"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, LOCALE_LABELS, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Language picker rendered as a globe button that opens a dropdown listing
 * every locale by its native name. Replaces the former inline "EN · FR" pair
 * so the control stays the same size as locales are added.
 */
export function LocaleSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 rounded-sm p-1.5 transition-colors",
          dark
            ? "text-ink-600 hover:text-gold-600"
            : "text-white/80 hover:text-gold-300",
          open && (dark ? "text-gold-600" : "text-gold-300"),
          isPending && "opacity-50",
        )}
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-5 w-5" strokeWidth={1.7} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] xl:text-[11px]">
          {locale}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-[70] mt-2 min-w-[9.5rem] overflow-hidden rounded-sm border border-cream-300 bg-white py-1 shadow-lg"
        >
          {routing.locales.map((l) => (
            <li key={l} role="none">
              <button
                type="button"
                role="option"
                aria-selected={locale === l}
                onClick={() => select(l)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-[13px] transition-colors",
                  locale === l
                    ? "font-semibold text-gold-600"
                    : "text-ink-600 hover:bg-cream-100 hover:text-gold-600",
                )}
              >
                {LOCALE_LABELS[l]}
                {locale === l && (
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.4} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
