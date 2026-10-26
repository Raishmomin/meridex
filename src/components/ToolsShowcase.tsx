'use client';

import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  Shield,
  Layers,
  Database,
  Lock,
  Workflow,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface ToolItem {
  name: string;
  category: 'Accounting' | 'Mortgage & CRM' | 'Document & Tax' | 'Workflow';
  badge: string;
  description: string;
  logoBg: string;
  popularIn: string;
}

const tools: ToolItem[] = [
  {
    name: 'Xero',
    category: 'Accounting',
    badge: 'Certified Workflows',
    description: 'Bank feeds, invoicing, BAS reports, payroll setup, and multi-currency reconciliations.',
    logoBg: 'bg-[#13B5EA] text-white',
    popularIn: '🇦🇺 Australia & 🇬🇧 UK',
  },
  {
    name: 'QuickBooks Online',
    category: 'Accounting',
    badge: 'ProAdvisor Aligned',
    description: 'AP/AR management, month-end ledger close, 1099 tracking, and chart of accounts cleanup.',
    logoBg: 'bg-[#2CA01C] text-white',
    popularIn: '🇺🇸 United States',
  },
  {
    name: 'MYOB',
    category: 'Accounting',
    badge: 'Enterprise & Practice',
    description: 'Complex GST/BAS reconciliations, payroll Single Touch Payroll (STP), and ledger audits.',
    logoBg: 'bg-[#6100A5] text-white',
    popularIn: '🇦🇺 Australia',
  },
  {
    name: 'ApplyOnline & BrokerEngine',
    category: 'Mortgage & CRM',
    badge: 'Aggregator Integrated',
    description: 'Lender lodgement data entry, serviceability sheet population, file notes, and compliance checks.',
    logoBg: 'bg-navy text-teal-light',
    popularIn: '🇦🇺 Australia',
  },
  {
    name: 'Encompass & Calyx Point',
    category: 'Mortgage & CRM',
    badge: 'US Mortgage Stack',
    description: '1003 loan application review, conditions tracking, disclosures packaging, and VOE/VOD updates.',
    logoBg: 'bg-[#003A70] text-white',
    popularIn: '🇺🇸 United States',
  },
  {
    name: 'HubSpot & Salesforce',
    category: 'Workflow',
    badge: 'CRM Ops',
    description: 'Lead pipeline management, deal stage updates, task logging, and automated client notifications.',
    logoBg: 'bg-[#FF7A59] text-white',
    popularIn: '🇦🇺 Australia & 🇺🇸 USA',
  },
  {
    name: 'Dext & Hubdoc',
    category: 'Document & Tax',
    badge: 'Receipt Automation',
    description: 'Automated receipt extraction, line-item coding, invoice verification, and document linking.',
    logoBg: 'bg-[#2979FF] text-white',
    popularIn: '🇦🇺 Australia & 🇺🇸 USA',
  },
  {
    name: 'Microsoft 365 & Google Workspace',
    category: 'Workflow',
    badge: 'Secure Cloud',
    description: 'Shared template management, restricted document channels, and secure SOP tracking.',
    logoBg: 'bg-[#0078D4] text-white',
    popularIn: 'Global Standard',
  },
];

const categories = ['All', 'Accounting', 'Mortgage & CRM', 'Document & Tax', 'Workflow'] as const;

export default function ToolsShowcase() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredTools =
    activeTab === 'All'
      ? tools
      : tools.filter((t) => t.category === activeTab);

  return (
    <section id="tools" className="py-20 lg:py-24 bg-[#0B0F14] border-y border-[#222A38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-4">
            SOFTWARE &amp; ECOSYSTEM COMPATIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            We work inside your existing software stack
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            No forced platform migrations. Our specialists integrate seamlessly into the accounting software, broker CRMs, and document tools your team already relies on.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md'
                    : 'bg-[#151A22] text-slate-200 border-[#222A38] hover:bg-[#1E2633] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#151A22] hover:bg-[#1E2633] border border-[#222A38] rounded-[24px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <div>
                {/* Card Top: Brand Initials Box + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shadow-xs ${tool.logoBg}`}
                  >
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-bold bg-[#0B0F14] text-white px-2.5 py-1 rounded-full border border-[#222A38]">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white tracking-tight mb-1">
                  {tool.name}
                </h3>
                <span className="text-[11px] font-medium text-teal block mb-2">
                  {tool.popularIn}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#222A38] flex items-center justify-between text-[11px] text-slate-300 font-medium">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Plug &amp; Play
                </span>
                <span className="text-teal group-hover:underline">Pilot ready →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Banner Reassurance */}
        <div className="mt-10 p-5 sm:p-6 rounded-[22px] bg-[#151A22] border border-[#222A38] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0B0F14] flex items-center justify-center text-teal shrink-0 border border-[#222A38]">
              <Workflow className="w-5 h-5 text-teal" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Using proprietary or customized firm software?</h4>
              <p className="text-xs text-slate-300">
                During onboarding, we review your screen recordings and custom SOPs to train our dedicated pod.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-semibold transition-all shadow-md"
          >
            Confirm Tool Compatibility
          </a>
        </div>

      </div>
    </section>
  );
}
