import React from "react";
import { StickyScrollRevealDemo } from "./scrol_bar_reveal";
import { BentoGridThirdDemo } from "./about_section_grid";
import { TracingBeamDemo } from "./about_section_tracing_beam";
import PartnerLogos from "@/app/components/utilities/PartnerLogos";

export default function AboutSection() {
  function ValueCard({ title, description, imageUrl }) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur sm:max-w-sm border bg-emerald-600/20 border-emerald-500/20" />
        <div className="relative bg-transparent p-6">
          <h4 className="text-xl font-semibold text-gray-300 mb-2">{title}</h4>
          <p className="text-sm text-gray-100">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="about-section container lg:px-0">
      <div className="about-content text-center py-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          From Vision to Reality: Your Trusted Partner for Innovative Marketing Solutions
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          365GlobeAds is your go-to partner for transforming ideas into impactful marketing campaigns. We empower businesses, institutions, and individuals by leveraging the latest in digital marketing technology.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Our dedicated team crafts exceptional marketing strategies, websites, and custom solutions. We tailor each project to meet your specific needs, ensuring top-notch results that exceed expectations.
        </p>
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Unwavering Principles: What Drives Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-emerald-500/20">
          <ValueCard
            title="Innovation at Heart"
            description="We continuously explore cutting-edge technologies to deliver innovative marketing solutions."
          />
          <ValueCard
            title="Uncompromising Quality"
            description="We prioritize excellence and reliability in every aspect of our work, from concept to completion."
          />
          <ValueCard
            title="Collaboration is Key"
            description="We believe in working closely with our clients, fostering a collaborative environment for mutual success."
          />
          <ValueCard
            title="Integrity Matters"
            description="We uphold the highest ethical standards, ensuring honesty and integrity in all our endeavors."
          />
        </div>
      </div>

      {/* <section>
        <BentoGridThirdDemo />
      </section> */}

      <section className="mb-4">
        <TracingBeamDemo />
      </section>

      <section className="py-10">
        <PartnerLogos />
      </section>
    </section>
  );
}
