import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Commodities } from "@/components/sections/commodities";
import { Markets } from "@/components/sections/markets";
import { WhyChoose } from "@/components/sections/why-choose";
import { News } from "@/components/sections/news";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/site/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Commodities />
        <Markets />
        <WhyChoose />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
