'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

const qualityGuarantees = [
  'Second-level review on every file',
  'Strict client data access controls',
  'Named point of contact & regular updates',
];

const trustPoints = [
  'Start with a small pilot',
  'No lock-in',
  'Reviewed work',
  'Secure handling',
];

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section
      id="hero"
      className="relative bg-[#0B0F14] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Clean International Typography & Mobile-Friendly Pill Input */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-5 sm:space-y-6 w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-white text-[11px] sm:text-xs font-semibold tracking-wide max-w-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal shrink-0 animate-pulse" />
              <span className="truncate">Australia &amp; USA · UK Launching 2027</span>
            </div>

            {/* H1 Headline - Strictly 3 lines across mobile, tablet and desktop viewports without dot */}
            <h1 className="text-[21px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-white leading-[1.2] tracking-tight w-full max-w-xl">
              <span className="block whitespace-nowrap">Empower your business with</span>
              <span className="block whitespace-nowrap"><span className="text-teal">reliable</span> and <span className="text-teal">efficient</span></span>
              <span className="block whitespace-nowrap">administrative support</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              Meridex Solutions supports mortgage brokers, accountants and finance firms with detail-heavy admin and finance work including document collection and verification, lodgement support, bookkeeping, tax and payroll support—so you can focus on clients and growth.
            </p>

            {/* Mobile-Perfect Input & Action Pill Group */}
            <div className="w-full max-w-md pt-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    window.location.href = `/contact?email=${encodeURIComponent(email)}`;
                  }
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#151A22] p-1.5 rounded-2xl sm:rounded-full border border-[#222A38] shadow-inner focus-within:border-teal/50 transition-all gap-2 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email"
                  aria-label="Your work email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none rounded-xl sm:rounded-full"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-6 py-3 rounded-xl sm:rounded-full bg-teal/20 hover:bg-teal/30 text-teal-light hover:text-white border border-teal/40 hover:border-teal/60 font-semibold text-sm transition-all duration-200 shadow-sm shrink-0 w-full sm:w-auto"
                >
                  <span>Book Call</span>
                  <ArrowRight className="w-4 h-4 text-teal-light" />
                </button>
              </form>

              {/* Secondary CTA Quick Links */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3 px-1 text-xs font-medium text-slate-300">
                <a
                  href="/#services"
                  className="hover:text-white underline underline-offset-4 decoration-slate-600"
                >
                  Explore Services →
                </a>
                <span className="text-slate-500">·</span>
                <a
                  href="/#how-it-works"
                  className="hover:text-white underline underline-offset-4 decoration-slate-600"
                >
                  How the Pilot Works
                </a>
              </div>
            </div>

            {/* Micro-trust line */}
            <div className="pt-4 border-t border-[#222A38] w-full max-w-xl">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-x-5 sm:gap-y-2.5 text-xs font-medium text-slate-200">
                {trustPoints.map((point) => (
                  <div key={point} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span className="truncate">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Responsive Rounded Frame */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full pt-4 sm:pt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
              
              {/* Main Visual Frame - Full Size and Dimensions */}
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#151A22] border border-[#222A38] shadow-2xl aspect-[4/3.2] sm:aspect-[4/3.4] lg:aspect-[4/3.2] flex items-end justify-center w-full">
                
                {/* Professional Modern Workplace Photo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  role="img"
                  aria-label="Modern organized financial operations workspace"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/30 to-transparent pointer-events-none" />

                {/* Floating Pilot Guarantee Card (Desktop/Tablet) */}
                <div className="absolute bottom-4 left-4 z-20 bg-[#151A22]/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-[#222A38] max-w-[210px] hidden sm:block animate-float">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Start Small</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-teal/20 text-teal-light text-[9px] font-bold">
                      No Lock-in
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug font-medium">
                    A defined pilot so you can judge us on merit.
                  </p>
                </div>
              </div>

              {/* Quality Standards Overlay Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 z-20 bg-[#151A22]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#222A38] w-full sm:max-w-[290px]">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#222A38]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal" />
                    <span className="text-sm sm:text-base font-bold text-white">Quality Standards</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#0B0F14] text-teal-light border border-[#222A38] px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>

                <div className="space-y-2.5">
                  {qualityGuarantees.map((title, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-[13px] gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span className="text-white font-medium leading-snug">{title}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
