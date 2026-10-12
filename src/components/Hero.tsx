'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Lock,
  Clock,
  Sparkles,
} from 'lucide-react';

interface StatusItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress';
  category: string;
  time: string;
}

const statusItems: StatusItem[] = [
  {
    id: '1',
    title: 'Application prepared',
    status: 'completed',
    category: 'Loan Processing',
    time: '10m ago',
  },
  {
    id: '2',
    title: 'Documents verified',
    status: 'completed',
    category: 'Compliance & KYC',
    time: '25m ago',
  },
  {
    id: '3',
    title: 'Bank reconciliation completed',
    status: 'completed',
    category: 'Bookkeeping',
    time: '1h ago',
  },
  {
    id: '4',
    title: 'Payroll ready for review',
    status: 'in-progress',
    category: 'Payroll Services',
    time: 'In review',
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
      className="relative bg-[#F7F5F0] pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clean International Typography & Pill Input */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-navy text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>Australia &amp; USA · UK Coming Soon</span>
            </div>

            {/* H1 Headline - Large modern clean title matching reference layout */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-navy leading-[1.12] tracking-tight">
              Outsource the admin and finance work slowing your business down.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-grey-600 leading-relaxed max-w-xl">
              Meridex supports mortgage brokers, insurance brokers, accountants and finance firms
              with accurate document, bookkeeping, tax and payroll support—so you can focus on clients
              and growth.
            </p>

            {/* High-conversion Input & Action Pill Group (Mirroring reference style) */}
            <div className="w-full max-w-md pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    window.location.href = `/contact?email=${encodeURIComponent(email)}`;
                  }
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#EFECE6]/80 p-1.5 rounded-full border border-[#E5E1D8] shadow-inner focus-within:border-navy/40 transition-all gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  aria-label="Your work email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-navy placeholder-grey-400 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-6 py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow"
                >
                  <span>Book Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Secondary CTA Quick Links */}
              <div className="flex items-center gap-4 mt-3 pl-2">
                <a
                  href="/#services"
                  className="text-xs font-medium text-grey-600 hover:text-navy underline underline-offset-4 decoration-grey-300"
                >
                  Explore 5 Specialist Services →
                </a>
                <span className="text-grey-300">·</span>
                <a
                  href="/#how-it-works"
                  className="text-xs font-medium text-grey-600 hover:text-navy underline underline-offset-4 decoration-grey-300"
                >
                  How the Pilot works
                </a>
              </div>
            </div>

            {/* Micro-trust line */}
            <div className="pt-3 border-t border-[#E5E1D8] w-full max-w-xl">
              <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs font-medium text-grey-600">
                {trustPoints.map((point) => (
                  <div key={point} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Large Rounded Frame + Floating Analytic Cards */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual Frame (Refined large rounded card matching reference girl/laptop hero photo style) */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#EAE7DF] border border-[#DDD8CD] shadow-xl aspect-[4/3.8] sm:aspect-[4/3.4] lg:aspect-[4/3.5] flex items-end justify-center">
                
                {/* Clean Professional B2B Photo placeholder with international studio aesthetic */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  role="img"
                  aria-label="Dedicated finance and admin operations professional"
                />

                {/* Subtle soft gradient scrim to integrate seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Analytic Mini Card pinned over the photo bottom left - EXACTLY matching reference chart badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/60 max-w-[210px] hidden sm:block animate-float">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] font-semibold text-grey-500 uppercase tracking-wider">Turnaround</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      99.8% SLA
                    </span>
                  </div>
                  {/* Stylized trend sparkline like the reference graph */}
                  <div className="h-8 flex items-end gap-1.5 pt-1">
                    <div className="w-2.5 bg-grey-100 rounded-t h-4" />
                    <div className="w-2.5 bg-grey-200 rounded-t h-6" />
                    <div className="w-2.5 bg-teal/40 rounded-t h-5" />
                    <div className="w-2.5 bg-teal/60 rounded-t h-7" />
                    <div className="w-2.5 bg-teal rounded-t h-8" />
                    <div className="w-2.5 bg-blue-500 rounded-t h-8" />
                  </div>
                  <p className="text-[10px] text-grey-500 mt-2 font-medium">Reconciled &amp; verified files</p>
                </div>
              </div>

              {/* Floating Status / Operational Overlay Card (Right side) */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 absolute -bottom-8 -right-2 sm:-right-4 z-30 max-w-[260px] sm:max-w-[280px] shadow-2xl border border-white/90">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-grey-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-navy">Live Queue</span>
                  </div>
                  <span className="text-[10px] font-medium bg-[#EFECE6] text-grey-600 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>

                <div className="space-y-2.5">
                  {statusItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-grey-700 font-medium truncate text-[11px]">{item.title}</span>
                      </div>
                      <span className="text-[10px] text-grey-400 shrink-0 ml-1">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-grey-100 flex items-center justify-between">
                  <span className="text-[11px] text-grey-500 font-medium">Second-Level Review</span>
                  <span className="text-[11px] font-bold text-teal flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Passed
                  </span>
                </div>
              </div>

              {/* Floating Pill Top Left */}
              <div className="animate-float-delay absolute -top-4 -left-3 sm:-left-6 z-20 glass-card px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-md">
                <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-white">
                  <UserCheck className="w-3.5 h-3.5 text-teal-light" />
                </div>
                <span className="text-xs font-semibold text-navy">Named Point of Contact</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
