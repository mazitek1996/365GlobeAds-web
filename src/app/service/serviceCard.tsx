import React from "react";
import { EvervaultCard, Icon } from "@/app/components/ui/evervault-card";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string; // Add a new prop for the external link
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="  border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] shadow-md ">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={title} />
      <h2 className="dark:text-white text-black mt-4 text-sm font-light ">
        {description}
      </h2>
      {/* <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 bg-green-500">
        Learn more
      
      </a> */}

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-0 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Learn More</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;
