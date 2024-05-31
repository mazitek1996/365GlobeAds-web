
"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { GoogleGeminiEffect } from "@/app/components/ui/google-gemini-effect";
import Layout from "../components/layout/Layout";
import { AboutTracingBeam } from "./about_tracing_beam";
import PartnerLogos from "../components/utilities/PartnerLogos";
import { InfiniteMovingTestimoniesCards } from "../components/utilities/infinit_scrolling_testimonies_cards";
import TechStackSection from "../components/utilities/techStacks/tech_stack_section";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import CTAsSection from "../components/index/home/CTA/cta_section";

const About: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

   // Set browser tab title
   useEffect(() => {
    document.title = "365GlobeAds: About Us";
  }, []);


  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <Layout>
      <main>
        <section>
          <div
            className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-10 overflow-clip"
            ref={ref}
          >
            <GoogleGeminiEffect
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          </div>
        </section>

        <section>
          <div className="lg:mb-10 md:mb-4">
            <AboutTracingBeam />
          </div>
        </section>
        <section className="w-full rounded-md relative pt-20 overflow-clip flex justify-center py-10">
          <PartnerLogos />
        </section>

        <section>
          <div>
            <InfiniteMovingTestimoniesCards />
          </div>
        </section>
        <section>
          <TechStackSection />
        </section>

        <section>
          <FAQsSection />
        </section>

        <section>
          <CTAsSection />
        </section>
      </main>
    </Layout>
  );
};

export default About;
