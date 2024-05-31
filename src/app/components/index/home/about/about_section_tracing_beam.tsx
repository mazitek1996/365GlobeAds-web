"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"], weight: ["300", "700"] });

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 lg:px-0">
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
    title: "Inception",
    description: (
      <>
        <h2>
          From Humble Beginnings to Marketing Powerhouse: The 365GlobeAds Story
        </h2>
        <p>
          In the heart of the digital marketing world lies 365GlobeAds, a
          trailblazing company on a mission to revolutionize the industry and
          empower businesses globally. From humble beginnings to becoming a
          powerhouse in digital marketing, 365GlobeAds has stayed true to its
          core values. Driven by excellence and a passion for creativity,
          365GlobeAds champions social responsibility, using digital marketing
          to create a positive impact across the globe.
        </p>
        <p>
          365GlobeAds was born out of a collective vision shared by a group of
          passionate individuals driven by a common purpose: to harness the
          power of digital marketing for positive change. It all began in a
          small office, where a team of marketing enthusiasts banded together
          with a shared dream of building something meaningful and impactful.
        </p>
        <p>
          As 365GlobeAds grew, so too did its ambitions. What started as a
          modest startup soon evolved into a dynamic and forward-thinking
          marketing company with a global footprint. The key to 365GlobeAds's
          success lay in its ability to adapt and innovate in an ever-changing
          landscape.
        </p>
      </>
    ),
    badge:
      "365GlobeAds: Empowering Businesses through Digital Marketing Innovation",
    image:
    "/static/images/pics/2150063172.jpg",
  },
  {
    title: "Transformation",
    description: (
      <>
        <p>
          Today, 365GlobeAds stands as a testament to the power of innovation
          coupled with a clear purpose. 365GlobeAds has become a beacon of hope,
          opportunity, and innovation for businesses across the globe. We've
          empowered countless individuals and businesses to build their dreams
          through our groundbreaking solutions.
        </p>
        <p>
          365GlobeAds's impact extends far beyond digital marketing. Our
          innovative products and services have transformed industries,
          empowered entrepreneurs, and unlocked new avenues for growth and
          prosperity. Whether it's developing cutting-edge marketing strategies
          or spearheading initiatives to bridge the digital divide, 365GlobeAds
          remains dedicated to driving positive change and making a lasting
          impact on a global scale.
        </p>
      </>
    ),
    badge: "The Future",
    image:
    "/static/images/pics/with-applications.jpg",
  },
  {
    title: "Shaping the Future: 365GlobeAds, a Legacy in the Making",
    description: (
      <>
        <p>
          As 365GlobeAds sets its sights on the future, the company's vision
          remains as bold and ambitious as ever. Fueled by a relentless pursuit
          of innovation and a deep commitment to positive change, 365GlobeAds is
          poised to not only shape the digital marketing landscape but also
          inspire generations to come. With plans to expand its reach and deepen
          its impact, 365GlobeAds is on a mission to unlock the full potential
          of businesses worldwide and propel them towards a brighter, more
          technologically advanced future.
        </p>
        <p>
          365GlobeAds is at the forefront of the digital revolution, pioneering
          cutting-edge solutions that span the spectrum from Artificial
          Intelligence to transformative marketing technologies. These
          advancements are not just technological feats; they are catalysts for
          progress and prosperity globally. Whether it's empowering businesses
          through innovative marketing or fostering a culture of digital
          inclusion, 365GlobeAds remains dedicated to driving positive change
          with a lasting impact.
        </p>
        <p>
          But 365GlobeAds isn't just building a company – it's building a
          legacy. With an unwavering commitment to excellence, a passion for
          pushing boundaries, and a deep sense of social responsibility,
          365GlobeAds aspires to leave a lasting mark on the world. It's a
          legacy that extends far beyond marketing services – it's about
          empowering businesses, fostering innovation, and shaping a future
          where global businesses thrive on the digital stage.
        </p>
        <p>
          **Are you ready to be a part of shaping the digital future?** Join
          365GlobeAds in its mission to drive innovation and unlock
          possibilities. Explore our careers page or contact us today to learn
          more about how we can help your business thrive in the digital age.
        </p>
        <br />
        <a
          href="/job-applications"
          className="text-blue-500 hover:underline mr-4"
        >
          Explore Careers
        </a>
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact Us
        </a>
      </>
    ),
    badge: "A Legacy of Innovation for the Digital Future",
    image:
    "/static/images/pics/2150040212.jpg",
  },
];
