'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

interface QualityItem {
  id: string;
  title: string;
  category: string;
}

const qualityGuarantees: QualityItem[] = [
  {
    id: '1',
    title: 'Second-level review on every file',
    category: 'Quality Assurance',
  },
  {
    id: '2',
    title: 'Strict client data access controls',
    category: 'Confidentiality',
  },
  {
    id: '3',
    title: 'Named point of contact & regular updates',
    category: 'Direct Communication',
  },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean International Typography & Mobile-Friendly Pill Input */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-5 sm:space-y-7 w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-white text-[11px] sm:text-xs font-semibold tracking-wide max-w-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal shrink-0 animate-pulse" />
              <span className="truncate">Australia &amp; USA · UK Launching 2027</span>
            </div>

            {/* H1 Headline - Guaranteed 3-line layout avoiding dangling 4th line */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.18] tracking-tight break-words w-full max-w-xl">
              Empower your business with <br className="hidden sm:inline" />
              <span className="text-teal">reliable</span> and <span className="text-teal">efficient</span> <br className="hidden sm:inline" />
              administrative support.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Meridex Solutions supports mortgage brokers, insurance brokers, accountants and finance firms
              with accurate documents maintenance, bookkeeping, tax and payroll support—so you can focus on clients
              and growth.
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
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-6 py-3 rounded-xl sm:rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-sm transition-all duration-200 shadow-sm shrink-0 w-full sm:w-auto"
                >
                  <span>Book Call</span>
                  <ArrowRight className="w-4 h-4" />
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
              
              {/* Main Visual Frame */}
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#151A22] border border-[#222A38] shadow-2xl aspect-[4/3.2] sm:aspect-[4/3.4] lg:aspect-[4/3.5] flex items-end justify-center w-full">
                
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
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-2 lg:-right-4 z-20 bg-[#151A22]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-[#222A38] w-full sm:max-w-[280px]">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-[#222A38]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal" />
                    <span className="text-xs font-bold text-white">Quality Standards</span>
                  </div>
                  <span className="text-[9px] font-bold bg-[#0B0F14] text-teal-light border border-[#222A38] px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>

                <div className="space-y-2.5">
                  {qualityGuarantees.map((item) => (
                    <div key={item.id} className="flex items-start text-xs gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-semibold block text-[11px] leading-tight">{item.title}</span>
                        <span className="text-[10px] text-slate-300 block">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#222A38] flex items-center justify-between">
                  <span className="text-[10px] text-slate-300 font-medium">Review Standard</span>
                  <span className="text-[10px] font-bold text-teal flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Checked
                  </span>
                </div>
              </div>

              {/* Floating Pill Top Left - Safe on mobile */}
              <div className="hidden sm:flex animate-float-delay absolute -top-4 -left-3 z-20 bg-[#151A22]/95 backdrop-blur-md px-3.5 py-2 rounded-full items-center gap-2 shadow-xl border border-[#222A38]">
                <div className="w-5 h-5 rounded-full bg-[#0B0F14] border border-[#222A38] flex items-center justify-center text-white">
                  <UserCheck className="w-3 h-3 text-teal-light" />
                </div>
                <span className="text-[11px] font-semibold text-white">Named Point of Contact</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
