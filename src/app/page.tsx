import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CountrySelection from "@/components/CountrySelection";
import Services from "@/components/Services";
import ToolsShowcase from "@/components/ToolsShowcase";
import WhyMeridex from "@/components/WhyMeridex";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatbotBubble from "@/components/ChatbotBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CountrySelection />
        <Services />
        <ToolsShowcase />
        <WhyMeridex />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {/* Floating Interactive Chatbot Bubble */}
      <ChatbotBubble />
    </>
  );
}
