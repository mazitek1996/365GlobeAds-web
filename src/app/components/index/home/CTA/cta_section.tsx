"use client";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import Image from "next/image";
import { Meteors } from "@/app/components/ui/meteors";
import { Button } from "@/app/components/ui/moving-border";
import Link from "next/link";

export default function CTAsSection() {
  return (
    <section className="flex flex-col items-center justify-center h-70vh bg-gray-200">
      <div className="container py-20 lg:px-0">
        <div className="container py-8 lg:py-20">
          <div className="w-full flex flex-col lg:flex-row lg:items-center">
            <div className="text-center lg:text-left lg:flex-1 mb-6 lg:mb-0">
              <h2 className="text-3xl text-gray-700 font-bold mb-4">
                Get Started Today
              </h2>
              <p className="mb-8 text-gray-500">
                Ready to elevate your digital presence? Contact us to enhance
                your marketing strategy, develop your website, or design your
                mobile app!
              </p>
            </div>
            <div className="bg-transparent border border-gray-400 card rounded-lg shadow-lg p-8 lg:w-400 flex justify-center lg:justify-end">
              <div className="flex justify-center lg:justify-end items-center">
                <Image
                  src="https://cdn.ssltrust.com.au/assets/images/sectigo-seal-large@2x.png"
                  alt="Sectigo Seal"
                  width={100}
                  height={50}
                  className="mr-4"
                />
                <div className="h-8 w-0.5 bg-gray-800 mx-4 hidden lg:block"></div>{" "}
                {/* Vertical Separator */}
                <Image
                  src="/static/images/icons/google.svg"
                  alt="Google Logo"
                  width={100}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 card rounded-xl shadow-lg p-8 lg:w-full flex flex-col lg:flex-row mt-4 py-12 lg:py-20 px-6 lg:px-20 relative">
          <div className="flex-1 lg:py-10">
            <h3 className="text-xl font-bold mb-4 text-white">
              Let&apos;s Build Together
            </h3>
            <p className="mb-6 text-white lg:mb-0">
              Our team is ready to help you turn your vision into reality.
              Whether it&apos;s a digital marketing campaign, a new website, or
              a custom mobile app, we&apos;ve got you covered.
            </p>

            <div className="flex justify-center lg:justify-start lg:mt-10">
              <Link href="/contact">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-end lg:ml-20 lg:ml-0">
            <div className="relative hidden lg:block">
              <Image
                src="/static/images/pics/social-media-marketing-concept-marketing-with-applications.png"
                alt="Illustration"
                width={400}
                height={300}
              />
            </div>
          </div>
          <Meteors number={20} className="hidden lg:block absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
