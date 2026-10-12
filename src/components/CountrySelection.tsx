'use client';

import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Compass,
  Building2,
  FileCheck,
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
    quote: 'BAS preparation, aggregator compliance & Xero reconciliations delivered on AEST/AWST time.',
    role: 'Active Operations Hub',
    pinCoordinates: { x: 82.5, y: 73.5 },
    timezones: 'AEST / AEDT & AWST Coverage',
    specialties: [
      'MFAA / FBAA Aggregator Compliance',
      'BAS Preparation & Single Touch Payroll',
      'Serviceability & Lender Comparisons',
      'Bank & Credit Card Reconciliation (Xero/MYOB)',
    ],
    regulation: 'Full compliance with Australian Privacy Principles (APPs), Privacy Act 1988, and Tax Agent Services Act.',
    commonTools: ['Xero', 'MYOB', 'BrokerEngine', 'ApplyOnline'],
    clientCount: '40+ Australian Brokerages & Firms',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    status: 'active',
    quote: 'QuickBooks bookkeeping, 1099 payroll reviews, and mortgage loan processing across EST & PST zones.',
    role: 'Active Operations Hub',
    pinCoordinates: { x: 23, y: 38 },
    timezones: 'EST, CST, & PST Timezone Alignment',
    specialties: [
      'QuickBooks Online AP / AR Management',
      '1003 Mortgage Loan File Pre-Underwrite',
      '1099 & W-2 Year-End Reconciliation',
      'Trailing Docs, VOE & Disclosures Tracking',
    ],
    regulation: 'SOC2 Aligned, strict non-disclosure security agreements, and encrypted cloud workflow channels.',
    commonTools: ['QuickBooks Online', 'Encompass', 'Calyx Point', 'Dext'],
    clientCount: '35+ US Lenders & Accounting Firms',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    status: 'upcoming',
    quote: 'UK Mortgage broker document prep, VAT reconciliations, and payroll support launching Q3.',
    role: 'Launching Q3 2026',
    pinCoordinates: { x: 48.5, y: 26 },
    timezones: 'GMT / BST Local Business Hours',
    specialties: [
      'HMRC Aligned VAT Return Workpapers',
      'FCA Regulated Mortgage File Structuring',
      'Xero UK Payroll & CIS Processing',
      'Pre-Registration Pilot Available',
    ],
    regulation: 'GDPR Aligned Data Protocols and dedicated UK cloud infrastructure.',
    commonTools: ['Xero UK', 'FreeAgent', 'Smartr365'],
    clientCount: 'Waitlist Open for Pilot Cohort',
  },
];

