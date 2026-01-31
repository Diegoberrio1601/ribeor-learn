import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/About";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header dict={dict.header} lang={lang} key={lang} />
      <main>
        <Hero dict={dict.hero} />
        <Roadmap dict={dict.roadmap} />
        <About dict={dict.about} />
        <Pricing dict={dict.pricing} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}