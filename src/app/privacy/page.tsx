import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Meridex',
  description:
    'Our commitment to confidentiality, data protection, and strict access controls across all client engagements.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0F14] min-h-screen py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">
              <Shield className="w-3.5 h-3.5 text-teal" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Last updated: October 2026
            </p>
          </div>

          {/* Policy Content Card */}
          <div className="bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-6 sm:p-12 shadow-2xl space-y-8 text-slate-200 text-sm sm:text-base leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Our Commitment to Privacy
              </h2>
              <p>
                At Meridex, we recognise the fundamental importance of confidentiality and data security to professional firms, including mortgage brokers, insurance brokers, accountants, and finance practices.
              </p>
              <p>
                This Privacy Policy explains how we handle business information, client documents, and personal data in the course of providing our administrative and operational support services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. How We Access and Handle Client Data
              </h2>
              <p>
                Our operational model is designed to minimise data transfer and maximize client control:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">Work inside your platforms:</strong> We work directly within the software applications, CRMs, and document vaults you authorise (e.g. Xero, QuickBooks, ApplyOnline, BrokerEngine).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">Access you control:</strong> You provision individual, role-based credentials. You retain the ability to grant, modify, or revoke our access at any time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">Dedicated assignment:</strong> Only specialists specifically assigned to your account are permitted access to your files and systems.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">No selling or marketing of data:</strong> We never sell, rent, commercialize, or share your data or your end-clients&apos; information with any third parties.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Information We Collect
              </h2>
              <p>We collect information in two contexts:</p>
              <div className="space-y-2">
                <p><strong className="text-white">A. Direct Inquiries &amp; Account Management:</strong> When you contact us or request a pilot, we collect business contact details including your name, email address, phone number, company name, and task scope.</p>
                <p><strong className="text-white">B. Operational Workpapers:</strong> Any financial records, customer identification documents, or transaction details provided strictly for the execution of agreed tasks (e.g., loan file packaging, bank reconciliations, 1099 data preparation).</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Confidentiality Agreements &amp; Legal Compliance
              </h2>
              <p>
                Every engagement is governed by confidentiality agreements and strict non-disclosure obligations. Where applicable to our Australian operations, our practices are aligned with the Australian Privacy Principles (APPs) established under the Privacy Act 1988 (Cth). For US engagements, we enforce strict file-level access controls and confidentiality protocols.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Data Retention &amp; Deletion
              </h2>
              <p>
                Because we work primarily inside your systems, your firm retains ownership and control over primary records. Any local temporary working papers or review logs are stored securely and deleted upon completion of review or upon contract termination in accordance with agreed handover protocols.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Contacting Us About Privacy
              </h2>
              <p>
                If you have questions, feedback, or wish to review our confidentiality standard, please reach out to us at:
              </p>
              <div className="p-4 rounded-xl bg-[#0B0F14] border border-[#222A38] space-y-1 text-sm font-medium">
                <p className="text-white font-bold">Meridex Operations &amp; Privacy</p>
                <p>Email: <a href="mailto:info@meridexsolutions.com" className="text-teal hover:underline">info@meridexsolutions.com</a></p>
                <p>Phone: <a href="tel:+61406687791" className="text-teal hover:underline">+61 406 687 791 (AU)</a> · <a href="tel:+918097527110" className="text-teal hover:underline">+91 8097 527 110 (IN)</a></p>
              </div>
            </section>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-white hover:text-teal transition-colors underline underline-offset-4"
            >
              ← Return to Home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
