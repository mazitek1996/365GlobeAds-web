"use client";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"], weight: ["300", "700"] });

export function AboutTracingBeam() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(inter.className, "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Empower Your Business with 365GlobeAds",
    description: (
      <>
        <p>
          Welcome to 365GlobeAds, where innovation meets digital excellence.
          We're dedicated to empowering businesses like yours to thrive in
          today's dynamic digital landscape. Our passion for creativity and
          our commitment to delivering outstanding results set us apart as a
          leading digital marketing agency.
        </p>
        <br />
        <h2 className="text-green-500 font-bold py-2">
          Our Mission: Accelerating Your Growth
        </h2>
        <p>
          At 365GlobeAds, our mission is to accelerate your business growth
          through innovative digital marketing solutions. We leverage the
          latest tools and techniques to drive engagement, boost conversions,
          and maximize your ROI.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 py-4">
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/static/images/icons/seo.png"
              alt="SEO Icon"
              className="mx-auto mb-2 h-12 w-12"
            />
            <h3 className="text-xl font-bold text-green-500 mb-1">
              SEO Strategies
            </h3>
            <p className="text-sm">
              Improve your online visibility and attract more organic traffic
              with our customized SEO strategies.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/static/images/icons/pay-per-click.png"
              alt="PPC Icon"
              className="mx-auto mb-2 h-12 w-12"
            />
            <h3 className="text-xl font-bold text-green-500 mb-1">PPC Campaigns</h3>
            <p className="text-sm">
              Drive targeted traffic to your website and generate leads with
              our result-driven PPC campaigns.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <img
              src="/static/images/icons/digital-campaign.png"
              alt="Social Media Icon"
              className="mx-auto mb-2 h-12 w-12"
            />
            <h3 className="text-xl font-bold text-green-500 mb-1">
              Social Media Marketing
            </h3>
            <p className="text-sm">
              Build brand awareness, engage your audience, and drive
              conversions with our strategic social media marketing services.
            </p>
          </div>
        </div>
      </>
    ),
    badge: "Who We Are",
    image: "/static/images/pics/2150208256.jpg", // Consider using a hero image
  },
  {
    title: "Our Collaborative Approach to Digital Success",
    description: (
      <>
        <p>
          At 365GlobeAds, we believe in the power of collaboration. We work
          closely with our clients to understand their unique goals and
          challenges, allowing us to tailor our strategies to their specific
          needs. Our collaborative approach ensures that we deliver
          personalized solutions that drive tangible results.
        </p>
        <h2 className="text-green-500 font-bold py-4">
          Why Choose 365GlobeAds?
        </h2>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <span className="text-green-500 font-bold">Expertise:</span> With
            years of experience and a team of skilled professionals, we have
            the expertise to deliver top-notch digital marketing solutions.
          </li>
          <li>
            <span className="text-green-500 font-bold">Innovation:</span> We
            stay ahead of the curve by embracing innovative strategies and
            technologies to ensure our clients stay ahead of their competitors.
          </li>
          <li>
            <span className="text-green-500 font-bold">Results:</span> Our
            primary focus is on delivering measurable results that drive
            business growth and success for our clients.
          </li>
        </ul>
      </>
    ),
    badge: "Our Approach",
    image: "/static/images/pics/jason-goodman-vbxyFxlgpjM-unsplash.jpg",
  },
  {
    title: "Ready to Elevate Your Digital Presence?",
    description: (
      <>
        <p>
          Your journey to digital success starts here. At 365GlobeAds, we're
          committed to helping you elevate your digital presence and achieve
          your business goals. Whether you're looking to increase brand
          awareness, generate leads, or drive sales, we have the expertise and
          resources to make it happen.
        </p>

        <div className="py-5">
          <Link href="/contact">
            <p className="text-blue-500">Get Started Today</p>
          </Link>
        </div>
      </>
    ),
    badge: "Your Digital Future Starts Now",
    image: "/static/images/pics/2149629602.jpg",
  },
];
