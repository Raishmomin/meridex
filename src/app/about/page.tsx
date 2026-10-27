import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';

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
    title: 'Start small.',
    desc: 'A defined pilot, with no lock-in.',
  },
  {
    title: 'Checked work.',
    desc: 'Each file goes through a second-level review before delivery.',
  },
  {
    title: 'Clear communication.',
    desc: 'A named point of contact and regular updates.',
  },
  {
    title: 'Confidential handling.',
    desc: 'Client data is treated with strict care and access controls.',
  },
  {
    title: 'Flexible scope.',
    desc: 'You choose which tasks to hand over, and we scale up as trust grows.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F5F0] min-h-screen py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          
          {/* 1. About Us */}
          <section className="space-y-5">
            <h1 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-grey-800 leading-relaxed">
              Meridex is an outsourcing partner for businesses that want their admin and finance work handled reliably, so they can spend their time on clients and growth.
            </p>
            <p className="text-base sm:text-lg text-grey-600 leading-relaxed">
              We take on the detailed, recurring work that keeps a business running: document collection and checking, application preparation, bookkeeping, accounting support and tax return preparation. We work with clients in Australia, the US and the UK.
            </p>
          </section>

          {/* 2. Why Meridex */}
          <section className="space-y-6 pt-10 border-t border-[#E5E1D8]">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-navy tracking-tight">
                Why Meridex
              </h2>
              <p className="mt-2 text-base sm:text-lg text-grey-700 leading-relaxed">
                The name comes from two words, <span className="text-teal font-semibold">merit</span> and <span className="text-teal font-semibold">dexterity</span>.
              </p>
            </div>

            {/* Bespoke Meaning Cards: Distinctive, Premium Duo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
              
              {/* MERIT BOX */}
              <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-[#EEF7F7] via-white to-[#F2F8F8] border border-teal/40 shadow-sm overflow-hidden group hover:border-teal/70 transition-all">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-[11px] font-black tracking-widest uppercase text-teal">
                        <Award className="w-3.5 h-3.5" />
                        MERIT
                      </span>
                      <span className="text-xs font-semibold text-grey-500">Earning Trust</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight mb-2">
                      How we earn work.
                    </h3>
                    <p className="text-sm sm:text-base text-grey-600 leading-relaxed font-normal">
                      We start with a small pilot, you judge us on the results, and we continue only when the work has earned its place.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#E5E1D8] flex items-center gap-2 text-xs font-medium text-teal">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span>No lock-in · Judged purely on results</span>
                  </div>
                </div>
              </div>

              {/* DEXTERITY BOX */}
              <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-[#EFF4FB] via-white to-[#F0F5FD] border border-blue-400/40 shadow-sm overflow-hidden group hover:border-blue-500/70 transition-all">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] font-black tracking-widest uppercase text-blue-600">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        DEXTERITY
                      </span>
                      <span className="text-xs font-semibold text-grey-500">Operational Precision</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight mb-2">
                      How we keep it.
                    </h3>
                    <p className="text-sm sm:text-base text-grey-600 leading-relaxed font-normal">
                      Every task gets careful, precise handling, and every file is reviewed before it comes back to you.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#E5E1D8] flex items-center gap-2 text-xs font-medium text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    <span>Second-level review on every single file</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 3. How we work */}
          <section className="space-y-5 pt-10 border-t border-[#E5E1D8]">
            <h2 className="text-2xl sm:text-4xl font-bold text-navy tracking-tight">
              How we work
            </h2>
            <ul className="space-y-3.5 text-base sm:text-lg text-grey-800">
              {howWeWorkItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal shrink-0 mt-2.5" />
                  <span>
                    <strong className="text-navy font-semibold">{item.title}</strong>{' '}
                    <span className="text-grey-600">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Let's talk */}
          <section className="pt-10 border-t border-[#E5E1D8]">
            <div className="bg-white border border-[#E5E1D8] rounded-3xl p-7 sm:p-10 shadow-sm space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                Let&apos;s talk
              </h2>
              <p className="text-base sm:text-lg text-grey-600 leading-relaxed">
                If you&apos;d like to see how this would work for your business, get in touch. A short conversation, and then a small pilot, is the best way to judge us on merit.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
