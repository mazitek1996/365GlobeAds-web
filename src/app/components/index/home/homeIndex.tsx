import { HeroScreen } from "./hero/hero";

import AboutSection from "./about/about_section";
import ServiceSection from "./services/service_section";
import { PortfolioSection } from "./portifolio/PortfolioSection";
import TestimonialSection from "./testimonies/TestimonialsSection";
import ContactUsSection from "./contact/ContactUsSection";
import ClientPartnerSection from "./client/ClientsSection";
import CTAsSection from "./CTA/cta_section";
import TechStackSection from "../../utilities/techStacks/tech_stack_section";
import FAQsSection from "./FAQs/faq_section";

export default function HomeIndex() {
  return (
    <div>
      <HeroScreen />
      <AboutSection  />

      <ServiceSection />

      {/* <PortfolioSection /> */}

      <TestimonialSection />

      {/* <ClientPartnerSection /> */}

      <TechStackSection/>

      <FAQsSection />

      <CTAsSection />
    </div>
  );
}



