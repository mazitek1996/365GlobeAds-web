"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title:
      "From Vision to Value: Unleash Your Business Potential with 365GlobeAds",
    description:
      "Unlock growth through targeted digital marketing strategies. At 365GlobeAds, we believe innovation thrives through collaboration. Our team of experts works closely with you to understand your unique business challenges and goals. We then leverage our expertise to craft custom solutions (SEO, social media campaigns, content marketing, etc.) that drive measurable results and propel your business forward.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/static/images/pics/krakenimages-376KN_ISplE-unsplash.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Marketing Strategy"
        />
      </div>
    ),
  },
  {
    title: "Boost Engagement & Reach",
    description:
      "Effortless real-time engagement: Our platform empowers you to connect seamlessly with your audience, clients, and stakeholders – anytime, anywhere. Share content, interact in real-time, and streamline your marketing efforts for increased efficiency.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/static/images/pics/2150208245.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Real-Time Engagement"
        />
      </div>
    ),
    subContent: [
      {
        title: "Data-Driven Campaigns",
        description:
          "Eliminate guesswork with our platform. Ensure your campaigns are always optimized with real-time data. Experience immediate insights and maintain alignment with your marketing goals effortlessly. Focus on creating impactful content, not data management.",
      },
    ],
  },
  {
    title: "Stay Ahead of the Curve with Continuous Innovation",
    description:
      "Future-Proof Solutions Built on Cutting-Edge Tech: Our team is passionate about innovation. We constantly explore and integrate the latest technologies and trends into our marketing solutions. Partner with 365GlobeAds to transform your ideas into reality and gain a competitive edge.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/static/images/pics/7378449_32006.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Continuous Innovation"
        />
      </div>
    ),
  },
];

export function ServiceStickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
