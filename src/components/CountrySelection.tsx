'use client';

import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Compass,
} from 'lucide-react';

interface CountryData {
  id: string;
  name: string;
  flag: string;
  status: 'active' | 'upcoming';
  quote: string;
  role: string;
  pinCoordinates: { x: number; y: number }; // Percentage on SVG
  timezones: string;
  specialties: string[];
  regulation: string;
  commonTools: string[];
  clientCount: string;
}

const countries: CountryData[] = [
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    status: 'active',
    quote: 'Document verification, lodgement support, BAS preparation & Xero reconciliations.',
    role: 'Active Support',
    pinCoordinates: { x: 82.5, y: 73.5 },
    timezones: 'Overlap with AEST / AEDT business hours, by arrangement',
    specialties: [
      'Document collection and verification for mortgage brokers',
      'BAS prep and payroll support',
      'Application prep and lodgement support',
      'Bank and credit card reconciliations',
    ],
    regulation: 'Client data handled under strict confidentiality, built around APPs',
    commonTools: ['Xero', 'MYOB', 'BrokerEngine', 'ApplyOnline'],
    clientCount: 'Now taking pilot clients',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    status: 'active',
    quote: 'QuickBooks bookkeeping, 1099 payroll reviews, and mortgage 1003 file preparation.',
    role: 'Active Support',
    pinCoordinates: { x: 23, y: 38 },
    timezones: 'Overlap with your business hours, by arrangement',
    specialties: [
      'AP / AR support in QuickBooks Online',
      'Bank and credit card reconciliations',
      '1099 and W-2 year end data preparation',
      'Mortgage 1003 file preparation and document checks',
    ],
    regulation: 'Confidentiality agreements and access controls on every file',
    commonTools: ['QuickBooks Online', 'Encompass', 'Calyx Point', 'Dext'],
    clientCount: 'Now taking pilot clients',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    status: 'upcoming',
    quote: 'Mortgage file prep for your FCA-authorised adviser, VAT workpapers, and payroll support.',
    role: 'Launching 2027',
    pinCoordinates: { x: 48.5, y: 26 },
    timezones: 'GMT / BST Local Business Hours',
    specialties: [
      'Mortgage file prep for your FCA-authorised adviser',
      'HMRC Aligned VAT Return Workpapers',
      'Xero UK Payroll & CIS Processing',
      'Bank and credit card reconciliations',
    ],
    regulation: 'Confidentiality-first data handling',
    commonTools: ['Xero UK', 'FreeAgent', 'Smartr365'],
    clientCount: 'Launching 2027 · Register interest',
  },
];

