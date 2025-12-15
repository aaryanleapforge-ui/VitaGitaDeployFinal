import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-500">
        Last updated: January 2025
      </p>

      <section className="space-y-3">
        <p>
          VitaGita is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, store, and safeguard
          your information when you use the VitaGita application and related
          services.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal information such as name and email address</li>
          <li>Authentication data provided through Firebase Authentication</li>
          <li>Usage data including app interactions and preferences</li>
          <li>Technical information such as device type and app version</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <p>
          The information we collect is used to operate and improve the
          application, authenticate users, personalize content, ensure security,
          and enhance overall user experience.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Data Storage and Security</h2>
        <p>
          User data is securely stored using Firebase services. We apply
          reasonable technical and organizational measures to protect personal
          information from unauthorized access, loss, or misuse.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Third-Party Services</h2>
        <p>
          VitaGita uses trusted third-party services such as Firebase
          Authentication, Cloud Firestore, and Firebase Storage. These services
          operate under their own privacy policies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Data Sharing</h2>
        <p>
          We do not sell, rent, or trade personal information. Data may be
          disclosed only when required by law or to protect the rights and safety
          of VitaGita and its users.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p>
          Personal data is retained only for as long as necessary to fulfill the
          purposes outlined in this policy, unless a longer retention period is
          required by law.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Children’s Privacy</h2>
        <p>
          VitaGita does not knowingly collect personal information from children
          under the age of 13.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="font-medium">vitagitacare@gmail.com</p>
      </section>
    </div>
  );
}
