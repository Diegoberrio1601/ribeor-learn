import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Roadmap />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}