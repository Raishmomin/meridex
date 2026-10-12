import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotBubble from '@/components/ChatbotBubble';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Globe,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Lock,
  Building2,
  HeartHandshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Meridex | Detailed Work. Delivered with Care.',
  description:
    'Learn about Meridex, our founding story, dual-review quality philosophy, and how we empower finance and admin teams across Australia and the United States.',
};

const leadershipTeam = [
  {
    name: 'Marcus Vance',
    role: 'Co-Founder & Head of Operations',
    region: 'Sydney, Australia',
    flag: '🇦🇺',
    bio: 'Former mortgage aggregator operations director with 14+ years managing broker compliance, file packaging, and back-office scaling.',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Co-Founder & Head of Quality & QA',
    region: 'Melbourne, Australia',
    flag: '🇦🇺',
    bio: 'Chartered accountant and former Big-4 audit manager who designed the proprietary Meridex Second-Level Review methodology.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Julian Hayes',
    role: 'US Practice Director',
    region: 'Austin, Texas, USA',
    flag: '🇺🇸',
    bio: 'Specialist in US mortgage origination pipelines (Encompass/Calyx) and multi-entity QuickBooks close procedures.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
];

const coreValues = [
  {
    title: 'Precision Over Speed',
    description:
      'Fast work with errors is negative work. We value rigorous double-checking, clean working papers, and zero-defect deliveries.',
    icon: Target,
  },
  {
    title: 'Merit & Dexterity',
    description:
      'Merit is how we earn trust. Dexterity is how we adapt to your firm’s unique SOPs, aggregators, and software configurations.',
    icon: Award,
  },
  {
    title: 'Absolute Confidentiality',
    description:
      'Client data is treated with bank-grade security protocols, strict NDAs, and least-privilege access credentials.',
    icon: Lock,
  },
  {
    title: 'No Lock-In Philosophy',
    description:
      'We earn your partnership file-by-file. We do not trap clients in long-term commitments—quality is our retention mechanism.',
    icon: HeartHandshake,
  },
];

const timelineMilestones = [
  {
    year: '2022',
    title: 'Founded on Frustration',
    description:
      'Meridex was formed after seeing brokers and accountants lose 20+ hours a week to repetitive document chasing and file notes.',
  },
  {
    year: '2023',
    title: 'The Dual-Review Standard',
    description:
      'Institutionalized our mandatory second-level review process across all Australian mortgage lodgements and bookkeeping files.',
  },
  {
    year: '2024',
    title: 'US Expansion',
    description:
      'Expanded into the United States, supporting independent mortgage brokers with 1003 packaging and CPA firms with QuickBooks cleanups.',
  },
  {
    year: '2026',
    title: 'Over 75+ Active Firms',
    description:
      'Delivering audited accuracy daily across Australia and the USA, with UK support currently piloting.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F5F0] min-h-screen">
        
        {/* HERO SECTION */}
        <section className="pt-10 pb-16 sm:pt-20 sm:pb-28 overflow-hidden w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4 sm:mb-6 max-w-full truncate">
                OUR STORY &amp; ETHOS
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-navy tracking-tight leading-[1.15]">
                Detailed work. <br />
                <span className="text-grey-500 font-medium">Delivered with care.</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-grey-600 leading-relaxed max-w-2xl">
                Meridex was founded on a simple conviction: finance and advisory leaders should spend their days advising clients and growing their firms, not getting buried in repetitive file notes, reconciliations, and lodgement admin.
              </p>
            </div>

            {/* Visual Bento Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-10 sm:mt-14 w-full">
              <div className="lg:col-span-8 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#EAE7DF] border border-[#DDD8CD] relative min-h-[260px] sm:min-h-[420px] shadow-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  role="img"
                  aria-label="Meridex modern financial operations office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-transparent" />
                <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold mb-2 sm:mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-light" />
                    <span>The Meridex Standard</span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold leading-tight">
                    Where precision meets modern financial dexterity.
                  </h2>
                  <p className="text-[11px] sm:text-sm text-grey-200 mt-1 sm:mt-2 max-w-xl">
                    Every task we touch undergoes systematic calibration against your firm’s specific aggregators, software tools, and compliance guidelines.
                  </p>
                </div>
              </div>

              {/* Stats Card Right */}
              <div className="lg:col-span-4 bg-[#EFECE6] border border-[#E5E1D8] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xs">
                    M
                  </div>
                  <h3 className="text-xl font-bold text-navy leading-snug">
                    Built specifically for Australian &amp; US finance practices.
                  </h3>
                  <p className="text-xs sm:text-sm text-grey-600 mt-3 leading-relaxed">
                    We do not do generic data entry. Our teams are pre-trained on lender serviceability calculators, Xero/MYOB ledgers, and US 1003 mortgage structures.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DDD8CD] space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-grey-500">Dual-Level Audit Rate</span>
                    <span className="text-navy font-bold">100% of Files</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-grey-500">Pilot Retention Rate</span>
                    <span className="text-teal font-bold">96.4%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-grey-500">Geographic Hubs</span>
                    <span className="text-navy font-bold">🇦🇺 Australia · 🇺🇸 USA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-20 bg-white border-y border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                GUIDING PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-2">
                What sets our culture apart
              </h2>
              <p className="mt-3 text-grey-600 text-base">
                How we operate every day to ensure your back-office runs with absolute reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="bg-[#F7F5F0] border border-[#E5E1D8] rounded-[26px] p-7 flex flex-col justify-between transition-all hover:shadow-md hover:bg-[#EFECE6]"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E1D8] flex items-center justify-center text-navy mb-6 shadow-xs">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <h3 className="font-bold text-lg text-navy tracking-tight mb-2">
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
          </div>
        </section>

        {/* TIMELINE / JOURNEY SECTION */}
        <section className="py-20 lg:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-2">
                Built file-by-file with care
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {timelineMilestones.map((m) => (
                <div
                  key={m.year}
                  className="bg-[#EFECE6] border border-[#E5E1D8] rounded-[26px] p-7 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-3xl font-black text-navy/30 block mb-3">
                      {m.year}
                    </span>
                    <h3 className="font-bold text-lg text-navy mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-grey-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="py-20 bg-white border-t border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                EXPERIENCED OPERATORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-2">
                Leadership grounded in finance
              </h2>
              <p className="mt-3 text-grey-600 text-base">
                Our leaders bring deep domain expertise across loan origination, chartered accounting, and operational compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-[#F7F5F0] border border-[#E5E1D8] rounded-[28px] overflow-hidden flex flex-col justify-between transition-all hover:shadow-md"
                >
                  <div className="h-64 overflow-hidden relative bg-[#EAE7DF]">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url('${leader.imageUrl}')` }}
                      role="img"
                      aria-label={leader.name}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy flex items-center gap-1.5 shadow-xs">
                      <span>{leader.flag}</span>
                      <span>{leader.region}</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-bold text-xl text-navy">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-teal mt-0.5">
                      {leader.role}
                    </p>
                    <p className="text-xs sm:text-sm text-grey-600 mt-3 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action banner */}
            <div className="mt-16 bg-navy text-white rounded-[32px] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold">Ready to see our quality firsthand?</h3>
                <p className="text-sm text-grey-300 mt-1 max-w-xl">
                  Start with a 2-week pilot with zero lock-in contract. Experience the relief of checked work.
                </p>
              </div>
              <a
                href="/contact"
                className="whitespace-nowrap px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-md"
              >
                Book a Discovery Call
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <ChatbotBubble />
    </>
  );
}
