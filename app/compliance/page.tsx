import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | ZIEPX",
  description: "ZIEPX Compliance - Regulatory compliance and security standards",
};

export default function Compliance() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary-dark mb-4">Compliance & Regulatory</h1>
        <p className="text-gray-600 mb-12">ZIEPX is committed to maintaining the highest standards of regulatory compliance and security.</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Regulatory Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX operates in full compliance with financial regulations in Zimbabwe and across participating African countries. We work closely with regulatory authorities to ensure our services meet all applicable requirements.
            </p>
            <h3 className="text-2xl font-semibold text-primary-dark mb-3">Licensing & Authorization</h3>
            <p className="text-gray-700 leading-relaxed">
              ZIEPX operates under licenses and authorizations granted by relevant financial regulatory bodies in each jurisdiction where we provide services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Anti-Money Laundering (AML)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX has implemented comprehensive AML policies and procedures in accordance with international standards, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Customer Due Diligence (CDD) and Know Your Customer (KYC) procedures</li>
              <li>Transaction monitoring and suspicious activity reporting</li>
              <li>Ongoing customer risk assessment</li>
              <li>Record keeping and reporting to regulatory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Counter-Terrorist Financing (CTF)</h2>
            <p className="text-gray-700 leading-relaxed">
              We comply with all counter-terrorist financing regulations and maintain systems to detect and prevent transactions that may be related to terrorist financing activities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Data Protection & Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX complies with data protection laws, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>General Data Protection Regulation (GDPR) principles</li>
              <li>Local data protection laws in Zimbabwe and African jurisdictions</li>
              <li>Industry standards for financial data security</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Payment Services Regulations</h2>
            <p className="text-gray-700 leading-relaxed">
              As a payment service provider, ZIEPX adheres to payment services regulations, including requirements for transaction security, consumer protection, and dispute resolution.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Security Standards</h2>
            <h3 className="text-2xl font-semibold text-primary-dark mb-3">ISO 27001</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX follows ISO 27001 information security management standards to protect customer data and ensure secure operations.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">PCI DSS Compliance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain Payment Card Industry Data Security Standard (PCI DSS) compliance through our banking partners to ensure secure payment processing.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mb-3">Encryption</h3>
            <p className="text-gray-700 leading-relaxed">
              All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Audit & Reporting</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZIEPX undergoes regular audits and assessments to ensure ongoing compliance:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Internal compliance reviews</li>
              <li>External audits by independent firms</li>
              <li>Regulatory examinations</li>
              <li>Regular reporting to regulatory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Consumer Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting consumers through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Clear and transparent terms of service</li>
              <li>Fair dispute resolution processes</li>
              <li>Protection of customer funds</li>
              <li>Transparent fee structures</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Cross-Border Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              For cross-border transactions, ZIEPX complies with applicable international regulations, including foreign exchange controls and international sanctions requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Regulatory Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We continuously monitor regulatory developments and update our policies and procedures to ensure ongoing compliance with evolving requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Contact Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              For compliance-related inquiries, please contact:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Email:</strong> compliance@ziepx.com<br />
              <strong>Address:</strong> Zimbabwe & Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
