"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/utils";

export function Contact() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-cream-200 py-20 md:py-28">
      <div className="container-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-700 md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-ink-500">
              {t("subtitle")}
            </p>

            <ul className="mt-10 space-y-5 text-sm md:text-base">
              <li className="flex items-start gap-4 text-ink-600">
                <MapPin
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                  strokeWidth={1.6}
                />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-4 text-ink-600">
                <Phone
                  className="h-5 w-5 flex-shrink-0 text-gold-500"
                  strokeWidth={1.6}
                />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="transition-colors hover:text-gold-600"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4 text-ink-600">
                <Mail
                  className="h-5 w-5 flex-shrink-0 text-gold-500"
                  strokeWidth={1.6}
                />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold-600"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-md bg-white p-6 shadow-sm md:p-10"
          >
            {sent ? (
              <p className="py-12 text-center font-display text-xl text-gold-600">
                {t("form.success")}
              </p>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field name="name" label={t("form.name")} required />
                  <Field
                    name="email"
                    type="email"
                    label={t("form.emailLabel")}
                    required
                  />
                </div>
                <Field name="company" label={t("form.company")} />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-sm border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none transition-colors focus:border-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-sm bg-gold-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold-600"
                >
                  {t("form.submit")}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-ink-700 outline-none transition-colors focus:border-gold-500"
      />
    </div>
  );
}
