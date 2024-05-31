"use client";
import React, { useRef, useEffect } from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/lib/utils";
import Layout from "../components/layout/Layout";
import CareerContactForm from "./contactForm";
import FAQsSection from "../components/index/home/FAQs/faq_section";
import TestimonialSection from "../components/index/home/testimonies/TestimonialsSection";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JobApplicationContact() {

    // Set browser tab title
    useEffect(() => {
      document.title = "Nivarix: Career";
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
            Join the Nivarix Team
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
            Build a rewarding career with us. Be part of a collaborative team that's changing the industry.

            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row container lg:px-0">
          {/* Left Side: Description of Job Opportunities */}
          <div className="md:w-1/2 py-8">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Discover Your Next Career Move: Unleash Your Potential at Nivarix
            </h2>
            <Image
              src="/static/images/pics/Job-offers-bro.svg"
              height={400}
              width={500}
              alt="Job Opportunities Image"
            />
            <p className="text-gray-100 mb-4">
            Are you a passionate and talented individual looking to make a real
    difference?  Join our dynamic team at Nivarix, where innovation and
    creativity are not just encouraged, but actively fostered. We offer
    exciting opportunities for you to grow and develop your skills while
    making a meaningful impact on the world around you.
            </p>
            <p className="text-gray-100 mb-4">
    At Nivarix, you'll be surrounded by a collaborative environment
    dedicated to achieving excellence.  We believe in the power of
    diversity and inclusion, and we foster a culture where everyone
    feels valued and empowered to contribute their unique talents. 
    Whether you're a seasoned professional or just starting your career,
    we offer the support and resources you need to grow and thrive. 
    Take the first step towards an enriching career journey with us today!
  </p>
            {/* Add more descriptive text as needed */}
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 p-8">
            <CareerContactForm />
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
