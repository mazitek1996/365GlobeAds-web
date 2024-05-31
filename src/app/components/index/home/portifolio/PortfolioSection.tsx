


// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { MacbookScrollPortifolio } from "./macbook_scroll";
// import { ParallaxScrollDemo } from "./parallex_scroll";


// export function PortfolioSection() {
  

//   return (
//    <section className=" py-12">


// <div className="container mx-auto">
     
      
// <div>



//         <MacbookScrollPortifolio/>
//         <p className="text-lg text-gray-700 text-center mb-8">
//           Take a look at some of the projects and products we've worked on. Each project showcases our commitment to quality and innovation.
//         </p>
// </div>

// <ParallaxScrollDemo/>
//     </div>
//    </section>
//   );
// }




"use client";
import React from "react";
import Image from "next/image";
import { MacbookScrollPortifolio } from "./macbook_scroll";
import { ParallaxScrollDemo } from "./parallex_scroll";

export function PortfolioSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div>
          <MacbookScrollPortifolio />
          {/* <p className="text-lg text-gray-700 text-center mb-8">
            Take a look at some of the projects and products w have worked on. Each project showcases our commitment to quality and innovation.
          </p> */}
        </div>
        {/* <ParallaxScrollDemo /> */}
      </div>
    </section>
  );
}
