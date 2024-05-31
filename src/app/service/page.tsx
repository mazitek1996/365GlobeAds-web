
"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

import { ImagesSlider } from "@/app/components/ui/images-slider";

import Layout from "@/app/components/layout/Layout"
import { Button } from "@/app/components/ui/moving-border";
import ServicesPage from "./services_and details";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { InfiniteMovingTestimoniesCards } from "../components/utilities/infinit_scrolling_testimonies_cards";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import CTAsSection from "../components/index/home/CTA/cta_section";
import TechStackSection from "../components/utilities/techStacks/tech_stack_section";
import { ServiceStickyScrollReveal } from "./service_scroll";

export default function Services() {

// Set browser tab title
useEffect(() => {
  document.title = "Nivarix: Services";
}, []);
  const serviceSectionRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  const handleExploreMoreClick = () => {
    if (serviceSectionRef.current) {
      serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://images.unsplash.com/photo-1700668497390-43014cf7a3b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1703750960115-47292be36300?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ];

    return (
        <Layout>
        <div>
    <section>
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                Empowering Your Digital Presence
              </motion.p>
        <button
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
              onClick={handleExploreMoreClick}
            >
              <span>Learn More →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
      </motion.div>
    </ImagesSlider>
    </section>
    <section className="py-12">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              Drive Success with Tailored Digital Marketing Solutions
            </h2>
            <p className="px-6 text-white md:text-sm lg:text-xl leading-relaxed">
              At 365GlobeAds, we bring your digital marketing strategies to life. Our team of experts specializes in creating tailored marketing campaigns, engaging content, and strategic SEO practices to elevate your brand. From concept to execution, we ensure exceptional results that drive growth and success.
            </p>
            <p className="px-6 text-white md:text-sm lg:text-xl leading-relaxed mt-6">
              Ready to enhance your digital footprint? Let's discuss your project today!
            </p>
            <Link href="/contact">
              <button
                className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
              >
                <span>Get a Free Consultation</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </Link>
          </div>
        </section>

      <section ref={serviceSectionRef}>
          <ServiceStickyScrollReveal />
        </section>

<section>
  <ServicesPage/>
</section>

<TechStackSection/>

<section>
  <InfiniteMovingTestimoniesCards/>
</section>

<section>
</section>
<section>
  <FAQsSection/>
</section>

<section>
  <CTAsSection/>
</section>

        </div>
 </Layout>
    )
}

