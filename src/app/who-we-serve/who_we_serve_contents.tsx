


"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

const WhoWeServeContents: React.FC<{
  title: string;
  description: string;
  imagePath: string;
}> = ({ title, description, imagePath }) => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {contentData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-indigo-500/10 border border-indigo-500 backdrop-blur text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="industry thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

const contentData = [
  {
    title: "Retail & E-Commerce",
    description: (
      <>
        <p>
          365GlobeAds empowers retail and e-commerce businesses to excel in the digital marketplace. We partner with retailers, consumer brands, and online marketplaces to create cutting-edge solutions that enhance customer engagement, drive sales, and deliver seamless shopping experiences across all channels.
        </p>
        <h3 className="text-bold text-3xl text-indigo-500 py-2">Hospitality & Travel</h3>
        <p>
          In the fast-paced world of hospitality and travel, 365GlobeAds helps businesses stand out. We collaborate with hotels, travel agencies, and tourism boards to design personalized marketing strategies, captivating campaigns, and interactive digital experiences that attract and retain customers.
        </p>
      </>
    ),
    badge: "Transforming Retail",
    image: "/static/images/pics/ecommerce-who-we-serve.jpg",
  },
  {
    title: "Educational Institutions",
    description: (
      <>
        <p>
          Education is pivotal to societal progress, and 365GlobeAds is committed to revolutionizing the learning experience. We work with schools, universities, and e-learning platforms to develop immersive learning environments, personalized learning platforms, and AI-driven educational tools that empower learners and educators alike.
        </p>
        <h3 className="text-bold text-3xl text-indigo-500 py-2">Nonprofits & NGOs</h3>
        <p>
          365GlobeAds supports nonprofits and NGOs in amplifying their impact. Through targeted digital marketing campaigns, community engagement platforms, and enhanced online presence, we help these organizations connect with their audience, raise awareness, and drive their mission forward.
        </p>
      </>
    ),
    badge: "Empowering Education",
    image: "/static/images/pics/26040.jpg",
  },
  {
    title: "Technology & Startups",
    description: (
      <>
        <p>
          At 365GlobeAds, we embrace the spirit of innovation and collaboration, working with technology companies and startups to push the boundaries of what's possible. From developing scalable SaaS applications to implementing IoT solutions and harnessing the power of big data, we enable our clients to stay ahead of the curve and drive digital transformation.
        </p>
        <h3 className="text-bold text-3xl text-indigo-500 py-2">Media & Entertainment</h3>
        <p>
          In the vibrant world of media and entertainment, 365GlobeAds delivers engaging content and dynamic marketing strategies. We partner with media companies, streaming platforms, and entertainment brands to create captivating campaigns that resonate with audiences and boost engagement.
        </p>
      </>
    ),
    badge: "Driving Innovation",
    image: "/static/images/pics/jason-goodman-vbxyFxlgpjM-unsplash.jpg",
  },
];

export default WhoWeServeContents;
