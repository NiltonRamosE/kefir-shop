import React from 'react';
import Navbar from "@/shared/Navbar"
import Footer from "@/shared/Footer"
import HeroSection from "@/project/home/sections/HeroSection"
import FAQSection from "@/project/home/sections/FAQSection"
import ContactSection from "@/project/home/sections/ContactSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};