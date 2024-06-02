





"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Link from "next/link";


import Layout from "@/app/components/layout/Layout"

export default function Privacy() {
 
  return (
    <Layout>
      <div className="container mx-auto px-4 py-[5%]">
      
     
   
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-8">Privacy Policy</h1>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">Introduction</h2>
  <p className="text-gray-200">
    365GlobeAds ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Information We Collect</h2>
  <h3 className="text-xl font-semibold text-gray-200">Personal Information</h3>
  <p className="text-gray-200 mb-2">
    We collect personal information you provide, such as name, email address, payment information, and any other information you provide during registration or use of our services.
  </p>
  <h3 className="text-xl font-semibold text-gray-200">Usage Data</h3>
  <p className="text-gray-200">
    We collect data on how you interact with our services, including IP address, browser type, pages visited, and other usage information.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. How We Use Your Information</h2>
  <p className="text-gray-200 mb-2">
    <span className="font-semibold">Service Delivery:</span> To provide, maintain, and improve our services.
  </p>
  <p className="text-gray-200 mb-2">
    <span className="font-semibold">Communication:</span> To send you updates, security alerts, and administrative messages.
  </p>
  <p className="text-gray-200 mb-2">
    <span className="font-semibold">Marketing:</span> To send promotional materials, though you can opt out at any time.
  </p>
  <p className="text-gray-200">
    <span className="font-semibold">Compliance:</span> To comply with legal obligations and protect our rights.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Sharing Your Information</h2>
  <p className="text-gray-200">
    We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Data Security</h2>
  <p className="text-gray-200">
    We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Your Rights</h2>
  <p className="text-gray-200">
    You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your data.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Cookies</h2>
  <p className="text-gray-200">
    We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Payment Policy</h2>
  <p className="text-gray-200">
    All payments are processed through secure third-party payment processors. We do not store your payment information. For recurring payments, you will be billed automatically at the beginning of each billing cycle unless you cancel.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">8. Changes to this Policy</h2>
  <p className="text-gray-200">
    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold text-gray-100 mb-4">9. Contact Us</h2>
  <p className="text-gray-200">
    If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@365globeads.com" className="text-indigo-600 underline">privacy@365globeads.com</a>.
  </p>
</section>
      </div>
    </Layout>
  );
}
