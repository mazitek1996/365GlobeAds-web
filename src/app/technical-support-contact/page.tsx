"use client";

import React, { useRef, useEffect } from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/lib/utils";
import Layout from "../components/layout/Layout";
import TechnicalContactForm from "./ContactForm";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TechnicalSupportContact() {


  // Set browser tab title
  useEffect(() => {
    document.title = "365GlobeAds: Technical Support";
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
            Resolve Your Technical Issues - Get 365GlobeAds Support Now
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
            Our technical experts are here to help you overcome any technical challenges quickly and efficiently.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row container lg:px-0">
  {/* Left Side: Description of Services */}
  <div className="md:w-1/2 py-8">
    <h2 className="text-2xl font-bold text-gray-200 mb-4">
      How We Can Help You Overcome Technical Challenges
    </h2>
    <Image
      src="/static/images/pics/Customer-relationship-management-bro.svg"
      height={400}
      width={500}
      alt="Technical support team assisting a customer"
    />
    <p className="text-gray-100 py-4">
      Our dedicated technical support team is here to provide you with prompt and effective assistance for a wide range of issues. Whether you encounter software bugs, need help navigating our products, or have questions about specific features, we're here to guide you through and ensure a smooth resolution.
    </p>

    <h3 className="text-xl font-bold text-gray-200 mb-2">Here are some specific areas where we can help:</h3>

    <ul className="list-disc pl-4 text-gray-100">
      <li>Troubleshooting software installation and configuration issues.</li>
      <li>Providing guidance on product usage and best practices.</li>
      <li>Answering your questions about our services and functionalities.</li>
      <li>Helping you resolve errors and unexpected behavior.</li>
      <li>Offering technical assistance for integrating our products with your existing systems.</li>
    </ul>

    <p className="text-gray-100 mb-4">
      We understand that technical challenges can disrupt your workflow. Our team is committed to delivering exceptional customer service and ensuring your experience is seamless. Don't hesitate to reach out for prompt and reliable technical support tailored to your specific needs.
    </p>
  </div>

  {/* Right Side: Contact Form */}
  <div className="md:w-1/2 p-8">
    <TechnicalContactForm />
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

