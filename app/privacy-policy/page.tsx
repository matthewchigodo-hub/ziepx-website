import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ZIEPX",
  description: "ZIEPX Privacy Policy - How we protect and handle your personal information",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">Privacy Policy</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">1. Introduction</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              ZIEPX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile payment platform and services.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              By using ZIEPX, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">2. Information We Collect</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark mb-2 sm:mb-3 leading-tight">2.1 Personal Information</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 mb-3 sm:mb-4">
              <li>Name, date of birth, and identification documents</li>
              <li>Contact information (email address, phone number, physical address)</li>
              <li>Financial information (bank account details, transaction history)</li>
              <li>Device information (IP address, device type, operating system)</li>
              <li>Usage data (how you interact with our services)</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark mb-2 sm:mb-3 leading-tight">2.2 Automatically Collected Information</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We automatically collect certain information when you use our services, including device identifiers, log data, and location information (with your consent).
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">3. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">4. Information Sharing and Disclosure</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>With your consent</li>
              <li>With participating banks and financial institutions</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">5. Data Security</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">6. Your Rights</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">You have the right to:</p>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">7. Data Retention</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">8. Children's Privacy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">9. Changes to This Privacy Policy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">10. Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3 sm:mt-4">
              <strong>Email:</strong> privacy@ziepx.com<br />
              <strong>Address:</strong> Zimbabwe & Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
