'use client';

import React, { useState } from "react";
import { Star, ShieldCheck, Sparkles, Building2, Quote, ArrowRight } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  flag: string;
  country: string;
  avatarUrl: string;
  metric: string;
  serviceCategory: 'Mortgage Support' | 'Bookkeeping' | 'Payroll & Tax' | 'All';
  verifiedSLA: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    quote:
      "Meridex completely transformed our loan processing! The file quality, serviceability calculator inputs, and lender condition follow-ups are flawless. It’s given our brokers back 15 hours a week to focus exclusively on client meetings.",
    clientName: "Sarah Mitchell",
    role: "Senior Mortgage Broker",
    company: "Pacific Finance Group",
    flag: "🇦🇺",
    country: "Australia",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    metric: "Saved 15+ hours / week",
    serviceCategory: 'Mortgage Support',
    verifiedSLA: '99.8% Lodgement Accuracy',
  },
  {
    id: '2',
    quote:
      "Finally, an outsourcing partner that truly understands Australian compliance and tax workpapers. Their second-level review caught every edge case before reaching our Tax Agent review desk. The quality speaks for itself.",
    clientName: "James Chen",
    role: "Practice Manager",
    company: "Clearview Accounting",
    flag: "🇦🇺",
    country: "Australia",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    metric: "100% On-Time BAS Prep",
    serviceCategory: 'Bookkeeping',
    verifiedSLA: 'Dual-Review Certified',
  },
  {
    id: '3',
    quote:
      "Their payroll support freed up our entire admin team. Managing multi-state 1099 reconciliations and QuickBooks cleanups used to swallow our Fridays. Now everything is balanced and ready on Monday morning.",
    clientName: "Emily Rodriguez",
    role: "Operations Director",
    company: "Summit Financial Services",
    flag: "🇺🇸",
    country: "United States",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    metric: "Scaled Pod in 60 Days",
    serviceCategory: 'Payroll & Tax',
    verifiedSLA: '24-hour Payroll Turnaround',
  },
  {
    id: '4',
    quote:
      "Meridex’s specialists know Encompass and US lender guidelines better than our previous local hires. It feels like having a dedicated tier-1 loan packaging squad that never misses an underwriting deadline.",
    clientName: "David Sterling",
    role: "Principal Broker",
    company: "Apex Lending Partners",
    flag: "🇺🇸",
    country: "United States",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    metric: "Turnaround Cut by 50%",
    serviceCategory: 'Mortgage Support',
    verifiedSLA: 'SOC2 & NDA Secured',
  },
];

const filterCategories = ['All', 'Mortgage Support', 'Bookkeeping', 'Payroll & Tax'] as const;

export default function Testimonials(): React.JSX.Element {
  const [filter, setFilter] = useState<string>('All');

  const filtered =
    filter === 'All'
      ? testimonials
      : testimonials.filter((t) => t.serviceCategory === filter);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4">
            CLIENT SUCCESS &amp; VERIFIED FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight leading-tight">
            What our clients say
          </h2>
          <p className="mt-3 text-grey-600 text-base sm:text-lg">
            Hear from finance industry leaders in Australia and the USA who trust Meridex for their most critical operations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  filter === cat
                    ? 'bg-navy text-white border-navy shadow-sm'
                    : 'bg-white text-grey-700 border-[#E5E1D8] hover:bg-[#EFECE6] hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-COLUMN TALL UPGRADED CARDS (LUXURA THEME ELEVATED WITH VERIFIED METRICS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E5E1D8] rounded-[22px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[360px] sm:min-h-[420px] group relative overflow-hidden"
            >
              {/* Card Top: Metric Badge & Country Indicator */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white text-navy border border-[#E5E1D8] shadow-2xs">
                    <Sparkles className="w-3 h-3 text-teal" />
                    <span>{item.metric}</span>
                  </span>
                  <span
                    className="text-xl"
                    title={item.country}
                  >
                    {item.flag}
                  </span>
                </div>

                {/* 5 Gold Stars Rating */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-grey-800 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author footer at bottom with round circular photo and clean credentials */}
              <div className="pt-6 mt-6 border-t border-[#DDD8CD]/80">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-[#DDD8CD] shrink-0 border-2 border-white shadow-xs">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.avatarUrl}')` }}
                      role="img"
                      aria-label={item.clientName}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-navy truncate">
                      {item.clientName}
                    </h3>
                    <p className="text-[11px] text-grey-600 truncate font-medium">
                      {item.role}
                    </p>
                    <p className="text-[10px] text-grey-500 truncate">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Verified SLA Audit Footer */}
                <div className="pt-2 border-t border-[#DDD8CD]/40 flex items-center justify-between text-[10px] text-grey-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    {item.verifiedSLA}
                  </span>
                  <span className="text-navy">{item.serviceCategory}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-grey-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span className="font-semibold text-navy">100% Pre-Delivery Second-Level Review</span>
          </div>
          <span className="text-grey-300">·</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-navy">4.9 / 5.0 Average Pilot Satisfaction</span>
          </div>
          <span className="text-grey-300">·</span>
          <a
            href="/contact"
            className="font-bold text-navy hover:text-teal inline-flex items-center gap-1"
          >
            <span>Start your own trial pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
