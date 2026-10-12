'use client';

import React from 'react';
import {
  FileText,
  Shield,
  Calculator,
  Receipt,
  Banknote,
  Globe,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  subServices: string[];
}

const services: ServiceItem[] = [
  {
    id: 'mortgage-broker-support',
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
    id: 'insurance-broker-support',
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
    id: 'bookkeeping-accounting',
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
    id: 'tax-return-preparation',
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
    id: 'payroll-support',
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

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 rounded-t-[36px] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled precisely like "Core features that set us apart from the competition" in the reference */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Comprehensive Outsourcing Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy tracking-tight mt-2 leading-tight">
            Our Services
          </h2>
          <p className="mt-4 text-grey-600 text-base sm:text-lg leading-relaxed">
            Detail-heavy admin and finance work, handled with care and precision, so you can focus on your clients and your growth.
          </p>
        </div>

        {/* 5 Service Cards with Warm-Sand Rounded Cards & Clean Professional Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group rounded-[24px] p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-[#EFECE6] border-[#E5E1D8] shadow-sm hover:shadow-md'
                    : 'bg-[#F7F5F0] border-[#E5E1D8]/80 hover:bg-[#EFECE6] hover:border-[#E5E1D8]'
                }`}
              >
                <div>
                  {/* Card Top: Minimalist Icon + Category Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E1D8] flex items-center justify-center text-navy shadow-xs group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <span className="text-[11px] font-semibold text-grey-500 bg-white/70 px-3 py-1 rounded-full border border-[#E5E1D8]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy tracking-tight mb-4">
                    {service.title}
                  </h3>

                  {/* Sub-services checklist */}
                  <ul className="space-y-2.5 text-sm text-grey-700">
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

                <div className="pt-6 mt-6 border-t border-[#E5E1D8]/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-grey-500">Ready for pilot scope</span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-teal transition-colors"
                  >
                    <span>Pilot this task</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Interactive Pilot Prompt to balance the 3x2 grid elegantly */}
          <div className="rounded-[24px] p-7 sm:p-8 bg-navy text-white flex flex-col justify-between border border-navy-light shadow-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Globe className="w-6 h-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Need a Custom Workflow?
              </h3>
              <p className="text-sm text-grey-300 leading-relaxed mb-4">
                Have specific bespoke SOPs or specialized platforms? We design custom pilots tailored to your firm&apos;s existing software and workflow cadence.
              </p>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-grey-300 space-y-1">
                <p className="font-semibold text-white">Coverage:</p>
                <p>Australia &amp; USA Active · UK Coming Soon</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
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

        {/* Country Note Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F5F0] border border-[#E5E1D8] text-xs font-medium text-grey-600">
            <Globe className="w-3.5 h-3.5 text-teal" />
            <span>We currently work with businesses in Australia and the USA. UK support is coming soon.</span>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="mt-10 p-6 sm:p-8 rounded-[24px] bg-[#F7F5F0] border border-[#E5E1D8] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base font-bold text-navy">Not sure where to start?</h4>
            <p className="text-sm text-grey-600 mt-0.5">
              Tell us the task that eats up most of your week. We&apos;ll suggest a pilot that fits.
            </p>
          </div>
          <a
            href="/contact"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm"
          >
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}
