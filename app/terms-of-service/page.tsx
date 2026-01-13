import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ZIEPX",
  description: "ZIEPX Terms of Service - Terms and conditions for using our platform",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary-dark mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using ZIEPX ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX is a mobile payment platform that enables users to make payments, transfer money, and conduct financial transactions through participating banking applications. The Service supports multiple currencies and is designed for use in Zimbabwe and across Africa.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">3. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">To use ZIEPX, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have a valid bank account with a participating financial institution</li>
              <li>Reside in a supported region (Zimbabwe or participating African countries)</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">4. User Accounts</h2>
            <h3 className="text-2xl font-semibold text-primary-dark mb-3">4.1 Account Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must register for an account through your participating bank's mobile application. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">4.2 Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">5. Use of Service</h2>
            <h3 className="text-2xl font-semibold text-primary-dark mb-3">5.1 Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You may use the Service only for lawful purposes and in accordance with these Terms.</p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">5.2 Prohibited Activities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service for money laundering or terrorist financing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">6. Transactions and Payments</h2>
            <h3 className="text-2xl font-semibold text-primary-dark mb-3">6.1 Transaction Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All transactions are processed through your participating bank. ZIEPX acts as a payment facilitator and does not hold or transfer funds directly.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">6.2 Transaction Limits</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transaction limits may apply based on your account type, bank policies, and regulatory requirements. These limits are set by your bank, not by ZIEPX.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">6.3 Fees</h3>
            <p className="text-gray-700 leading-relaxed">
              Fees, if any, are determined by your bank. ZIEPX does not charge additional fees for using the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">7. Currency Exchange</h2>
            <p className="text-gray-700 leading-relaxed">
              When using multi-currency features, exchange rates are provided by your bank or third-party providers. Exchange rates may fluctuate, and we do not guarantee specific rates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The Service and its original content, features, and functionality are owned by ZIEPX and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, ZIEPX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless ZIEPX from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Email:</strong> legal@ziepx.com<br />
              <strong>Address:</strong> Zimbabwe & Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
