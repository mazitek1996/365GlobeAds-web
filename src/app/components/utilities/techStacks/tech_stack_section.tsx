"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Frontend"); // Default tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Data for tech stacks in each category
  const techStacksData: {
    [key: string]: {
      name: string;
      logo: string;
      url: string;
      description?: string;
    }[];
  } = {
    Frontend: [
      {
        name: "React",
        logo: "/static/images/icons/reactjs.svg",
        url: "https://reactjs.org/",
      },
      {
        name: "Angular",
        logo: "/static/images/icons/angular.svg",
        url: "https://angular.io/",
      },
      {
        name: "Vue.js",
        logo: "/static/images/icons/vuejs.svg",
        url: "https://vuejs.org/",
      },
      {
        name: "Next.js",
        logo: "/static/images/icons/nextjs.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "Svelte",
        logo: "/static/images/icons/svelte.svg",
        url: "https://svelte.dev/",
      },
      {
        name: "Ember.js",
        logo: "/static/images/icons/ember.svg",
        url: "https://emberjs.com/",
      },
      {
        name: "Backbone.js",
        logo: "/static/images/icons/backbonejs.svg",
        url: "https://backbonejs.org/",
      },
      {
        name: "Meteor",
        logo: "/static/images/icons/meteor.svg",
        url: "https://www.meteor.com/",
      },
    ],

    "UX/UI": [
      {
        name: "Figma",
        logo: "/static/images/icons/figma.svg",
        url: "https://www.figma.com/",
      },
      {
        name: "Sketch",
        logo: "/static/images/icons/sketch.svg",
        url: "https://www.sketch.com/",
      },
      {
        name: "Adobe XD",
        logo: "/static/images/icons/xd.svg",
        url: "https://www.adobe.com/products/xd.html",
      },
      {
        name: "InVision",
        logo: "/static/images/icons/invision.svg",
        url: "https://www.invisionapp.com/",
      },
      {
        name: "Proto.io",
        logo: "/static/images/icons/protoio.svg",
        url: "https://proto.io/",
      },
      // { name: 'Axure RP', logo: '/static/images/icons/axure.svg', url: 'https://www.axure.com/' },
    ],

    Mobile: [
      {
        name: "React Native",
        logo: "/static/images/icons/reactjs.svg",
        url: "https://reactnative.dev/",
      },
      {
        name: "Flutter",
        logo: "/static/images/icons/flutter.svg",
        url: "https://flutter.dev/",
      },
      {
        name: "Swift",
        logo: "/static/images/icons/swift.svg",
        url: "https://developer.apple.com/swift/",
      },
      {
        name: "Xamarin",
        logo: "/static/images/icons/xamarin.svg",
        url: "https://dotnet.microsoft.com/apps/xamarin",
      },
      // { name: 'Ionic', logo: '/static/images/icons/ionic.svg', url: 'https://ionicframework.com/' },
      {
        name: "PhoneGap",
        logo: "/static/images/icons/phonegap.svg",
        url: "https://phonegap.com/",
      },
    ],

    Backend: [
      {
        name: "Node.js",
        logo: "/static/images/icons/nodejs.svg",
        url: "https://nodejs.org/",
      },
      {
        name: "Express",
        logo: "/static/images/icons/express.svg",
        url: "https://expressjs.com/",
      },
      {
        name: "Django",
        logo: "/static/images/icons/django.svg",
        url: "https://www.djangoproject.com/",
      },
      {
        name: "Ruby on Rails",
        logo: "/static/images/icons/rubyonrails.svg",
        url: "https://rubyonrails.org/",
      },
      {
        name: "Spring Boot",
        logo: "/static/images/icons/spring-boot.svg",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "ASP.NET Core",
        logo: "/static/images/icons/aspnetcore.svg",
        url: "https://dotnet.microsoft.com/apps/aspnet",
      },
    ],

    Database: [
      {
        name: "MongoDB",
        logo: "/static/images/icons/mongodb.svg",
        url: "https://www.mongodb.com/",
      },
      {
        name: "MySQL",
        logo: "/static/images/icons/mysql.svg",
        url: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        logo: "/static/images/icons/postgresql.svg",
        url: "https://www.postgresql.org/",
      },
      {
        name: "SQLite",
        logo: "/static/images/icons/sqlite.svg",
        url: "https://www.sqlite.org/",
      },
      {
        name: "Microsoft SQL Server",
        logo: "/static/images/icons/mssql.svg",
        url: "https://www.microsoft.com/en-us/sql-server",
      },
      {
        name: "Oracle Database",
        logo: "/static/images/icons/oracle.svg",
        url: "https://www.oracle.com/database/",
      },
    ],

    Cloud: [
      {
        name: "AWS",
        logo: "/static/images/icons/aws.svg",
        url: "https://aws.amazon.com/",
      },
      {
        name: "Azure",
        logo: "/static/images/icons/azure.svg",
        url: "https://azure.microsoft.com/",
      },
      {
        name: "Google Cloud",
        logo: "/static/images/icons/google-cloud.svg",
        url: "https://cloud.google.com/",
      },
      {
        name: "IBM Cloud",
        logo: "/static/images/icons/ibm-cloud.svg",
        url: "https://www.ibm.com/cloud",
      },
      {
        name: "Oracle Cloud",
        logo: "/static/images/icons/oracle.svg",
        url: "https://www.oracle.com/cloud/",
      },
      {
        name: "Alibaba Cloud",
        logo: "/static/images/icons/alibaba-cloud.svg",
        url: "https://www.alibabacloud.com/",
      },
    ],

    DevOps: [
      {
        name: "Docker",
        logo: "/static/images/icons/docker.svg",
        url: "https://www.docker.com/",
      },
      {
        name: "Kubernetes",
        logo: "/static/images/icons/kubernetes.svg",
        url: "https://kubernetes.io/",
      },
      {
        name: "Jenkins",
        logo: "/static/images/icons/jenkins.svg",
        url: "https://www.jenkins.io/",
      },
      {
        name: "GitLab CI/CD",
        logo: "/static/images/icons/gitlab.svg",
        url: "https://about.gitlab.com/stages-devops-lifecycle/cicd/",
      },
      {
        name: "GitHub Actions",
        logo: "/static/images/icons/github-actions.svg",
        url: "https://github.com/features/actions",
      },
      {
        name: "CircleCI",
        logo: "/static/images/icons/circleci.svg",
        url: "https://circleci.com/",
      },
    ],
    "Trending Technologies": [
      {
        name: "Blockchain",
        logo: "/static/images/icons/blockchain.svg",
        url: "https://www.investopedia.com/terms/b/blockchain.asp",
      },
      {
        name: "Machine Learning",
        logo: "/static/images/icons/machine-learning.svg",
        url: "https://www.ibm.com/cloud/learn/machine-learning",
      },
      {
        name: "AR/VR",
        logo: "/static/images/icons/ar-vr.svg",
        url: "https://www.wired.com/story/augmented-reality-glasses-future/",
      },
      {
        name: "Edge Computing",
        logo: "/static/images/icons/edge-computing.svg",
        url: "https://www.ibm.com/cloud/learn/edge-computing",
      },
      {
        name: "Quantum Computing",
        logo: "/static/images/icons/quantum-computing.svg",
        url: "https://www.ibm.com/quantum-computing/",
      },
      {
        name: "Internet of Things (IoT)",
        logo: "/static/images/icons/iot.svg",
        url: "https://www.ibm.com/internet-of-things",
      },
    ],
    "Digital Marketing & SEO": [
      {
        name: "Google Analytics",
        logo: "/static/images/icons/google-analytics.svg",
        url: "https://analytics.google.com/",
      },
      {
        name: "Google Ads",
        logo: "/static/images/icons/google-ads.svg",
        url: "https://ads.google.com/",
      },
      {
        name: "Google My Business",
        logo: "/static/images/icons/google-my-business.svg",
        url: "https://www.google.com/business/",
      },

      {
        name: "Facebook Ads",
        logo: "/static/images/icons/facebook-ads.svg",
        url: "https://www.facebook.com/business/ads",
      },
      {
        name: "SEO Tools",
        logo: "/static/images/icons/seo-tools.svg",
        url: "https://moz.com/",
        description: "e.g., Moz, SEMrush, Ahrefs",
      },
      {
        name: "Email Marketing",
        logo: "/static/images/icons/email-marketing.svg",
        url: "https://mailchimp.com/",
      },
      {
        name: "Content Marketing",
        logo: "/static/images/icons/content-marketing.svg",
        url: "https://contentmarketinginstitute.com/",
      },
    ],
  };

  return (
    <div className="bg-gray-200 ">
      <div className="container lg:px-0">
        <div className="tech-stacks-container py-20">
          <h2 className="text-2xl font-bold mb-4 text-gray-600">
            Our Tech Stacks
          </h2>
          {/* Display categories as badges */}
          <div className="flex flex-wrap justify-center mb-8">
            {Object.keys(techStacksData).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none ${
                  activeTab === category
                    ? "bg-blue-500 text-white"
                    : "bg-emerald-600 border-emerald-500/20  text-gray-700"
                } mr-2 mb-2`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Display tech stacks as cards */}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {techStacksData[activeTab].map((techStack) => (
                <div
                  key={techStack.name}
                  className=" backdrop-blur bg-emerald-600 border-emerald-500/20 p-4 rounded-lg shadow-md flex flex-col items-center mb-4"
                >
                  <img
                    src={techStack.logo}
                    alt={techStack.name}
                    className="h-12 w-12 mb-2"
                  />
                  <a
                    href={techStack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold"
                  >
                    {techStack.name}
                  </a>
                  {techStack.description && (
                    <p className="text-sm mt-2">{techStack.description}</p>
                  )}
                  <a
                    href={techStack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm flex items-center text-gray-100 hover:text-blue-700"
                  >
                    Learn More
                    <FaArrowRight className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
