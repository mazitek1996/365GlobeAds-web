
"use client";
import React, { useRef, useEffect } from "react";

import Layout from "@/app/components/layout/Layout"
import { LayoutGridDemo } from "./portfolio_hero";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { HeroParallaxDemo } from "./portfoilio_paralex";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";
import CTAsSection from "../components/index/home/CTA/cta_section";

export default function Portfolio() {

   // Set browser tab title
   useEffect(() => {
    document.title = "Nivarix: Our Portfolio";
  }, []);


    
return (

   <Layout>
    
    <div >
    <BackgroundBeams className="z-0 absolute top-0 left-0 w-full h-full" />

      <section>
        <LayoutGridDemo/>
      </section>


      <section>
<HeroParallaxDemo/>
      </section>

      <section>
<TestimonialSection/>

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