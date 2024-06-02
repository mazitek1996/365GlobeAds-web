"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "flowbite-react";
import { cn } from "@/app/lib/utils";
import NewsTicker from "../hero/designs/newsticker_bar";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { AnimatedTooltipPreview } from "./designs/hero_tooltips";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/app/components/ui/text-reveal-card";

import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  BiLogoDjango,
  BiLogoGoogle,
  BiLogoMeta,
  BiLogoMicrosoft,
  BiLogoGoogleCloud,
  BiLogoAws,
  BiLogoNetlify,
  BiLogoGithub,
  BiLogoWordpress,
} from "react-icons/bi";
import FloatingChat from "@/app/components/utilities/FloatingChat";
import IpMessage from "./ipMessage";

export function HeroScreen() {
  const texts = [
    "Elevate Your Brand with Global Reach",
    "Innovative Digital Marketing Solutions",
    "SEO, PPC, and Social Media Marketing",
    "Content Creation to Engage Your Audience",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showNextText, setShowNextText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNextText(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowNextText(true);
      }, 500); // Delay before showing next text
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <BackgroundBeams className="z-0 absolute top-0 left-0 w-full h-full" />

      <div className="relative w-full overflow-hidden">
        {/* Container */}
        <div className="container mt-[5rem] lg:px-0 min-h-screen flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Left Section */}
          <div className="md:w-1/2 p-8 px-0 ">
            <h1 className="text-5xl lg:relative -top-[9rem] md:text-6xl font-bold text-white ">
              <span style={{ opacity: showNextText ? 1 : 0 }}>
                {texts[currentTextIndex]}
              </span>
            </h1>
            {/* <p className="lg:relative -top-[6rem] text-base md:text-lg text-gray-400 mt-4 mb-[3rem]">
              Our team of expert marketers and creative designers are dedicated
              to delivering exceptional digital marketing services that elevate
              your brand and drive success. We don't just offer services, we
              create strategies that transform your business.
            </p> */}
            <IpMessage/>
            {/* Buttons */}
            <div className="lg:relative -top-[5rem] flex flex-row space-x-4 mb-[3rem]">
              <Link href="/services">
                <button className="bg-blue-500 text-white px-7 py-3 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                  Learn More
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-slate-500 text-white px-8 py-3 border-emerald-500/20 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                  Get a Free Consultation
                </button>
              </Link>
            </div>
            {/* Logos */}
            <div className="flex flex-row space-x-4 lg:relative -top-[4rem]">
              <BiLogoNetlify size={60} color="white" />
              <BiLogoGithub size={60} color="white" />
              <BiLogoAws size={60} color="white" />
              <div className="hidden md:flex flex-row space-x-4">
                <BiLogoMicrosoft size={60} color="white" />
                <BiLogoGoogleCloud size={60} color="white" />
                <BiLogoWordpress size={60} color="white" />
              </div>
              <BiLogoMeta size={60} color="white" />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 p-8 px-0">
            {/* Display 6 logos */}
            <div className="flex flex-row justify-between ">
              <AnimatedTooltipPreview />
            </div>
            {/* Card */}
            <div className="hidden md:flex items-center mb-8 w-full px-0">
              <TextRevealCard
                text="Unlocking Possibilities"
                revealText="Innovating Solutions"
              >
                <TextRevealCardTitle>
                  Welcome to <span className="text-green-500">365GlobeAds</span>{" "}
                  - Your Partner in Digital Marketing Excellence.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Discover the power of innovative digital marketing strategies.
                  Hover over the card to unveil the hidden potential.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>

            {/* Two Cards */}
            <div className="flex flex-col gap-5 md:flex-row space-y-0 md:space-y-0">
              <div>
                <Card
                  className="backdrop-blur max-w-sm border bg-emerald-600/20 border-emerald-500/20"
                  renderImage={() => (
                    <Image
                      width={500}
                      height={500}
                      src="/static/images/pics/social-media-marketing-concept-.jpg"
                      alt="image 1"
                    />
                  )}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Transforming Digital Marketing for the Future
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Empowering businesses worldwide with cutting-edge digital
                    marketing solutions, driving growth and enhancing brand
                    visibility.
                  </p>
                  <Link href="/who-we-serve">
                    <button className="px-4 py-2 backdrop-blur border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                      <span>Learn More</span>
                      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                  </Link>
                </Card>
              </div>

              <div>
                <Card
                  className="backdrop-blur max-w-sm border bg-emerald-600/20 border-emerald-500/20"
                  renderImage={() => (
                    <Image
                      width={500}
                      height={500}
                      src="/static/images/pics/jason-goodman-vbxyFxlgpjM-unsplash.jpg"
                      alt="image 1"
                    />
                  )}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bring Your Vision to Life with Custom Solutions
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Crafting bespoke marketing strategies to realize your
                    vision, driving impactful and lasting results for your
                    business.
                  </p>
                  <Link href="/contact">
                    <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                      <span>Get Started</span>
                      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                  </Link>
                </Card>
              </div>

              <FloatingChat />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
