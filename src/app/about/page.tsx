import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Lock,
  SlidersHorizontal,
  Compass,
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
    title: 'Start small.',
    desc: 'A defined pilot, with no lock-in.',
    icon: Rocket,
  },
  {
    title: 'Checked work.',
    desc: 'Each file goes through a second-level review before delivery.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear communication.',
    desc: 'A named point of contact and regular updates.',
    icon: MessageSquare,
  },
  {
    title: 'Confidential handling.',
    desc: 'Client data is treated with strict care and access controls.',
    icon: Lock,
  },
  {
    title: 'Flexible scope.',
    desc: 'You choose which tasks to hand over, and we scale up as trust grows.',
    icon: SlidersHorizontal,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0B0F14] min-h-screen">
        
        {/* SECTION 1: ABOUT US */}
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#222A38]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-400 mb-6">
              ABOUT MERIDEX
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              About Us
            </h1>

            <div className="space-y-6 text-base sm:text-xl text-grey-300 leading-relaxed font-normal">
              <p>
                Meridex is an outsourcing partner for businesses that want their admin and finance work handled reliably, so they can spend their time on clients and growth.
              </p>
              
              <p className="text-grey-400 text-sm sm:text-lg">
                We take on the detailed, recurring work that keeps a business running: document collection and checking, application preparation, bookkeeping, accounting support and tax return preparation. We work with clients in Australia, the US and the UK.
              </p>
            </div>

            {/* Coverage badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 sm:pt-8 text-xs font-semibold text-white">
              <span className="px-3 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] shadow-md inline-flex items-center gap-1.5">
                <span>🇦🇺</span> Australia
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] shadow-md inline-flex items-center gap-1.5">
                <span>🇺🇸</span> United States
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] shadow-md inline-flex items-center gap-1.5">
                <span>🇬🇧</span> United Kingdom
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY MERIDEX */}
        <section className="py-16 sm:py-24 bg-[#0E1217] border-b border-[#222A38]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-400 mb-4">
              NAME &amp; ETHOS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Why Meridex
            </h2>
            
            <p className="text-base sm:text-lg text-grey-400 mb-10">
              The name comes from two words, merit and dexterity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Merit Card */}
              <div className="bg-[#151A22] border border-[#222A38] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0F14] border border-[#222A38] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                    M
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Merit
                  </h3>
                  <p className="text-sm sm:text-base text-grey-300 leading-relaxed">
                    Merit is how we earn work. We start with a small pilot, you judge us on the results, and we continue only when the work has earned its place.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#222A38] text-xs font-semibold text-teal flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>How We Earn Work</span>
                </div>
              </div>

              {/* Dexterity Card */}
              <div className="bg-[#151A22] border border-[#222A38] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs">
                    D
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Dexterity
                  </h3>
                  <p className="text-sm sm:text-base text-grey-300 leading-relaxed">
                    Dexterity is how we keep it. Every task gets careful, precise handling, and every file is reviewed before it comes back to you.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#222A38] text-xs font-semibold text-teal flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>How We Keep It</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: HOW WE WORK */}
        <section className="py-16 sm:py-24 bg-[#0B0F14] border-b border-[#222A38]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-400 mb-4">
              PRINCIPLES IN PRACTICE
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
              How we work
            </h2>

            <div className="space-y-4">
              {howWeWorkItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[#151A22] border border-[#222A38] rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-md hover:border-teal/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0B0F14] border border-[#222A38] flex items-center justify-center shrink-0 text-teal mt-0.5">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}{' '}
                        <span className="font-normal text-grey-300 ml-1">
                          {item.desc}
                        </span>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 4: LET'S TALK */}
        <section className="py-16 sm:py-24 bg-[#0E1217]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#151A22] overflow-hidden p-8 sm:p-12 lg:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl border border-[#222A38]">
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-teal-light block mb-2">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  Let&apos;s talk
                </h2>
                <p className="text-sm sm:text-base text-grey-300 leading-relaxed">
                  If you&apos;d like to see how this would work for your business, get in touch. A short conversation, and then a small pilot, is the best way to judge us on merit.
                </p>
              </div>

              <div className="relative z-10 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
