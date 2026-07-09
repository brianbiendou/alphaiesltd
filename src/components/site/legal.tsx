import type { ReactNode } from "react";

/**
 * Shared building blocks for the legal pages (legal notice, privacy policy,
 * terms). Kept as plain presentational components so each page can compose its
 * bilingual content while sharing consistent typography with the rest of the
 * site.
 */

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white">
      <div className="container-section py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-700 md:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-4 text-sm text-ink-400">{updated}</p>
          )}
          <div className="mt-12 space-y-10">{children}</div>
        </div>
      </div>
    </main>
  );
}

export function LSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink-700 md:text-2xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function LP({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty leading-relaxed text-ink-500">{children}</p>
  );
}

export function LUL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink-500">
      {children}
    </ul>
  );
}

export function LLI({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function LA({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className="text-gold-600 underline-offset-2 transition-colors hover:text-gold-500 hover:underline"
      {...(external && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

/** Placeholder marker for information the client still has to provide. */
export function TODO({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-sm bg-gold-100 px-1.5 py-0.5 text-ink-700">
      [{children}]
    </mark>
  );
}
