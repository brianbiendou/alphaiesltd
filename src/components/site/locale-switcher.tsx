"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

export function LocaleSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em]",
        dark ? "text-ink-500" : "text-white/80",
        isPending && "opacity-50",
      )}
      aria-label="Language switcher"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() =>
              startTransition(() => {
                router.replace(pathname, { locale: l });
              })
            }
            className={cn(
              "transition-colors",
              locale === l
                ? dark
                  ? "text-gold-600"
                  : "text-gold-300"
                : "hover:text-gold-500",
            )}
            aria-current={locale === l ? "true" : undefined}
          >
            {l.toUpperCase()}
          </button>
          {i < routing.locales.length - 1 && <span aria-hidden>·</span>}
        </span>
      ))}
    </div>
  );
}
