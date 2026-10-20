'use client';

import React, { useState } from 'react';
import {
  FileText,
  Shield,
  Calculator,
  Receipt,
  Banknote,
  Globe,
  ArrowRight,
  Check,
  Workflow,
  Sparkles,
  Layers,
} from 'lucide-react';

interface SubServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  subServices: string[];
}

const ausServices: SubServiceItem[] = [
  {
    id: 'aus-mortgage-broker-support',
    title: 'Mortgage Broker Support',
    category: 'Lending Operations',
    icon: FileText,
    subServices: [
      'Document collection and verification',
      'Serviceability inputs and lender comparison support',
      'File notes and application preparation',
      'Lodgement support and lender follow-up',
      'Conditions tracking and settlement coordination',
    ],
  },
  {
    id: 'aus-insurance-broker-support',
    title: 'Insurance Broker Support',
    category: 'Risk & Policies',
    icon: Shield,
    subServices: [
      'Client onboarding and document collection',
      'Quote data entry and comparison sheets',
      'Policy documentation, renewals and certificates',
      'Claims paperwork support',
      'CRM and records maintenance',
    ],
  },
  {
    id: 'aus-bookkeeping-accounting',
    title: 'Bookkeeping & Accounting Support',
    category: 'Financial Records',
    icon: Calculator,
    subServices: [
      'Bank and credit card reconciliations',
      'Accounts payable and receivable processing',
      'Month-end support and management reports',
      'BAS preparation support',
      'Xero, MYOB and QuickBooks data work',
    ],
  },
  {
    id: 'aus-tax-return-preparation',
    title: 'Tax Return Preparation',
    category: 'Compliance Workpapers',
    icon: Receipt,
    subServices: [
      'Individual, sole trader and business return preparation',
      'Working papers and document organisation',
      'Review-ready files for your registered tax agent',
    ],
  },
  {
    id: 'aus-payroll-support',
    title: 'Payroll Support',
    category: 'Workforce Processing',
    icon: Banknote,
    subServices: [
      'Pay run preparation and processing support',
      'Superannuation calculations and Single Touch Payroll data',
      'Leave and entitlement tracking',
      'Payroll reconciliations',
    ],
  },
];

const usaServices: SubServiceItem[] = [
  {
    id: 'us-mortgage-1003-prep',
    title: 'Mortgage 1003 & Loan File Preparation',
    category: 'US Lending Ops',
    icon: FileText,
    subServices: [
      'Mortgage 1003 file prep and document checks',
      'Borrower income, asset & credit document verification',
      'Trailing docs, disclosures packaging, and VOE tracking',
      'Encompass and Calyx Point pipeline support',
    ],
  },
  {
    id: 'us-bookkeeping-ap-ar',
    title: 'Bookkeeping & AP / AR Management',
    category: 'QuickBooks Support',
    icon: Calculator,
    subServices: [
      'AP / AR support in QuickBooks Online',
      'Vendor bill entry and payment scheduling',
      'Month-end closing support and journal entry prep',
      'Chart of accounts maintenance and cleanups',
    ],
  },
  {
    id: 'us-1099-w2-prep',
    title: '1099 & W-2 Year-End Data Preparation',
    category: 'Compliance Prep',
    icon: Receipt,
    subServices: [
      '1099 and W-2 year end data preparation',
      'Independent contractor 1099-NEC & 1099-MISC compilation',
      'W-9 collection and vendor tax ID verification',
      'Review-ready workpapers for CPA sign-off',
    ],
  },
  {
    id: 'us-bank-reconciliations',
    title: 'Bank & Credit Card Reconciliations',
    category: 'Ledger Audit',
    icon: Banknote,
    subServices: [
      'Bank and credit card reconciliations',
      'Daily/weekly transaction matching across merchant accounts',
      'Unreconciled transaction identification and resolution',
      'Clear discrepancy audit logs ready for review',
    ],
  },
];

const ukServices: SubServiceItem[] = [
  {
    id: 'uk-mortgage-prep',
    title: 'Mortgage File Preparation',
    category: 'FCA Regulated Ops',
    icon: FileText,
    subServices: [
      'Mortgage file prep for your FCA-authorised adviser',
      'Proof of income, bank statement & identity checks',
      'Lender portal data entry and packaging support',
      'Case tracking through valuation to offer',
    ],
  },
  {
    id: 'uk-vat-bookkeeping',
    title: 'VAT Workpapers & Bookkeeping',
    category: 'HMRC Compliance',
    icon: Calculator,
    subServices: [
      'HMRC-aligned VAT return workpaper preparation',
      'Bank and credit card reconciliations in Xero & FreeAgent',
      'Accounts payable and invoice coding',
      'Year-end trial balance preparation',
    ],
  },
  {
    id: 'uk-payroll-cis',
    title: 'Payroll & CIS Processing Support',
    category: 'Payroll & Workforce',
    icon: Banknote,
    subServices: [
      'Xero UK Payroll & CIS processing support',
      'Subcontractor verification and monthly CIS returns',
      'Workplace pension contribution calculations',
      'P45 / P60 and pay slip compilation',
    ],
  },
];

