
import React from "react";
import { Meteors } from "@/app/components/ui/meteors";
import Link from "next/link"; // Import Link from Next.js

interface ContactCardProps {
  title: string;
  description: string;
  linkTo: string; // Add a prop for the link destination
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  linkTo,
}) => {
  return (
    <div className="w-full relative max-w-xs">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 p-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h2 className="font-bold text-xl text-white mb-4">{title}</h2>

        <p className="font-normal text-base text-slate-500 mb-4">
          {description}
        </p>

        <Link href={linkTo}>
          {" "}
          {/* Link to the specified destination */}
          {/* <a className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            Explore
          </a> */}
          <button className="px-6 py-1  backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Explore</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </Link>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

export default ContactCard;
