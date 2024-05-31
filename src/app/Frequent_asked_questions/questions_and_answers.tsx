
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Data for FAQs
  const faqs = [
    {
      question: "What services does 365GlobeAds offer?",
      answer:
        "365GlobeAds specializes in comprehensive digital marketing solutions including SEO, social media marketing, content creation, and PPC advertising.",
    },
    {
      question: "How can I contact 365GlobeAds for support?",
      answer: (
        <div
          dangerouslySetInnerHTML={{
            __html:
              'You can reach our support team by filling out the <a href="/contact" style="color: teal;">contact form</a> on our website or by emailing <a href="mailto:support@365GlobeAds.com" style="color: orange;">support@365GlobeAds.com</a>.',
          }}
        />
      ),
    },
    {
      question: "Does 365GlobeAds provide customized marketing strategies?",
      answer:
        "Yes, we offer tailored marketing strategies designed to meet the specific needs and goals of your business.",
    },
    {
      question: "What industries does 365GlobeAds serve?",
      answer:
        "365GlobeAds caters to a wide range of industries including retail, healthcare, finance, education, and more.",
    },
    {
      question: "Can 365GlobeAds help with social media management?",
      answer:
        "Absolutely, we offer comprehensive social media management services to enhance your online presence and engagement.",
    },
    {
      question: "What technologies does 365GlobeAds use?",
      answer:
        "We leverage a variety of tools and platforms, including Google Analytics, SEMrush, Hootsuite, and more, to deliver effective digital marketing solutions.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline for seeing results can vary depending on the strategy and goals. Our team will provide an estimated timeline during the planning phase.",
    },
    {
      question: "Is 365GlobeAds open to partnerships and collaborations?",
      answer:
        "Yes, we welcome partnerships and collaborations with businesses and organizations that share our vision for innovative marketing solutions.",
    },
    {
      question:
        "What sets 365GlobeAds apart from other digital marketing agencies?",
      answer:
        "At 365GlobeAds, we prioritize innovation, quality, and client satisfaction. Our team is dedicated to delivering high-quality solutions that exceed client expectations.",
    },
    {
      question:
        "How can I stay updated on 365GlobeAds's latest news and developments?",
      answer:
        "You can stay informed about our latest news, projects, and developments by subscribing to our newsletter or following us on social media platforms like Twitter, LinkedIn, and Facebook.",
    },
  ];

  // Function to toggle accordion item
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section>
        <div className="container py-10">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
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
    </div>
  );
}