type RegionTab = 'australia' | 'usa' | 'uk';

export default function Services() {
  const [activeTab, setActiveTab] = useState<RegionTab>('australia');

  const currentServices =
    activeTab === 'australia'
      ? ausServices
      : activeTab === 'usa'
      ? usaServices
      : ukServices;

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-28 rounded-t-[32px] sm:rounded-t-[44px] shadow-sm border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Dedicated Outsourcing Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight mt-2 leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-grey-600 text-sm sm:text-lg leading-relaxed">
            Detail-heavy admin work, handled with care and precision, so you can focus on your clients and growth.
          </p>

          {/* Country Buckets Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-7">
            <button
              onClick={() => setActiveTab('australia')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'australia'
                  ? 'bg-navy text-white border-navy shadow-md'
                  : 'bg-[#F7F5F0] text-grey-700 border-[#E5E1D8] hover:bg-[#EFECE6] hover:text-navy'
              }`}
            >
              <span className="text-base">🇦🇺</span>
              <span>Australia (5 Services)</span>
            </button>

            <button
              onClick={() => setActiveTab('usa')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'usa'
                  ? 'bg-navy text-white border-navy shadow-md'
                  : 'bg-[#F7F5F0] text-grey-700 border-[#E5E1D8] hover:bg-[#EFECE6] hover:text-navy'
              }`}
            >
              <span className="text-base">🇺🇸</span>
              <span>United States (4 Services)</span>
            </button>

            <button
              onClick={() => setActiveTab('uk')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'uk'
                  ? 'bg-navy text-white border-navy shadow-md'
                  : 'bg-[#F7F5F0] text-grey-700 border-[#E5E1D8] hover:bg-[#EFECE6] hover:text-navy'
              }`}
            >
              <span className="text-base">🇬🇧</span>
              <span>United Kingdom</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold ml-1">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Country Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {currentServices.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-[#EFECE6] border-[#DDD8CD] shadow-sm hover:shadow-md'
                    : 'bg-[#F7F5F0] border-[#E5E1D8]/80 hover:bg-[#EFECE6] hover:border-[#DDD8CD]'
                }`}
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5E1D8] flex items-center justify-center text-navy shadow-xs group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <span className="text-[11px] font-semibold text-grey-600 bg-white/80 px-3 py-1 rounded-full border border-[#E5E1D8]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy tracking-tight mb-3.5">
                    {service.title}
                  </h3>

                  {/* Checklist */}
                  <ul className="space-y-2 text-xs sm:text-sm text-grey-700">
                    {service.subServices.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-white border border-[#E5E1D8] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-teal" />
                        </span>
                        <span className="leading-snug">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-6 border-t border-[#DDD8CD] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-grey-500">Pilot ready</span>
                  <a
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-teal transition-colors"
                  >
                    <span>Pilot this task</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Custom Workflow Card */}
          <div className="rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 bg-navy text-white flex flex-col justify-between border border-navy-light shadow-md">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-5">
                <Globe className="w-5 h-5 text-teal-light" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Need a Custom Task or SOP?
              </h3>
              <p className="text-xs sm:text-sm text-grey-300 leading-relaxed mb-4">
                Have specific aggregator guidelines or specialized platforms? We build custom pilots calibrated directly around your firm&apos;s internal processes.
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-grey-300 space-y-1">
                <p className="font-semibold text-white">Coverage:</p>
                <p>Australia &amp; USA Active · UK Pilot Available</p>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/10">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-navy font-semibold text-xs hover:bg-grey-100 transition-colors"
              >
                <span>Request Custom Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Seamless Integration & Software Reassurance Section */}
        <div className="mt-12 sm:mt-16 bg-[#F7F5F0] border border-[#E5E1D8] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal">
                Seamless Platform Integration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mt-1">
                No forced platform migrations.
              </h3>
              <p className="text-xs sm:text-sm text-grey-600 mt-2 leading-relaxed">
                Our specialists integrate seamlessly into the accounting software, broker CRMs, and document tools your team already relies on.
              </p>
            </div>

            {/* In-House / Proprietary Software Callout Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E5E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFECE6] flex items-center justify-center text-navy shrink-0 border border-[#DDD8CD]">
                  <Workflow className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy">
                    Using proprietary or customized software?
                  </h4>
                  <p className="text-xs text-grey-600 mt-0.5">
                    We adapt directly to your bespoke internal tools and screen recordings during onboarding.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="w-full sm:w-auto text-center whitespace-nowrap px-5 py-2.5 rounded-full bg-navy hover:bg-navy-light text-white text-xs font-semibold transition-all shadow-xs shrink-0"
              >
                Confirm Compatibility
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
