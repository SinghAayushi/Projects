import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        ResumeNest - Privacy Policy
      </h1>
      <div className="w-full max-w-3xl text-gray-700 space-y-6">
        <p>
          This Privacy Policy explains how <b>ResumeNest</b> handles information
          when you use the app. This app uses Google AdMob to display
          advertisements.
        </p>

        <p>
          <b>Effective Date:</b> May 29, 2026
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Information We Collect</h2>
        <p>
          We do not ask you to create an account and we do not directly collect
          personal details such as your name, email address, or phone number
          inside the app.
        </p>
        <p>
          However, third-party services used in the app (such as AdMob) may
          automatically collect certain information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Device information (model, OS version, language)</li>
          <li>Advertising identifiers (such as IDFA/AAID)</li>
          <li>IP address and approximate location</li>
          <li>App usage and ad interaction data</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 ">How We Use Information</h2>
        <p>
          Information collected by AdMob may be used to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Serve ads in the app</li>
          <li>Measure ad performance and app analytics</li>
          <li>Show personalized or non-personalized ads, depending on consent and region</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 ">AdMob and Third-Party Services</h2>
        <p>
          This app uses Google AdMob, which is provided by Google LLC. AdMob may
          collect and process data under Google&apos;s Privacy Policy.
        </p>
        <p>
          Learn more:
          {" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Privacy Policy
          </a>
          {" "}
          and
          {" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            How Google uses information from sites or apps
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Your Choices</h2>
        <p>
          You can limit personalized advertising through your device settings:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>iOS: Settings - Privacy &amp; Security - Tracking</li>
          <li>Android: Settings - Google - Ads</li>
        </ul>
        <p>
          You can also manage ad personalization from Google:
          {" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            adssettings.google.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Data Storage and Security</h2>
        <p>
          App content you create is stored locally on your device unless stated
          otherwise. We take reasonable steps to protect your information, but no
          method of electronic storage or transmission is fully secure.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Children&apos;s Privacy</h2>
        <p>
          The app is not intended for children under the age of 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided personal information, please contact us so we can
          take appropriate action.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-2 ">Contact Us</h2>
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
