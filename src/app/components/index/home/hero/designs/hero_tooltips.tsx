"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
const stacks = [
  {
    id: 1,
    name: "HubSpot",
    designation: "Inbound Marketing and Sales Software",
    image: "/static/images/icons/HubSpot-Logo.wine.svg",
  },
  {
    id: 2,
    name: "Canva",
    designation: "Graphic Design Tool",
    image: "/static/images/icons/canva.svg",
  },
  {
    id: 3,
    name: "Google Ads",
    designation: "Online Advertising Platform",
    image: "/static/images/icons/google-ads.svg",
  },
  {
    id: 4,
    name: "MailChimp",
    designation: "Email Marketing Platform",
    image: "/static/images/icons/email-marketing.svg",
  },
  {
    id: 5,
    name: "Google Analytics",
    designation: "Web Analytics Service",
    image: "/static/images/icons/google-analytics.svg",
  },
  {
    id: 6,
    name: "Google My Business",
    designation: "Business Listing Management",
    image: "/static/images/icons/google-my-business.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-5 w-full">
      <AnimatedTooltip items={stacks} />
    </div>
  );
}
