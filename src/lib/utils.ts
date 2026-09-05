import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphaiesltd.com";

export const SITE_NAME = "Alpha IES Ltd";

export const CONTACT = {
  address: {
    streetAddress: "Pod 2, The Old Station House, 15a Main Street",
    addressLocality: "Blackrock",
    addressRegion: "Co. Dublin",
    postalCode: "A94 T8P8",
    addressCountry: "IE",
  },
  phone: "+33758867152",
  phoneDisplay: "+33 7 58 86 71 52",
  email: "contact@alphaiesltd.com",
  social: {
    linkedin: "https://www.linkedin.com/company/alpha-ies-ltd/",
  },
} as const;

/** Statutory company identity — required on Irish company websites (Companies Act 2014, s.151). */
export const COMPANY = {
  legalName: SITE_NAME,
  /** Companies Registration Office (CRO) number. */
  registrationNumber: "810899",
  registrar: "Companies Registration Office (CRO)",
  placeOfRegistration: "Ireland",
  foundingDate: "2025",
  /** Founder & CEO — also the publication director named in the legal notice. */
  director: "Elvire Waha Happi",
} as const;

/** Hosting provider, disclosed in the legal notice. */
export const HOSTING = {
  name: "Vercel Inc.",
  address: "340 S Lemon Ave #4133, Walnut, CA 91789, United States",
  url: "https://vercel.com",
} as const;
