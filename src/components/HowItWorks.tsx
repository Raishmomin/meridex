'use client';

import React, { useState } from 'react';
import {
  Phone,
  FileText,
  Lock,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Check,
} from 'lucide-react';

interface Step {
  number: string;
  title: string;
  shortDesc: string;
  tag: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  keyHighlight: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery Call',
    shortDesc: 'We understand your tasks, tools, volume, and deadlines.',
    tag: '30-Min Consultation',
    duration: 'Day 1',
    icon: Phone,
    deliverables: [
      'Task volume and backlog audit',
      'Software & CRM stack review',
      'Turnaround SLA definition',
    ],
    keyHighlight: 'Zero sales pressure — just workflow clarity and feasibility confirmation.',
  },
  {
    number: '02',
    title: 'Pilot Proposal',
    shortDesc: 'You receive a clear scope, deliverables, timeline, and price.',
    tag: 'Transparent Scope',
    duration: 'Day 2–3',
    icon: FileText,
    deliverables: [
      'Itemized pilot scope document',
      'Fixed-price pilot quote (no surprises)',
      'Named lead specialist assigned',
    ],
    keyHighlight: 'Transparent deliverables with clear success metrics agreed up-front.',
  },
  {
    number: '03',
    title: 'Secure Onboarding',
    shortDesc: 'We set up access, templates, SOPs, and communication channels.',
    tag: 'Encrypted Access',
    duration: 'Day 4–5',
    icon: Lock,
    deliverables: [
      'Role-based restricted tool logins',
      'Firm NDA & data handling policy signed',
      'Dedicated Slack/Teams or email bridge',
    ],
    keyHighlight: 'Bank-grade credentials management with least-privilege security.',
  },
  {
    number: '04',
    title: 'Pilot Delivery',
    shortDesc: 'We complete the work with a mandatory second-level review.',
    tag: 'Dual-Review QA',
    duration: 'Weeks 1–3',
    icon: CheckCircle2,
    deliverables: [
      '100% pre-delivery peer audit',
      'Daily or weekly progress logs',
      'Direct feedback loop for real-time tweaks',
    ],
    keyHighlight: 'Every file checked by a senior specialist before you ever see it.',
  },
  {
    number: '05',
    title: 'Review & Scale',
    shortDesc: 'Continue, adjust the scope, or stop. Zero lock-in contracts.',
    tag: 'Zero Obligation',
    duration: 'Week 4+',
    icon: TrendingUp,
    deliverables: [
      'Pilot quality & speed review report',
      'Flexible scope expansion or adjustment',
      'Option to scale up pod or pause anytime',
    ],
    keyHighlight: 'Scale only when the work has earned its place. Walk away if not delighted.',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4">
            PREDICTABLE &amp; LOW RISK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight leading-tight">
            How We Work
          </h2>
          <p className="mt-3 text-grey-600 text-base sm:text-lg">
            Start small, judge us on results, and scale only when the work has earned its place.
          </p>
        </div>

        {/* Interactive Step Navigator Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const Icon = step.icon;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-[22px] border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-navy text-white border-navy shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-[#EFECE6] text-grey-700 border-[#E5E1D8]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black tracking-wider ${
                      isSelected ? 'text-teal-light' : 'text-grey-400'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-[#EFECE6] text-navy'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`font-bold text-sm tracking-tight leading-snug ${
                      isSelected ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <span
                    className={`text-[11px] block mt-0.5 ${
                      isSelected ? 'text-grey-300' : 'text-grey-500'
                    }`}
                  >
                    {step.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Step Spotlight Card (The Upgrade) */}
        <div className="bg-white border border-[#E5E1D8] rounded-[32px] p-7 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Step Highlights & Deliverables */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-navy text-white flex items-center justify-center font-bold text-sm">
                {current.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal bg-[#EFECE6] px-3 py-1 rounded-full border border-[#E5E1D8]">
                {current.tag} · {current.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-3">
              {current.title}
            </h3>

            <p className="text-base text-grey-600 leading-relaxed mb-6">
              {current.shortDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="bg-[#F7F5F0] border border-[#E5E1D8] rounded-2xl p-5 mb-6">
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                Key Deliverables in this stage:
              </h4>
              <ul className="space-y-2.5">
                {current.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-grey-800">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Golden Assurance Note */}
            <div className="flex items-start gap-3 text-xs sm:text-sm text-grey-700 bg-[#EFECE6]/70 border border-[#DDD8CD] rounded-xl p-3.5">
              <Sparkles className="w-4 h-4 text-teal shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                <span className="font-bold text-navy">Why it works:</span> {current.keyHighlight}
              </p>
            </div>
          </div>

          {/* Right Side: Step Visual Card with Interactive Metric Indicators */}
          <div className="lg:col-span-5 bg-[#EFECE6] border border-[#E5E1D8] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD8CD]">
                <div className="flex items-center gap-2.5">
                  <CurrentIcon className="w-5 h-5 text-teal" />
                  <span className="text-xs font-bold text-navy">Workflow Stage Verification</span>
                </div>
                <span className="text-[10px] font-bold bg-white text-navy px-2.5 py-0.5 rounded-full border border-[#DDD8CD]">
                  Stage {current.number} / 05
                </span>
              </div>

              {/* Step Flow Preview Timeline */}
              <div className="space-y-3 mb-6">
                {steps.map((s, idx) => (
                  <div
                    key={s.number}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                      idx === activeStep
                        ? 'bg-white font-bold text-navy shadow-xs border border-[#DDD8CD]'
                        : idx < activeStep
                        ? 'text-emerald-700 font-medium'
                        : 'text-grey-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#DDD8CD]/50">
                        {idx < activeStep ? '✓' : s.number}
                      </span>
                      <span>{s.title}</span>
                    </div>
                    <span className="text-[10px]">
                      {idx === activeStep ? 'In Focus' : idx < activeStep ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-[#DDD8CD]">
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-navy hover:bg-navy-light text-white font-semibold text-xs transition-all shadow-sm"
              >
                <span>Initiate Step 01 Discovery</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-light" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
