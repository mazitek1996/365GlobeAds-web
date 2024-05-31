"use client";
import React, { useRef, useEffect } from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/lib/utils";
import Layout from "../components/layout/Layout";
import ClientContactForm from "./ContactForm";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ClientsContact() {
  // Set browser tab title
  useEffect(() => {
    document.title = "365GlobeAds: Hire Us - Grow Your Business with Expert Solutions";
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
              Bring Your Ideas to Life: Tailored Solutions for Your Business
              Growth
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
              Transform your business with our expert solutions. We craft
              tailored strategies to help you achieve your goals and drive
              growth.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row container lg:px-0">
          {/* Left Side: Description of Services */}
          <div className="md:w-1/2 py-8">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Empower Your Business Growth
            </h2>
            <p className="text-gray-100 mb-4">
              Struggling to reach your target audience or convert website
              visitors into customers? We help businesses bridge the gap with
              effective digital solutions. From crafting user-friendly websites
              and data-driven mobile apps to implementing targeted marketing
              strategies, we empower you to achieve your goals and drive
              sustainable growth.
            </p>

            <Image
              src="/static/images/pics/Software-code-esting-amico.svg"
              height={300}
              width={400}
              alt={"Client contact image"}
            />
            <p className="text-gray-100 mb-4">
              Your success is our priority. Our team of passionate experts
              collaborates closely with you to understand your unique business
              goals and challenges. We leverage our expertise to deliver
              high-quality solutions that not only meet but exceed your
              expectations.
            </p>

            {/* Add more descriptive text as needed */}
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 p-8">
            <ClientContactForm />
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
