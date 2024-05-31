"use client";

import React, { useRef, useEffect } from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/lib/utils";
import Layout from "../components/layout/Layout";
import PartnerInvestorContactForm from "./ContactForm";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InvestorsContact() {
  // Set browser tab title
  useEffect(() => {
    document.title = "Invest in our Innovation - 365GlobeAds";
  }, []);

  return (
    <Layout>
      <div>
        <section>
          {/* Hero Section */}
          <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
              Invest in Innovation - 365GlobeAds
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
              Join us in shaping the future. Be part of groundbreaking ventures
              that are transforming industries.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row container lg:px-0">
          {/* Left Side: Description of Services */}
          <div className="md:w-1/2 py-8">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Our Vision: Shaping the Future Through Collaborative Innovation
            </h2>
            <p className="text-gray-100 mb-4">
              At 365GlobeAds, we hold a firm belief in the transformative power of
              technology. Our unwavering dedication lies in pioneering
              groundbreaking technologies and ventures that not only disrupt
              industries but also pave the way for sustainable growth on a
              global scale. We envision a future where collaboration is key. We
              actively seek visionary partners like you who share our passion
              for innovation and a commitment to creating a lasting impact.
              Together, we can shape the future and push the boundaries of
              what's possible.
            </p>

            <Image
              src="/static/images/pics/Investor-presentation-pana.svg"
              height={600}
              width={800}
              alt={"investor contact image"}
            />

            <p className="text-gray-100 mb-4">
              Whether you're an investor seeking lucrative opportunities to fuel
              groundbreaking advancements or a potential partner with a shared
              vision for creating innovative solutions, we invite you to join us
              on this exciting journey. Together, we can build a brighter
              tomorrow, one that is shaped by collaboration, cutting-edge
              technology, and a relentless pursuit of progress.
            </p>
            {/* Add more descriptive text as needed */}
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 p-8">
            <PartnerInvestorContactForm />
            <ToastContainer />

          </div>
        </section>

        <section>
          <FAQsSection />
        </section>

        <section>
          <TestimonialSection />
        </section>
      </div>
    </Layout>
  );
}
