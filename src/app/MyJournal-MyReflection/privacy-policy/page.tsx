import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        My Journal! My Reflection! - Privacy Policy
      </h1>
      <div className="w-full max-w-3xl text-gray-700 space-y-6">
        <p>
          <b>My Journal! My Reflection!</b> is built by Aayushi Singh. This
          Privacy Policy informs you about our practices regarding the
          collection, use, and disclosure of personal information when you use
          our app and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Information Collection
        </h2>
        <p>
          <b>My Journal! My Reflection!</b> prioritizes your privacy. We do not
          collect any personal information from you through the app. This
          includes data like your name, email address, contacts, or anything
          that could be used to identify you.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Information Storage
        </h2>
        <p>
          Your journal entries and any content you create within the app are
          stored locally on your device. We do not access or store this
          information on our servers. This ensures your privacy and keeps your
          journaling experience entirely personal.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Security</h2>
        <p>
          We strive to provide a secure environment for your app experience.
          However, it's important to remember that no method of transmission over
          the internet or electronic storage is 100% secure. While we take
          reasonable steps to protect your information, we cannot guarantee its
          absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Third-Party Services
        </h2>
        <p>
          <b>My Journal! My Reflection!</b> does not currently integrate with any
          third-party services that might collect your information.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of
          any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:predecode@gmail.com" className=" underline">
            predecode@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
