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
    streetAddress: "Pad 2, The Old Station House, 15a Main Street",
    addressLocality: "Blackrock",
    addressRegion: "Co. Dublin",
    postalCode: "A94 TRP8",
    addressCountry: "IE",
  },
  phone: "+33758867152",
  phoneDisplay: "+33 7 58 86 71 52",
  email: "happieelvira@alphaiesltd.com",
  social: {
    linkedin: "https://www.linkedin.com/company/alpha-ies-ltd",
    x: "https://x.com/alphaiesltd",
  },
} as const;
