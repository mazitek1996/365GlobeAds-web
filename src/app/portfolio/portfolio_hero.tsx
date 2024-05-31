

"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/app/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
  <p className="font-bold text-4xl text-white">Web Development</p>
  <p className="font-normal text-base text-white"></p>
  <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Elevate your online presence with our expert web development services. We specialize in crafting dynamic and user-friendly websites that captivate audiences and drive business growth.
  </p>
</div>

  );
};

const SkeletonTwo = () => {
  return (
    <div>
    <p className="font-bold text-4xl text-white">App Development</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Reach new heights with our innovative app development solutions. We specialize in crafting mobile applications that offer seamless user experiences and bring your ideas to life. Experience the sky-high potential of your app vision with our expert development team.
    </p>
  </div>
  
  );
};
const SkeletonThree = () => {
  return (
    <div>
    <p className="font-bold text-4xl text-white">Custom Software Development</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Embrace the lush possibilities of custom software development with us. Just like a house surrounded by greenery and nature's beauty, our tailored solutions provide the perfect environment for your business to thrive. Relax knowing that your software needs are in expert hands.
    </p>
  </div>
  
  );
};
const SkeletonFour = () => {
  return (
    <div>
  <p className="font-bold text-4xl text-white">AI and ML Integration & Development</p>
  <p className="font-normal text-base text-white"></p>
  <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Just as rivers flow peacefully, our AI and ML integration and development services bring tranquility to your business operations. Like a house by the river, our solutions offer peace of mind, allowing you to relax, unwind, and enjoy the benefits of advanced technology driving your success.
  </p>
</div>

  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
    "/static/images/pics/php-programming-html-coding-cyberspace-concept_53876-124097.avif",
  
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "/static/images/pics/isometric-ui-ux-background_23-2149047260.jpg",
  
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/static/images/pics/side-shot-code-editor-using-react-js_181624-61842.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
    "/static/images/pics/ai-technology-microchip-background-digital-transformation-concept_53876-124669.avif",
    },
];


