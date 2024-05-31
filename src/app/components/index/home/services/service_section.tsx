"use client";
import React from "react";
import Image from "next/image";
import { Meteors } from "@/app/components/ui/meteors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServiceSection() {
  const servicesData = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Increase your website's visibility and rank higher on search engine results pages (SERPs) with our comprehensive SEO strategies tailored to your business goals.",
      icon: "/static/images/icons/seo.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage and connect with your audience on various social media platforms to build brand awareness, drive website traffic, and generate leads with our strategic social media marketing campaigns.",
      icon: "/static/images/icons/digital-campaign.png",
    },
    {
      title: "Content Marketing",
      description:
        "Create valuable and relevant content that resonates with your target audience to attract, engage, and retain customers, ultimately driving conversions and increasing brand loyalty.",
      icon: "/static/images/icons/content.png",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Reach your target audience instantly and drive qualified traffic to your website through strategic PPC advertising campaigns on search engines and social media platforms.",
      icon: "/static/images/icons/pay-per-click.png",
    },
    {
      title: "Email Marketing",
      description:
        "Nurture leads, build relationships, and drive conversions through personalized and targeted email marketing campaigns that deliver the right message to the right audience at the right time.",
      icon: "/static/images/icons/email-marketing.png",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Optimize your website and marketing campaigns to maximize conversions by analyzing user behavior, identifying areas for improvement, and implementing data-driven strategies to enhance user experience and drive results.",
      icon: "/static/images/icons/conversion-rate.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="container">
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="max-w-xs relative mb-5">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex justify-between w-full items-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12"
                  height={100}
                  width={100}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white mb-4">
                {service.title}
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4">
                {service.description}
              </p>
              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                Explore
              </button>
              {/* Meaty part - Meteor effect */}
              <Meteors number={30} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
