// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const FAQsCTA = () => {
//   return (
//     <div className="py-10">
//       <div className="flex items-center justify-between h-screen-30vh px-4 py-5 container bg-gray-700 rounded-md">
//         {/* Image */}
//         <div className="w-16 h-16 overflow-hidden rounded-full">
//           <Image
//             src="/static/images/pics/profile-image.avif"
//             alt="FAQ Icon"
//             width={64}
//             height={64}
//             className="object-cover"
//           />
//         </div>
//         {/* Content */}
//         <div className="flex flex-col flex-grow justify-center ml-4">
//           {/* Heading */}
//           <h2 className="text-xl font-semibold mb-2 text-center">
//             Do you still have a question?
//           </h2>
//           {/* Subheading */}
//           <p className="text-gray-100 text-center mb-4">
//             Can't find the question and answers you're looking for?{" "}
//             <span className="text-green-400">Talk to our experts</span>.
//           </p>
//         </div>
//         {/* Link to Contact Page */}
//         <Link href="/contact">
//           <div className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
//             Get in touch
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FAQsCTA;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FAQsCTA = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center px-4 py-5 bg-gray-700 rounded-md md:flex-row md:items-center md:justify-between container">
        {/* Image */}
        <div className="w-16 h-16 mb-4 md:mb-0 md:mr-4 overflow-hidden rounded-full">
          <Image
            src="/static/images/pics/profile-image.avif"
            alt="FAQ Icon"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h2 className="text-xl font-semibold mb-2">
            Do you still have a question?
          </h2>
          {/* Subheading */}
          <p className="text-gray-100 mb-4">
            Can't find the question and answers you're looking for?{" "}
            <span className="text-green-400">Talk to our experts</span>.
          </p>
        </div>
        {/* Link to Contact Page */}
        <Link href="/contact">
          <div className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
            Get in touch
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FAQsCTA;
