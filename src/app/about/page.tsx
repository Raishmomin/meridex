import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Rocket,
  MessageSquare,
  Lock,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Meridex Solutions',
  description:
    'Meridex is an outsourcing partner for businesses that want their admin and finance work handled reliably, so they can spend their time on clients and growth.',
  openGraph: {
    title: 'About Us | Meridex Solutions',
    description:
      'Where merit meets dexterity. Supporting finance and advisory practices across Australia, the US and the UK.',
  },
};

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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0F14] min-h-screen py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {/* SECTION 1: ABOUT US */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[11px] font-bold uppercase tracking-widest text-slate-300">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>ABOUT MERIDEX SOLUTIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              About Us
            </h1>

            <p className="text-lg sm:text-2xl text-slate-100 leading-relaxed font-normal">
              Meridex is an outsourcing partner for businesses that want their admin and finance work handled reliably, so they can spend their time on clients and growth.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We take on the detailed, recurring work that keeps a business running: document collection and checking, application preparation, bookkeeping, accounting support and tax return preparation. We work with clients in Australia, the US and the UK.
            </p>

            {/* Jurisdiction Coverage Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Australia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                United States
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                United Kingdom (Launching 2027)
              </span>
            </div>
          </section>

          {/* SECTION 2: WHY MERIDEX */}
          <section className="space-y-6 pt-12 border-t border-[#222A38]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] font-bold uppercase tracking-wider text-teal mb-3">
                OUR PHILOSOPHY
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Why Meridex
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-300 leading-relaxed">
                The name comes from two words, <span className="text-teal font-semibold">merit</span> and <span className="text-teal font-semibold">dexterity</span>.
              </p>
            </div>

            {/* Bespoke Meaning Cards: Distinctive, Premium Duo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* MERIT BOX */}
              <div className="relative rounded-[28px] p-7 sm:p-8 bg-gradient-to-br from-[#101A26] via-[#151E2B] to-[#0D131C] border border-teal/40 shadow-xl overflow-hidden group hover:border-teal/70 transition-all">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-[11px] font-black tracking-widest uppercase text-teal">
                        <Award className="w-3.5 h-3.5" />
                        MERIT
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Earning Trust</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      How we earn work.
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      We start with a small pilot, you judge us on the results, and we continue only when the work has earned its place.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#222A38]/70 flex items-center gap-2 text-xs font-medium text-teal">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span>No lock-in · Judged purely on results</span>
                  </div>
                </div>
              </div>

              {/* DEXTERITY BOX */}
              <div className="relative rounded-[28px] p-7 sm:p-8 bg-gradient-to-br from-[#141B2D] via-[#172036] to-[#0D131C] border border-blue-500/40 shadow-xl overflow-hidden group hover:border-blue-400/70 transition-all">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] font-black tracking-widest uppercase text-blue-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        DEXTERITY
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Operational Precision</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      How we keep it.
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Every task gets careful, precise handling, and every file is reviewed before it comes back to you.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#222A38]/70 flex items-center gap-2 text-xs font-medium text-blue-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Second-level review on every single file</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 3: HOW WE WORK */}
          <section className="space-y-6 pt-12 border-t border-[#222A38]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] font-bold uppercase tracking-wider text-teal mb-3">
                OPERATIONAL PRINCIPLES
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                How we work
              </h2>
            </div>

            {/* 5 Process Cards */}
            <div className="grid grid-cols-1 gap-3.5">
              {howWeWorkItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-5 sm:p-6 rounded-2xl bg-[#151A22] border border-[#222A38] hover:border-teal/40 transition-all flex items-start gap-4 shadow-sm group"
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
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.title}{' '}
                        <span className="text-slate-300 font-normal text-sm sm:text-base ml-1">
                          {item.desc}
                        </span>
                      </h3>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-teal/40 group-hover:text-teal shrink-0 mt-1 transition-colors hidden sm:block" />
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 4: LET'S TALK */}
          <section className="pt-12 border-t border-[#222A38]">
            <div className="relative bg-gradient-to-br from-[#151A22] via-[#11151C] to-[#0B0F14] border border-[#222A38] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-[10px] font-bold uppercase tracking-wider text-teal">
                  ZERO LOCK-IN PILOT
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Let&apos;s talk
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  If you&apos;d like to see how this would work for your business, get in touch. A short conversation, and then a small pilot, is the best way to judge us on merit.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