export default function CountrySelection() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(countries[0]);

  return (
    <section id="regions" className="py-12 sm:py-16 lg:py-24 bg-[#0B0F14] relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-3 sm:mb-4">
            CROSS-BORDER JURISDICTIONS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Tailored for local finance regulations &amp; timezones
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
            We work with mortgage brokers, CPAs, and finance firms across Australia and the United States, with UK support launching soon.
          </p>

          {/* Interactive Country Toggle Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {countries.map((country) => {
              const isSelected = selectedCountry.id === country.id;
              return (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isSelected
                      ? 'bg-teal/20 text-teal-light border-teal/60 shadow-sm scale-102 sm:scale-105'
                      : 'bg-[#151A22] text-slate-200 border-[#222A38] hover:bg-[#1E2633] hover:text-white'
                  }`}
                >
                  <span className="text-base">{country.flag}</span>
                  <span>{country.name}</span>
                  {country.status === 'upcoming' ? (
                    <span className="text-[9px] sm:text-[10px] bg-amber-950/60 text-amber-300 border border-amber-800/40 px-1.5 py-0.5 rounded-full font-bold">
                      Soon
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative bg-[#11151C] border border-[#222A38] rounded-[24px] sm:rounded-[36px] p-4 sm:p-10 lg:p-12 shadow-2xl w-full overflow-hidden">
          
          {/* Top Bar inside Map Frame: Active Region Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-4 sm:pb-6 mb-3 sm:mb-4 border-b border-[#222A38] text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal shrink-0" />
              <span className="font-bold text-white truncate">Interactive Jurisdiction Map</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium text-slate-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal" /> Aus &amp; US Active
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> UK Soon
              </span>
            </div>
          </div>

          {/* Map canvas container */}
          <div className="relative w-full aspect-[2.1/1.2] sm:aspect-[2.1/1] min-h-[260px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
            
            {/* World Map Dotted Matrix Background */}
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full select-none"
              style={{ maxHeight: '520px' }}
            >
              <defs>
                <pattern id="realWorldDots" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" fill="#475569" />
                </pattern>
                <pattern id="realWorldDotsActive" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.6" fill="#14B8A6" />
                </pattern>
              </defs>

              {/* Geographic landmass shapes */}
              <path
                d="M 50,55 Q 120,25 210,40 Q 255,45 280,70 Q 320,105 305,150 Q 295,185 240,215 Q 215,245 190,265 Q 155,230 115,190 Q 75,145 50,55 Z"
                fill={selectedCountry.id === 'usa' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
              />
              <path
                d="M 230,280 Q 300,285 335,335 Q 325,415 270,470 Q 240,430 225,350 Q 220,310 230,280 Z"
                fill="url(#realWorldDots)"
              />
              <path
                d="M 470,75 Q 495,65 500,90 Q 485,120 465,110 Q 460,90 470,75 Z"
                fill={selectedCountry.id === 'uk' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
              />
              <path
                d="M 485,85 Q 560,65 570,110 Q 550,165 480,160 Q 465,120 485,85 Z"
                fill="url(#realWorldDots)"
              />
              <path
                d="M 455,165 Q 570,165 590,245 Q 570,355 520,410 Q 455,350 445,250 Q 440,195 455,165 Z"
                fill="url(#realWorldDots)"
              />
              <path
                d="M 570,60 Q 770,40 850,130 Q 820,230 700,250 Q 610,190 570,60 Z"
                fill="url(#realWorldDots)"
              />
              <path
                d="M 765,305 Q 890,295 895,375 Q 835,435 770,395 Q 745,335 765,305 Z"
                fill={selectedCountry.id === 'australia' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
              />
            </svg>

            {/* INTERACTIVE PINS */}
            {countries.map((c) => {
              const isSelected = selectedCountry.id === c.id;

              return (
                <div
                  key={c.id}
                  className="absolute transition-all duration-300"
                  style={{
                    left: `${c.pinCoordinates.x}%`,
                    top: `${c.pinCoordinates.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <button
                    onClick={() => setSelectedCountry(c)}
                    aria-label={`Select ${c.name}`}
                    className="relative cursor-pointer group flex items-center justify-center p-2 focus:outline-none"
                  >
                    <span
                      className={`absolute w-8 sm:w-11 h-8 sm:h-11 rounded-full opacity-60 transition-all ${
                        isSelected
                          ? c.status === 'upcoming'
                            ? 'bg-amber-400 animate-ping'
                            : 'bg-teal animate-ping'
                          : 'opacity-0 group-hover:opacity-40 bg-slate-500'
                      }`}
                    />
                    <span
                      className={`relative w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border-2 border-[#11151C] shadow-xl transition-transform duration-300 ${
                        isSelected
                          ? c.status === 'upcoming'
                            ? 'bg-amber-400 scale-125 ring-2 ring-amber-400/40'
                            : 'bg-teal scale-125 ring-2 ring-teal/40'
                          : 'bg-slate-500'
                      }`}
                    />
                  </button>

                  {/* FLOATING SPEECH CARD ON DESKTOP */}
                  {isSelected && (
                    <div
                      className={`hidden sm:block cursor-default absolute z-30 ${
                        c.pinCoordinates.y < 45 ? 'top-9' : 'bottom-9'
                      } ${
                        c.pinCoordinates.x < 35
                          ? 'left-0'
                          : c.pinCoordinates.x > 70
                          ? 'right-0'
                          : 'left-1/2 -translate-x-1/2'
                      } w-80 sm:w-88 bg-[#151A22]/98 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-[#222A38] animate-fade-in-up`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#222A38]">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-2xl shrink-0">{c.flag}</span>
                          <span className="text-sm font-bold text-white truncate">{c.name}</span>
                        </div>
                        {c.status === 'upcoming' ? (
                          <span className="text-[9px] bg-amber-950/60 text-amber-300 border border-amber-800/40 font-bold px-2 py-0.5 rounded-full shrink-0">
                            Launching 2027
                          </span>
                        ) : (
                          <span className="text-[9px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active Coverage
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-teal font-medium mb-2.5">
                        <Clock className="w-3.5 h-3.5 text-teal shrink-0" />
                        <span className="leading-snug">{c.timezones}</span>
                      </div>

                      <p className="text-[11.5px] sm:text-xs text-slate-200 leading-relaxed font-normal">
                        &ldquo;{c.quote}&rdquo;
                      </p>

                      <div className="mt-3 pt-2 border-t border-[#222A38] flex items-center justify-between text-[10px] text-slate-300 font-medium">
                        <span className="text-teal font-semibold">{c.role}</span>
                        <span className="text-teal font-bold">Selected ✓</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Mobile Quote Snippet */}
          <div className="sm:hidden mt-3 p-3.5 rounded-2xl bg-[#151A22] border border-[#222A38] text-left space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-xs font-bold text-white">{selectedCountry.name}</span>
              <span className="text-[9px] text-teal font-semibold ml-auto">{selectedCountry.status === 'upcoming' ? 'Launching 2027' : 'Active Coverage'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-teal font-medium">
              <Clock className="w-3 h-3 text-teal shrink-0" />
              <span>{selectedCountry.timezones}</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-snug">
              &ldquo;{selectedCountry.quote}&rdquo;
            </p>
          </div>

          {/* SELECTED JURISDICTION DEEP-DIVE CARD */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#222A38] bg-[#151A22] border border-[#222A38] rounded-[20px] sm:rounded-[26px] p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
              
              {/* Region Profile */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl sm:text-4xl">{selectedCountry.flag}</span>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                      {selectedCountry.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold text-teal block mt-0.5">
                      {selectedCountry.clientCount}
                    </span>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal shrink-0" />
                    <span>{selectedCountry.timezones}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal shrink-0 mt-0.5" />
                    <span className="leading-snug text-slate-300">{selectedCountry.regulation}</span>
                  </div>
                </div>
              </div>

              {/* Core Deliverables */}
              <div className="md:col-span-5">
                <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider block mb-2 sm:mb-2.5">
                  Regional Workflows &amp; Tool Stack:
                </span>
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {(selectedCountry?.specialties || []).map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 mr-1">Tools we work in:</span>
                  {(selectedCountry?.commonTools || []).map((tool) => (
                    <span
                      key={tool}
                      className="text-[9px] sm:text-[10px] font-bold bg-[#0B0F14] border border-[#222A38] text-white px-2 py-0.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="md:col-span-3 flex flex-col items-stretch md:items-end justify-between h-full pt-2">
                <a
                  href={`/contact?country=${encodeURIComponent(selectedCountry.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-teal/20 hover:bg-teal/30 text-teal-light hover:text-white border border-teal/40 hover:border-teal/60 text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Launch Pilot in {selectedCountry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-light" />
                </a>
                <p className="text-[10px] sm:text-[11px] text-slate-300 mt-2 text-center md:text-right">
                  No long-term lock-in. Turnaround agreed upfront.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
