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

interface PrincipleItem {
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const principles: PrincipleItem[] = [
  {
    number: '01',
    title: 'Start small.',
    shortDesc: 'A defined pilot, with no lock-in.',
    detail: 'Test our precision on a single loan file, batch of reconciliations, or discrete workflow before committing to ongoing support.',
    icon: Rocket,
  },
  {
    number: '02',
    title: 'Checked work.',
    shortDesc: 'Each file goes through a second-level review before delivery.',
    detail: 'Every document pack, BAS workpaper, and lodgement is audited by a senior reviewer before it reaches your desk.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Clear communication.',
    shortDesc: 'A named point of contact and regular updates.',
    detail: 'Work directly with your designated specialist with clear communication channels, agreed turnaround times, and proactive status updates.',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Confidential handling.',
    shortDesc: 'Client data is treated with strict care and access controls.',
    detail: 'Role-based access, strict confidentiality agreements, and data handling protocols built around international data protection standards.',
    icon: Lock,
  },
  {
    number: '05',
    title: 'Flexible scope.',
    shortDesc: 'You choose which tasks to hand over, and we scale up as trust grows.',
    detail: 'Delegate the administrative bottlenecks slowing your firm down, and expand your support pod as your business scales.',
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

        {/* 5 Consistent Principle Cards (Uniform Sizing for Steps 1 through 5) */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-6xl mx-auto">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#151A22] border border-[#222A38] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-teal/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-wider text-teal">
                      STEP {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#0B0F14] border border-[#222A38] flex items-center justify-center text-teal shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                    {item.title}{' '}
                    <span className="text-slate-300 font-medium block text-base mt-0.5">
                      {item.shortDesc}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222A38] flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                  <span>Guaranteed on every file</span>
                </div>
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
