'use client';

import React, { useState } from 'react';
import {
  FileText,
  Shield,
  Calculator,
  Receipt,
  Banknote,
  ArrowRight,
  Check,
  Workflow,
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
    id: 'us-bookkeeping-accounting',
    title: 'Bookkeeping and accounting support',
    category: 'Financial Records',
    icon: Calculator,
    subServices: [
      'Bank and credit card reconciliations',
      'AP/AR processing',
      'Month-end close support and reporting',
      'QuickBooks and Xero data work',
    ],
  },
  {
    id: 'us-tax-return-preparation',
    title: 'Tax return preparation',
    category: 'Tax & Compliance',
    icon: Receipt,
    subServices: [
      'Federal and state return preparation support',
      'Individual, self-employed and small business returns',
      'Working papers and document organisation',
      'Review-ready files for your licensed preparer or CPA',
    ],
  },
  {
    id: 'us-payroll-support',
    title: 'Payroll support',
    category: 'Payroll Operations',
    icon: Banknote,
    subServices: [
      'Pay run preparation and processing support',
      'Payroll tax calculations and reconciliations',
      'Year-end data preparation',
    ],
  },
  {
    id: 'us-mortgage-insurance-support',
    title: 'Mortgage and insurance broker support',
    category: 'Lending & Risk',
    icon: FileText,
    subServices: [
      'Coming on request. Get in touch to discuss your needs.',
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
    <section id="services" className="bg-[#0B0F14] py-16 sm:py-20 lg:py-28 border-t border-[#222A38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Dedicated Outsourcing Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mt-2 leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Detail-heavy admin and financial work, handled with care and precision, so your team can focus on clients, relationships, and business growth.
          </p>

          {/* Country Buckets Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-7">
            <button
              onClick={() => setActiveTab('australia')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'australia'
                  ? 'bg-teal/20 text-teal-light border-teal/60 shadow-sm'
                  : 'bg-[#151A22] text-slate-200 border-[#222A38] hover:bg-[#1E2633] hover:text-white'
              }`}
            >
              <span className="text-base">🇦🇺</span>
              <span>Australia</span>
            </button>

            <button
              onClick={() => setActiveTab('usa')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'usa'
                  ? 'bg-teal/20 text-teal-light border-teal/60 shadow-sm'
                  : 'bg-[#151A22] text-slate-200 border-[#222A38] hover:bg-[#1E2633] hover:text-white'
              }`}
            >
              <span className="text-base">🇺🇸</span>
              <span>United States</span>
            </button>

            <button
              onClick={() => setActiveTab('uk')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === 'uk'
                  ? 'bg-teal/20 text-teal-light border-teal/60 shadow-sm'
                  : 'bg-[#151A22] text-slate-200 border-[#222A38] hover:bg-[#1E2633] hover:text-white'
              }`}
            >
              <span className="text-base">🇬🇧</span>
              <span>United Kingdom</span>
              <span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-800/40 px-2 py-0.5 rounded-full font-bold ml-1">
                Launching 2027
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Country Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {currentServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between border bg-[#11151C] border-[#222A38] hover:bg-[#151A22] hover:border-teal/40 hover:shadow-xl"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#0B0F14] border border-[#222A38] flex items-center justify-center text-teal shadow-xs group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-[11px] font-semibold text-white bg-[#0B0F14] px-3 py-1 rounded-full border border-[#222A38]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3.5">
                    {service.title}
                  </h3>

                  {/* Checklist */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    {service.subServices.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-teal" />
                        </span>
                        <span className="leading-snug">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-6 border-t border-[#222A38] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-300">
                    {activeTab === 'uk' ? 'Launching 2027' : 'Pilot ready'}
                  </span>
                  {activeTab === 'uk' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#151A22] text-slate-400 border border-[#222A38] select-none">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-teal-light transition-colors"
                    >
                      <span>Pilot this task</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Seamless Integration & Software Reassurance Section */}
        <div className="mt-12 sm:mt-16 bg-[#11151C] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal">
                Seamless Platform Integration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                No fixed platform migrations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Our specialists integrate seamlessly into the accounting software, broker CRMs, and document tools your team already relies on.
              </p>
            </div>

            {/* In-House / Proprietary Software & Custom SOP Callout Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#151A22] border border-[#222A38] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F14] flex items-center justify-center text-teal shrink-0 border border-[#222A38]">
                  <Workflow className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Need a custom task or bespoke SOP?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Have specific aggregator guidelines, unique checklists, or proprietary platforms?
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="w-full sm:w-auto text-center whitespace-nowrap px-5 py-2.5 rounded-full bg-teal/20 hover:bg-teal/30 text-teal-light hover:text-white border border-teal/40 hover:border-teal/60 text-xs font-semibold transition-all shadow-sm shrink-0"
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
