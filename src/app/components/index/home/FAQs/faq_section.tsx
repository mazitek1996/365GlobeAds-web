"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi"; // Import icons from react-icons library
import Link from "next/link";

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track active accordion item

  // Data for FAQs
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO, SEM, social media marketing, content creation, email marketing, and analytics to enhance your online presence.",
    },
    {
      question: "How can I contact your support team?",
      answer: (
        <div
          dangerouslySetInnerHTML={{
            __html:
              'Our support team is available via email at <a href="mailto:support@365globeads.com" style="color: teal;">support@365globeads.com</a> or by phone at <span class="clickable" onclick="window.location.href=\'tel:+447479808754\'" style="color: green;">+1 (234) 567-890</span>. Support hours: Monday to Friday, 9:00 AM to 6:00 PM (EST).',
          }}
        />
      ),
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we provide a 30-day refund policy for eligible services. Refer to our refund policy page for detailed information on eligibility and the refund process.",
    },
    {
      question: "Is there a free trial available for your services?",
      answer:
        "Absolutely! We offer a free trial for our premium subscription plans. Sign up on our website to explore the full range of features before committing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Your payment information is securely protected.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project duration varies based on complexity and scope. We work with clients to establish timelines and milestones to ensure timely delivery.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer ongoing support and maintenance to address updates, enhancements, and any issues post-project completion. Our goal is long-term client satisfaction.",
    },
    {
      question: "Can you customize your services to fit my specific needs?",
      answer:
        "Absolutely! We tailor our services to meet your unique goals, preferences, and budget. Our team collaborates closely to ensure all requirements are met.",
    },
    {
      question: "Are your services suitable for small businesses/startups?",
      answer:
        "Yes, we cater to businesses of all sizes, including startups and small enterprises. We offer flexible solutions and pricing to accommodate your budget and growth.",
    },
    {
      question: "How do you ensure the security of my data?",
      answer:
        "We implement industry-standard security measures, protocols, and encryption to protect your data from unauthorized access and breaches, ensuring confidentiality and compliance.",
    },
  ];

  // Function to toggle accordion item
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 lg:mb-0">
          Frequently Asked Questions
        </h2>
        <div className="text-center lg:text-right lg:ml-4 mt-4 lg:mt-0">
          <Link href="/frequent_asked_questions">
            <div className="inline-flex items-center text-gray-300 text-sm bg-emerald-300/10 border-emerald-500/20 border py-1 px-2 rounded-full hover:bg-emerald-400/10 hover:border-emerald-500/20 transition-colors duration-300 ease-in-out">
              <span className="hidden lg:inline">
                Explore more frequently asked questions
              </span>
              <span className="inline lg:hidden">
                Explore more frequently asked questions
              </span>
              <FiArrowRight className="ml-1 transition-transform hover:text-blue-500 hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>

      <div className="container py-3 lg:px-0">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {activeIndex === index && (
                <div className="px-4 py-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
