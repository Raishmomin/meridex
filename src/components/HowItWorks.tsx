'use client';

import React from 'react';
import Link from 'next/link';
import {
  Rocket,
  ShieldCheck,
  MessageSquare,
  Lock,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const howWeWorkItems = [
  {
    step: '01',
    title: 'Start small.',
    desc: 'A defined pilot, with no lock-in.',
    icon: Rocket,
  },
  {
    step: '02',
    title: 'Checked work.',
    desc: 'Each file goes through a second-level review before delivery.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Clear communication.',
    desc: 'A named point of contact and regular updates.',
    icon: MessageSquare,
  },
  {
    step: '04',
    title: 'Confidential handling.',
    desc: 'Client data is treated with strict care and access controls.',
    icon: Lock,
  },
  {
    step: '05',
    title: 'Flexible scope.',
    desc: 'You choose which tasks to hand over, and we scale up as trust grows.',
    icon: SlidersHorizontal,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#0B0F14] border-t border-[#222A38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-4">
            PROVEN OPERATING PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            How We Work
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Start small, judge us on results, and continue only when the work has earned its place.
          </p>
        </div>

        {/* 5 Process Cards matching image exactly */}
        <div className="grid grid-cols-1 gap-3.5 max-w-4xl mx-auto">
          {howWeWorkItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-5 sm:p-6 rounded-2xl bg-[#151A22] border border-[#222A38] hover:border-teal/40 transition-all flex items-center gap-4 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B0F14] border border-[#222A38] text-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black tracking-wider text-teal">
                      STEP {item.step}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg text-white tracking-tight">
                    <span className="font-bold">{item.title}</span>{' '}
                    <span className="text-slate-300 font-normal">
                      {item.desc}
                    </span>
                  </h3>
                </div>
                <CheckCircle2 className="w-5 h-5 text-teal/40 group-hover:text-teal shrink-0 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-12 sm:mt-14 max-w-6xl mx-auto bg-[#11151C] border border-[#222A38] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal block mb-1">
              Zero Lock-In
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to test us on merit? Start with a defined pilot.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              A short consultation, clear agreed scope, and then judged on results.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal/20 hover:bg-teal/30 text-teal-light hover:text-white border border-teal/40 hover:border-teal/60 text-xs sm:text-sm font-semibold transition-all shadow-sm shrink-0 w-full sm:w-auto"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-teal-light" />
          </Link>
        </div>

      </div>
    </section>
  );
}
