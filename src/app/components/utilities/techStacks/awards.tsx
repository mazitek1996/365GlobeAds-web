
"use client";

import React from "react";
import Image from "next/image";

export default function Awards() {
  const images = [
    "/static/images/awards/clutch1.webp",
    "/static/images/awards/clutch2.webp",
    "/static/images/awards/clutch3.webp",
    "/static/images/awards/award4.webp",
    "/static/images/awards/award5.webp",
    "/static/images/awards/award6.webp",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-indigo-500 mb-8">
        Award-Winning Digital Marketing Agency of 2024
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={src}
              alt={`Award ${index + 1}`}
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
