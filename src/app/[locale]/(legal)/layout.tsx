import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/site/locale-switcher";
import { Footer } from "@/components/site/footer";

export default async function LegalLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("nav");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-cream-300 bg-white">
        <div className="flex h-16 w-full items-center justify-between gap-4 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-28 2xl:px-52">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label={`${t("home")} — Alpha IES Ltd`}
          >
            <Image
              src="/images/logo/logo.webp"
              alt="Alpha IES Ltd logo"
              width={623}
              height={156}
              priority
              className="h-11 w-auto"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-600 transition-colors hover:text-gold-600"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
              {t("home")}
            </Link>
            <LocaleSwitcher dark={true} />
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
