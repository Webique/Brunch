import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import GoogleMap from "./components/google-map";
import HeroSection from "./components/hero-section";
import VisionMissionSection from "./components/vision-mission-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import IdentitySection from "./components/identity-section";
import CtaSection from "./components/cta-section";
import ContactSection from "./components/contact-section";

import WhatsAppFloat from "@/components/whats-app-float";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <VisionMissionSection />
      <AboutSection />
      <ServicesSection />
      <IdentitySection />
      <CtaSection />
      <ContactSection />
      <GoogleMap />
      <WhatsAppFloat />
    </main>
  );
}
