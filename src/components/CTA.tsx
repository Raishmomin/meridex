'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Rocket, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#0B0F14] py-16 sm:py-24 border-t border-[#222A38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Container echoing the international modern aesthetic */}
        <div className="relative rounded-[24px] sm:rounded-[36px] bg-[#151A22] overflow-hidden p-6 sm:p-14 lg:p-20 text-center shadow-2xl border border-[#222A38] w-full">
          
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-teal-light text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 max-w-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Low-Risk Exploration · Australia &amp; USA Ready</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
              Let&apos;s take the detailed work off your plate.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg text-grey-300 max-w-2xl mx-auto leading-relaxed">
              Tell us the task that eats up most of your week. We&apos;ll suggest a small pilot that fits your business.
            </p>

            {/* Pill Button Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all duration-200"
              >
                Request a Pilot Quote
              </Link>
            </div>

            {/* Reassurance Row */}
            <div className="mt-12 pt-8 border-t border-[#222A38] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-grey-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>No lock-in or minimum term</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-teal" />
                <span>Start with a small pilot</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
