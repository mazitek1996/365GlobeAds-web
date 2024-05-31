"use client";
import React, { useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";

import Layout from "@/app/components/layout/Layout";
import ContactCardsSection from "./contact_cards_section";
import ContactInformationSection from "./contact_information";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";

export default function ContactUS() {
  const contactSectionRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  const handleExploreMoreClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Set browser tab title
  useEffect(() => {
    document.title = "Nivarix: Contact Us";
  }, []);

  return (
    <Layout>
      <section>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Let's Connect and <br /> Create Together
          </motion.h1>

          <button
            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            onClick={handleExploreMoreClick}
          >
            <span>Get Started →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </LampContainer>
      </section>

      <div className="container mx-auto py-8" ref={contactSectionRef}>
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <ContactCardsSection />
        <ContactInformationSection />
        {/* Include other sections here */}
      </div>

      <TestimonialSection />

      <FAQsSection />
    </Layout>
  );
}
