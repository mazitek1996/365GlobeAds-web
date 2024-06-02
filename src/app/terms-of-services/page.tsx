"use client";
import React from "react";
import Layout from "@/app/components/layout/Layout";

export default function TermOfServices() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-[5%]">
        <h1 className="text-3xl md:text-4xl font-bold  text-center text-indigo-600 mb-8">Terms of Service</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Introduction</h2>
          <p className="text-gray-200">
            Welcome to 365GlobeAds! By using our services, you agree to these Terms of Service ("ToS"). Please read them carefully. If you do not agree to these terms, do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-200">
            By accessing or using the 365GlobeAds website and services, you agree to be bound by these ToS and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Changes to Terms</h2>
          <p className="text-gray-200">
            We reserve the right to modify or replace these ToS at any time. We will notify you of any changes by posting the new ToS on our website. Your continued use of our services after any such changes constitutes your acceptance of the new ToS.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Services Provided</h2>
          <p className="text-gray-200">
            365GlobeAds offers digital advertising services including, but not limited to, online ad placements, campaign management, and performance analytics. Specific features and functionalities may vary.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. User Responsibilities</h2>
          <h3 className="text-xl font-semibold text-gray-200">Account Registration</h3>
          <p className="text-gray-200 mb-2">
            You must provide accurate and complete information during registration and keep your account information updated.
          </p>
          <h3 className="text-xl font-semibold text-gray-200">Prohibited Activities</h3>
          <p className="text-gray-200 mb-2">
            You agree not to engage in any activities that are unlawful, infringe on the rights of others, or interfere with the operation of our services.
          </p>
          <h3 className="text-xl font-semibold text-gray-200">Content</h3>
          <p className="text-gray-200">
            You are responsible for all content you upload, post, or otherwise transmit via our services. You must ensure you have the necessary rights to use such content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Payment Policy</h2>
          <h3 className="text-xl font-semibold text-gray-200">Payment Terms</h3>
          <p className="text-gray-200 mb-2">
            Payments for services are due as per the agreed schedule. Payment methods accepted include credit/debit cards and electronic transfers.
          </p>
          <h3 className="text-xl font-semibold text-gray-200">Subscription Services</h3>
          <p className="text-gray-200 mb-2">
            If you subscribe to a recurring service, your subscription will automatically renew at the end of each billing cycle unless you cancel prior to renewal.
          </p>
          <h3 className="text-xl font-semibold text-gray-200">Refunds</h3>
          <p className="text-gray-200 mb-2">
            Refunds are subject to our refund policy, which will be provided at the time of purchase or subscription.
          </p>
          <h3 className="text-xl font-semibold text-gray-200">Late Payments</h3>
          <p className="text-gray-200">
            Late payments may incur additional fees and may result in suspension or termination of services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Termination</h2>
          <p className="text-gray-200">
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, you must cease all use of our services and content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-200">
            365GlobeAds will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">8. Governing Law</h2>
          <p className="text-gray-200">
            These ToS are governed by and construed in accordance with the laws of the jurisdiction in which 365GlobeAds operates, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">9. Contact Information</h2>
          <p className="text-gray-200">
            For any questions about these ToS, please contact us at <a href="mailto:support@365globeads.com" className="text-indigo-600 underline">support@365globeads.com</a>.
          </p>
        </section>

      </div>
    </Layout>
  );
}
