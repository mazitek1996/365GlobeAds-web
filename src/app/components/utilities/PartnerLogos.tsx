"use client";

import React from "react";
import InfinitePartnerLogos from "@/app/components/ui/InfinitePartnerLogos";

const PartnerLogos = () => {
  // List of partner logos
  const logos: string[] = [
    "/static/images/icons/netlify.svg",

    "/static/images/icons/google.svg",
    "/static/images/icons/nextjs.svg",
    "/static/images/icons/meta.svg",
    "/static/images/icons/chatgpt.svg",
    "/static/images/icons/aws.svg",
    "/static/images/icons/azure.svg",
    "/static/images/icons/email-marketing.svg",
    "/static/images/icons/figma.svg",
    "/static/images/icons/githublogo.svg",
    "/static/images/icons/google-cloud.svg",
    "/static/images/icons/vercel.svg",

    "/static/images/icons/google-my-business.svg",
    "/static/images/icons/nodejs.svg",
    "/static/images/icons/oracle.svg",
    "/static/images/icons/machine-learning.svg",
    "/static/images/icons/google-ads.svg",
    "/static/images/icons/alibaba-cloud.svg",
    "/static/images/icons/google-ads.svg",

    // Add more logo URLs here
  ];

  return <InfinitePartnerLogos logos={logos} />;
};

export default PartnerLogos;
