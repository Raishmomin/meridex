import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use — Meridex',
  description:
    'Terms and conditions governing the use of Meridex back-office and administrative support services.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0F14] min-h-screen py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">
              <FileText className="w-3.5 h-3.5 text-teal" />
              <span>Service Terms &amp; Scope</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Terms of Use
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Last updated: October 2026
            </p>
          </div>

          {/* Terms Content Card */}
          <div className="bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-6 sm:p-12 shadow-2xl space-y-8 text-slate-200 text-sm sm:text-base leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website or engaging Meridex for operational support, file preparation, bookkeeping assistance, or pilot projects, you agree to these Terms of Use and our Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Scope of Operational Support Services
              </h2>
              <p>
                Meridex provides dedicated back-office administrative, document organisation, workflow support, and preparatory data processing for mortgage brokers, insurance brokers, accountants, and finance firms.
              </p>
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-200 text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-100">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Important Professional Disclaimer</span>
                </div>
                <p>
                  Meridex does not provide legal advice, regulated credit advice, or formal tax advisory services. All tax workpapers, 1003 mortgage applications, and financial ledgers prepared by Meridex are delivered review-ready for final approval, verification, and lodgement by your licensed brokers, registered tax agents, or CPAs.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Pilot Engagements &amp; No Lock-In
              </h2>
              <p>
                We believe in earning long-term partnerships through consistent delivery:
              </p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">Clearly Defined Pilots:</strong> All initial pilot engagements have an agreed task scope, volume ceiling, turnaround schedule, and pricing confirmed upfront.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                  <span><strong className="text-white">No Lock-In:</strong> Clients are under no obligation to continue beyond the agreed pilot period. Ongoing work may be scaled or discontinued upon mutual notice.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Client Responsibilities &amp; System Access
              </h2>
              <p>
                To enable timely execution, clients agree to:
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-200">
                <li>Provide prompt access to necessary platforms, templates, and reference materials.</li>
                <li>Designate appropriate user roles with necessary authorization.</li>
                <li>Review all completed deliverables and provide prompt feedback where revisions are required.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Intellectual Property &amp; Work Product
              </h2>
              <p>
                All firm records, client documents, CRM records, and completed working papers remain the exclusive property of the client. Meridex asserts no ownership over any client proprietary materials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Revisions &amp; Quality Review
              </h2>
              <p>
                Every deliverable passes through our internal second-level check prior to submission. If any completed task does not conform to the agreed scope, Meridex will revise the work promptly at no additional fee.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                7. Contact Information
              </h2>
              <p>
                For inquiries regarding these Terms of Use, please contact:
              </p>
              <div className="p-4 rounded-xl bg-[#0B0F14] border border-[#222A38] space-y-1 text-sm font-medium">
                <p className="text-white font-bold">Meridex Operations</p>
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
