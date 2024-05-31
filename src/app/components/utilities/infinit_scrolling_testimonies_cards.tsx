"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function InfiniteMovingTestimoniesCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The innovative digital marketing strategies provided by 365GlobeAds have significantly increased our online presence. Their expertise is unmatched!",
    name: "Jake Hernandez",
    title: "New York, USA",
  },
  {
    quote:
      "365GlobeAds transformed our digital strategy, leading to a substantial increase in our online engagement and sales. Their team is exceptional!",
    name: "Jenny K",
    title: "Toronto, Canada",
  },
  {
    quote:
      "Thanks to 365GlobeAds, our digital campaigns are now more effective than ever. Their strategic approach and dedication are truly commendable.",
    name: "Ahmed Al Fahim",
    title: "Dubai, UAE",
  },
  {
    quote:
      "Working with 365GlobeAds has been a game-changer for our business. Their digital marketing expertise has driven remarkable results. Highly recommend!",
    name: "Emily Tan",
    title: "Singapore",
  },
  {
    quote:
      "The team at 365GlobeAds exceeded our expectations with their innovative approach and attention to detail. Our brand's online presence has never been better!",
    name: "David Lee",
    title: "San Francisco, USA",
  },
];
