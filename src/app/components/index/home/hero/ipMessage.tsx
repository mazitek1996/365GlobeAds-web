


"use client";
import React, { useEffect, useState } from "react";
import { getLocation } from "@/app/components/getLocation";

export default function ipMessage() {

  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocation();
      if (location && location.city) {
        setCity(location.city);
      }
    };

    fetchLocation();
  }, []);


  return (
    <div>{city && (
      <div >
        <h3 className="lg:relative -top-[6rem] text-base md:text-lg text-gray-400 mt-4 mb-[3rem]">
         We at 365GlobeAds is determined to make your business more successful in <span className="text-indigo-400">{city}</span>.Our team of expert marketers and creative designers are dedicated
to delivering exceptional digital marketing services that elevate
your brand and drive success. We don't just offer services, we
create strategies that transform your business.
        </h3>
      </div>
    )}</div>
  )
}
