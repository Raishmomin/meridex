import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CountrySelection from "@/components/CountrySelection";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CountrySelection />
        <Services />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
