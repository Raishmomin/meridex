'use client';

import React from "react";
import Link from "next/link";
import {
  Rocket,
  CheckCircle2,
  MessageSquare,
  Lock,
  Sliders,
  Building2,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function WhyMeridex(): React.JSX.Element {
  return (
    <section id="why-meridex" className="py-20 lg:py-28 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-4">
            ADVANTAGE &amp; PROOF
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Why finance leaders choose Meridex
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Exceptional accuracy and second-level reviewed support that sets the standard for admin and finance operations.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Left Tall Vertical Card */}
          <div className="lg:col-span-5 bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-teal/40 relative overflow-hidden group">
            <div>
              {/* Media image inside card */}
              <div className="w-full h-48 sm:h-64 rounded-[20px] sm:rounded-[24px] overflow-hidden mb-6 sm:mb-8 relative border border-[#222A38] bg-[#0B0F14]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80')`,
                  }}
                  role="img"
                  aria-label="Precision finance calculations and reviewed audit files"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#151A22]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                  <span>Dual Review Standard</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug mb-3">
                Checked by senior reviewers to deliver flawless files and unmatched peace of mind.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every mortgage application note, BAS workpaper, and payroll reconciliation goes through a mandatory second-level review before hitting your desk.
              </p>
            </div>

            {/* Bottom Button Pill */}
            <div className="pt-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal/20 hover:bg-teal/30 text-teal-light hover:text-white border border-teal/40 hover:border-teal/60 text-xs font-semibold transition-all shadow-sm group-hover:shadow"
              >
                <span>Explore Services</span>
                <span className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-light" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Rows */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            
            {/* Top Row: Two Side-by-Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
              
              {/* Card 2: "Trusted by" Card */}
              <div className="sm:col-span-7 bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-teal/40 relative overflow-hidden group">
                <div className="w-full h-32 sm:h-36 rounded-[18px] sm:rounded-[20px] overflow-hidden mb-4 sm:mb-5 relative border border-[#222A38] bg-[#0B0F14]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80')`,
                    }}
                    role="img"
                    aria-label="Professional business handshake and partnership trust"
                  />
                  <div className="absolute inset-0 bg-[#0B0F14]/30 pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Trusted by <span className="text-slate-300 font-medium">finance firms across Australia &amp; the USA.</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Mortgage brokers, insurance brokerages &amp; CPA practices.
                  </p>
                </div>
              </div>

              {/* Card 3: Big Stat Card */}
              <div className="sm:col-span-5 bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-teal/40 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-[#0B0F14] border border-[#222A38] px-2.5 py-1 rounded-full">
                    SLA Benchmark
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0B0F14] border border-[#222A38] flex items-center justify-center">
                    <Award className="w-4 h-4 text-teal" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-1">
                    99.8%
                  </div>
                  <p className="text-xs font-semibold text-slate-200">
                    Audit compliance rate
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Zero-error benchmark across lodgements and reconciliations.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222A38] flex items-center justify-between text-[11px] font-semibold text-white">
                  <span>Start small</span>
                  <span className="text-teal font-bold">No lock-in pilot →</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Wide Card */}
            <div className="bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-9 transition-all duration-300 hover:shadow-2xl hover:border-teal/40 relative overflow-hidden group grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal uppercase tracking-wider mb-2">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Empowers Growth</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2 sm:mb-3">
                  Elevates team focus and <span className="text-slate-300 font-medium">transforms your operational capacity.</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Take the detail-heavy routine work off your plate so your brokers and advisors spend 100% of their energy advising clients and writing business.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-200">
                  <span>✓ Named Account Lead</span>
                  <span>✓ Secure NDAs</span>
                </div>
              </div>

              {/* Right Portrait Image in the wide card */}
              <div className="md:col-span-5 h-40 sm:h-52 rounded-[18px] sm:rounded-[22px] overflow-hidden relative border border-[#222A38] bg-[#0B0F14]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80')`,
                  }}
                  role="img"
                  aria-label="Happy finance operations director working with Meridex support"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/50 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>

        {/* Micro-Benefits strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="bg-[#151A22] border border-[#222A38] rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0">
              <Rocket className="w-4 h-4 text-teal" />
            </div>
            <div className="text-xs font-bold text-white truncate">Start with a Pilot</div>
          </div>
          <div className="bg-[#151A22] border border-[#222A38] rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 text-teal" />
            </div>
            <div className="text-xs font-bold text-white truncate">Clear Communication</div>
          </div>
          <div className="bg-[#151A22] border border-[#222A38] rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4 text-teal" />
            </div>
            <div className="text-xs font-bold text-white truncate">Confidential Handling</div>
          </div>
          <div className="bg-[#151A22] border border-[#222A38] rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0">
              <Sliders className="w-4 h-4 text-teal" />
            </div>
            <div className="text-xs font-bold text-white truncate">Flexible Scope</div>
          </div>
        </div>

      </div>
    </section>
  );
}
