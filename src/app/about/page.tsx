import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe,
  ArrowRight,
  Target,
  Sparkles,
  Lock,
  Workflow,
  HeartHandshake,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Meridex | Detailed Work. Delivered with Care.',
  description:
    'Learn how Meridex was founded, the meaning behind Merit and Dexterity, and our commitment to helping finance and advisory practices scale with precision.',
};

const principles = [
  {
    title: 'Precision Over Speed',
    description:
      'Fast work with errors is negative work. We value rigorous double-checking, clean working papers, and review-ready deliverables.',
    icon: Target,
  },
  {
    title: 'Work Inside Your Systems',
    description:
      'We work inside the platforms you already use, under access you control, and only the people assigned to your work can see your data.',
    icon: Lock,
  },
  {
    title: 'No Forced Migrations',
    description:
      'You should not have to change your software or retrain your team. We adapt seamlessly to your CRM, accounting software, and internal SOPs.',
    icon: Workflow,
  },
  {
    title: 'Earned Partnerships',
    description:
      'No multi-month lock-in contracts. We start with a clearly scoped pilot so you can judge our quality and turnaround with zero risk.',
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F5F0] min-h-screen">
        
        {/* HERO SECTION */}
        <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4 sm:mb-6">
                OUR STORY &amp; ETHOS
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-navy tracking-tight leading-[1.15]">
                Detailed work. <br />
                <span className="text-grey-500 font-medium">Delivered with care.</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-grey-600 leading-relaxed max-w-2xl">
                Meridex was formed to solve a universal bottleneck: finance professionals, mortgage brokers, and advisory leaders spending their best hours buried in repetitive document chasing, reconciliations, and lodgement admin.
              </p>
            </div>

            {/* Visual Bento Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 sm:mt-14 w-full">
              <div className="lg:col-span-7 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#EAE7DF] border border-[#DDD8CD] relative min-h-[280px] sm:min-h-[380px] shadow-sm flex items-end">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  role="img"
                  aria-label="Modern organized financial operations office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold mb-2.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-light" />
                    <span>The Meridex Approach</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                    Where high standards meet operational adaptability.
                  </h2>
                  <p className="text-xs sm:text-sm text-grey-200 mt-2 max-w-lg leading-relaxed">
                    We step in as your reliable back-office support, handling file preparation, bookkeeping, and administrative workflows with accuracy and discretion.
                  </p>
                </div>
              </div>

              {/* Working Model Card Right */}
              <div className="lg:col-span-5 bg-[#EFECE6] border border-[#E5E1D8] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-navy text-white flex items-center justify-center font-bold text-base mb-5 shadow-xs">
                    M
                  </div>
                  <h3 className="text-xl font-bold text-navy leading-snug">
                    Dedicated support built for real advisory workflows.
                  </h3>
                  <p className="text-xs sm:text-sm text-grey-600 mt-3 leading-relaxed">
                    We don&apos;t do generic data entry. We specialize in the specific tasks that slow down Australian and US mortgage brokers, accountants, and finance teams.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DDD8CD] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span>Second-level review before any deliverable reaches you</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span>Australia &amp; USA active support · UK launching Q3</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span>Zero long-term lock-in · Turnaround agreed upfront</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* THE MEANING BEHIND MERIDEX SECTION */}
        <section className="py-16 sm:py-24 bg-white border-y border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                THE MERIDEX NAME
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-2">
                Why Meridex?
              </h2>
              <p className="mt-3 text-grey-600 text-sm sm:text-base leading-relaxed">
                The name reflects the two foundational attributes of exceptional back-office partnership:
              </p>
              <div className="mt-5 p-4 rounded-2xl bg-[#F7F5F0] border border-[#E5E1D8] inline-block">
                <p className="text-base sm:text-lg font-bold text-navy italic">
                  &ldquo;Merit is how we earn work. Dexterity is how we keep it.&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* MERIT */}
              <div className="rounded-[26px] bg-[#F7F5F0] border border-[#E5E1D8] p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDD8CD] flex items-center justify-center text-navy mb-6 shadow-xs">
                    <Award className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal block mb-1">
                    Attribute 01
                  </span>
                  <h3 className="text-2xl font-bold text-navy tracking-tight mb-3">
                    Merit
                  </h3>
                  <p className="text-xs sm:text-sm text-grey-600 leading-relaxed mb-4">
                    High standards and checked accuracy on every single file. We believe work is earned through demonstrable competence and consistent follow-through, not sales promises.
                  </p>
                  <ul className="space-y-2 text-xs text-grey-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Every deliverable checked before submission</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Consistent turnaround and clear expectations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Accountability on every line item</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DEXTERITY */}
              <div className="rounded-[26px] bg-[#F7F5F0] border border-[#E5E1D8] p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDD8CD] flex items-center justify-center text-navy mb-6 shadow-xs">
                    <Workflow className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal block mb-1">
                    Attribute 02
                  </span>
                  <h3 className="text-2xl font-bold text-navy tracking-tight mb-3">
                    Dexterity
                  </h3>
                  <p className="text-xs sm:text-sm text-grey-600 leading-relaxed mb-4">
                    The operational agility to plug directly into your software tools, aggregator rules, and bespoke internal SOPs without disrupting your firm&apos;s rhythm.
                  </p>
                  <ul className="space-y-2 text-xs text-grey-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Zero forced platform migrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Adaptable to bespoke tools and templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>Flexible scaling as your volume shifts</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* GUIDING PRINCIPLES SECTION */}
        <section className="py-16 sm:py-24 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                HOW WE OPERATE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-2">
                Our Core Principles
              </h2>
              <p className="mt-3 text-grey-600 text-sm sm:text-base">
                Clear expectations, honest commitments, and respectful data handling on every task.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-white border border-[#E5E1D8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-md"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#E5E1D8] flex items-center justify-center text-navy mb-5 shadow-xs">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-navy tracking-tight mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-grey-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Discovery Call Banner */}
            <div className="mt-14 sm:mt-18 bg-navy text-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-navy-light">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Ready to test our work?</h3>
                <p className="text-xs sm:text-sm text-grey-300 mt-1 max-w-xl leading-relaxed">
                  Start with a scoped pilot project with zero lock-in contract. Experience the relief of reliable support.
                </p>
              </div>
              <Link
                href="/contact"
                className="whitespace-nowrap px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-md shrink-0"
              >
                Book a Discovery Call
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