export default function CountrySelection() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(countries[0]);

  return (
    <section id="regions" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E5E1D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4">
            CROSS-BORDER JURISDICTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight leading-tight">
            Tailored for local finance regulations &amp; timezones
          </h2>
          <p className="mt-3 text-grey-600 text-base sm:text-lg">
            We work with mortgage brokers, CPAs, and finance firms across Australia and the United States, with UK support launching soon.
          </p>

          {/* Interactive Country Toggle Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {countries.map((country) => {
              const isSelected = selectedCountry.id === country.id;
              return (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isSelected
                      ? 'bg-navy text-white border-navy shadow-md scale-105'
                      : 'bg-white text-grey-700 border-[#E5E1D8] hover:bg-[#EFECE6] hover:text-navy'
                  }`}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span>{country.name}</span>
                  {country.status === 'upcoming' ? (
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                      Launching Soon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative bg-white border border-[#E5E1D8] rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-sm">
          
          {/* Top Bar inside Map Frame: Active Region Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-4 border-b border-[#E5E1D8]/80 text-xs text-grey-600">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal" />
              <span className="font-bold text-navy">Interactive Jurisdiction Map</span>
              <span className="text-grey-400">· Click any pin or country button to inspect jurisdiction</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Australia &amp; US Active Hubs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> UK Expansion Cohort
              </span>
            </div>
          </div>

          {/* Map canvas container */}
          <div className="relative w-full aspect-[2.1/1] min-h-[380px] sm:min-h-[460px] flex items-center justify-center overflow-visible">
            
            {/* World Map Dotted Matrix Background */}
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full select-none"
              style={{ maxHeight: '520px' }}
            >
              <defs>
                <pattern id="realWorldDots" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" className="text-grey-300" fill="currentColor" />
                </pattern>
                <pattern id="realWorldDotsActive" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.6" className="text-navy" fill="currentColor" />
                </pattern>
              </defs>

              {/* Accurate World Map Continents Silhouettes filled with Dotted Matrix */}
              {/* North America */}
              <path
                d="M 50,55 Q 120,25 210,40 Q 255,45 280,70 Q 320,105 305,150 Q 295,185 240,215 Q 215,245 190,265 Q 155,230 115,190 Q 75,145 50,55 Z"
                fill={selectedCountry.id === 'usa' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
                className="transition-colors duration-500"
              />
              {/* Alaska & Arctic Canada */}
              <path
                d="M 40,35 Q 100,20 160,30 Q 140,70 80,75 Z"
                fill="url(#realWorldDots)"
              />
              <path
                d="M 310,25 Q 360,20 380,50 Q 360,85 320,70 Z"
                fill="url(#realWorldDots)"
              />
              
              {/* Central America & Caribbean */}
              <path
                d="M 190,265 Q 210,285 235,310 Q 220,325 195,295 Z"
                fill="url(#realWorldDots)"
              />
              
              {/* South America */}
              <path
                d="M 230,280 Q 300,285 335,335 Q 325,415 270,470 Q 240,430 225,350 Q 220,310 230,280 Z"
                fill="url(#realWorldDots)"
              />

              {/* United Kingdom & Ireland (Accurate positioning) */}
              <path
                d="M 470,75 Q 495,65 500,90 Q 485,120 465,110 Q 460,90 470,75 Z"
                fill={selectedCountry.id === 'uk' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
                className="transition-colors duration-500"
              />
              
              {/* Mainland Europe */}
              <path
                d="M 485,85 Q 560,65 570,110 Q 550,165 480,160 Q 465,120 485,85 Z"
                fill="url(#realWorldDots)"
              />
              {/* Scandinavia */}
              <path
                d="M 500,30 Q 545,25 550,75 Q 520,80 500,55 Z"
                fill="url(#realWorldDots)"
              />

              {/* Africa */}
              <path
                d="M 455,165 Q 570,165 590,245 Q 570,355 520,410 Q 455,350 445,250 Q 440,195 455,165 Z"
                fill="url(#realWorldDots)"
              />

              {/* Russia & Northern Asia */}
              <path
                d="M 565,55 Q 750,30 890,65 Q 870,140 760,150 Q 640,135 565,55 Z"
                fill="url(#realWorldDots)"
              />

              {/* Central & Southern Asia */}
              <path
                d="M 620,135 Q 760,145 800,215 Q 740,280 660,250 Q 600,190 620,135 Z"
                fill="url(#realWorldDots)"
              />
              
              {/* East & Southeast Asia */}
              <path
                d="M 750,150 Q 860,155 865,240 Q 805,285 750,230 Z"
                fill="url(#realWorldDots)"
              />

              {/* Australia & New Zealand (Accurate positioning) */}
              <path
                d="M 765,305 Q 890,295 895,375 Q 835,435 770,395 Q 745,335 765,305 Z"
                fill={selectedCountry.id === 'australia' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
                className="transition-colors duration-500"
              />
              <path
                d="M 915,400 Q 935,395 930,440 Q 905,435 915,400 Z"
                fill={selectedCountry.id === 'australia' ? 'url(#realWorldDotsActive)' : 'url(#realWorldDots)'}
                className="transition-colors duration-500"
              />
            </svg>

            {/* INTERACTIVE PINS - ONLY THE SELECTED COUNTRY SHOWS ITS SPEECH CARD (The Key Improvement) */}
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
                  {/* Glowing Radar Target Pin */}
                  <button
                    onClick={() => setSelectedCountry(c)}
                    aria-label={`Select ${c.name}`}
                    className="relative cursor-pointer group flex items-center justify-center p-2 focus:outline-none"
                  >
                    <span
                      className={`absolute w-11 h-11 rounded-full opacity-60 transition-all ${
                        isSelected
                          ? c.status === 'upcoming'
                            ? 'bg-amber-400 animate-ping'
                            : 'bg-blue-600 animate-ping'
                          : 'opacity-0 group-hover:opacity-40 bg-grey-400'
                      }`}
                    />
                    <span
                      className={`relative w-4 h-4 rounded-full border-2 border-white shadow-xl transition-transform duration-300 ${
                        isSelected
                          ? c.status === 'upcoming'
                            ? 'bg-amber-500 scale-135 ring-4 ring-amber-500/30'
                            : 'bg-blue-600 scale-135 ring-4 ring-blue-600/30'
                          : 'bg-grey-500 hover:scale-120'
                      }`}
                    />
                  </button>

                  {/* FLOATING SPEECH CARD - STRICTLY SHOW ONLY WHEN SELECTED */}
                  {isSelected && (
                    <div
                      className="cursor-default absolute z-30 left-1/2 -translate-x-1/2 bottom-8 w-68 sm:w-80 bg-white/98 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-navy/20 animate-fade-in-up"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-grey-100">
                        <span className="text-2xl">{c.flag}</span>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-navy truncate block">{c.name}</span>
                          <span className="text-[10px] text-grey-500 block truncate">{c.timezones}</span>
                        </div>
                        {c.status === 'upcoming' ? (
                          <span className="text-[9px] bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded-full ml-auto">
                            Q3 2026
                          </span>
                        ) : (
                          <span className="text-[9px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full ml-auto flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Live Hub
                          </span>
                        )}
                      </div>

                      <p className="text-[11.5px] sm:text-xs text-grey-700 leading-snug font-normal">
                        &ldquo;{c.quote}&rdquo;
                      </p>

                      <div className="mt-3 pt-2 border-t border-grey-100 flex items-center justify-between text-[10px] text-grey-500 font-medium">
                        <span className="text-teal font-semibold">{c.role}</span>
                        <span className="text-blue-600 font-bold">Selected ✓</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* SELECTED JURISDICTION DEEP-DIVE CARD (Detailed Breakdown) */}
          <div className="mt-8 pt-8 border-t border-[#E5E1D8] bg-[#F7F5F0] rounded-[26px] p-6 sm:p-8 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Region Profile */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedCountry.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy leading-tight">
                      {selectedCountry.name} Operations Hub
                    </h3>
                    <span className="text-xs font-semibold text-teal block mt-0.5">
                      {selectedCountry.clientCount}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-grey-600">
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-navy shrink-0" />
                    <span>{selectedCountry.timezones}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span className="leading-snug">{selectedCountry.regulation}</span>
                  </div>
                </div>
              </div>

              {/* Core Deliverables for Selected Country */}
              <div className="md:col-span-5">
                <span className="text-[11px] font-bold text-navy uppercase tracking-wider block mb-2.5">
                  Regional Workflows &amp; Tool Stack:
                </span>
                <div className="space-y-2 mb-4">
                  {(selectedCountry?.specialties || []).map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-xs text-grey-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-grey-500 mr-1">Pre-trained on:</span>
                  {(selectedCountry?.commonTools || []).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-bold bg-white border border-[#E5E1D8] text-navy px-2.5 py-0.5 rounded-full"
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-navy hover:bg-navy-light text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Launch Pilot in {selectedCountry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-light" />
                </a>
                <p className="text-[11px] text-grey-500 mt-2 text-center md:text-right">
                  Zero long-term commitment · Fixed SLA
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
