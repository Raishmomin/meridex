'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  Calendar,
  Building2,
  Lock,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    firmName: '',
    country: 'Australia',
    firmType: 'Mortgage Brokerage',
    priorityTask: 'Mortgage File Prep & Lodgement',
    estimatedVolume: '1–5 files / week',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#F7F5F0] min-h-screen py-10 sm:py-20 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-grey-600 mb-4 max-w-full truncate">
              START A PILOT · 24-HOUR RESPONSE
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-navy tracking-tight leading-tight">
              Let&apos;s talk about the tasks slowing you down.
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-grey-600 leading-relaxed">
              Tell us your volume, tools, and backlog. We will propose a tailored, zero-lock-in pilot so you can judge us purely on results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Contact Info & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Card */}
              <div className="bg-[#EFECE6] border border-[#E5E1D8] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-xs">
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-1">
                  Connect directly with our team
                </h3>
                <p className="text-xs sm:text-sm text-grey-600 mb-5 sm:mb-6">
                  Schedule a discovery session or send us your scope for an immediate pilot proposal.
                </p>

                <div className="space-y-3 sm:space-y-4 text-sm">
                  <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5E1D8]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-light" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-grey-400 block uppercase">Email us</span>
                      <a href="mailto:info@meridex.com" className="font-bold text-xs sm:text-sm text-navy hover:text-teal transition-colors truncate block">
                        info@meridex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5E1D8]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-light" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-grey-400 block uppercase">Call or WhatsApp</span>
                      <a href="tel:+918097527110" className="font-bold text-xs sm:text-sm text-navy hover:text-teal transition-colors truncate block">
                        +91 8097 527 110
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DDD8CD] space-y-2">
                  <span className="text-[11px] font-semibold text-grey-500 uppercase tracking-wider block">
                    Our Working Standard
                  </span>
                  <p className="text-xs text-grey-600 leading-relaxed">
                    We work inside the platforms you already use, under access you control. No long-term lock-in—turnaround agreed upfront.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: High-Conversion Interactive Form */}
            <div className="lg:col-span-7 bg-white border border-[#E5E1D8] rounded-[24px] sm:rounded-[36px] p-5 sm:p-10 lg:p-12 shadow-md w-full">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    Thank you! Your inquiry has been received.
                  </h3>
                  <p className="text-sm text-grey-600 max-w-md mx-auto leading-relaxed">
                    A senior operations director will review your requirements and reach out within 24 hours with a scoped pilot proposal.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold hover:bg-navy-light transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy tracking-tight">
                      Request a Pilot Quote or Discovery Call
                    </h3>
                    <p className="text-xs text-grey-500 mt-1">
                      Fill out the details below and we will prepare a clear proposal for your firm.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Mitchell"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@yourfirm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  {/* Phone & Firm Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+61 400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Firm / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pacific Finance Group"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  {/* Country & Firm Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Jurisdiction / Country *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy"
                      >
                        <option value="Australia">🇦🇺 Australia</option>
                        <option value="United States">🇺🇸 United States</option>
                        <option value="United Kingdom">🇬🇧 United Kingdom (Waitlist)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Firm Type *
                      </label>
                      <select
                        value={formData.firmType}
                        onChange={(e) => setFormData({ ...formData, firmType: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy"
                      >
                        <option value="Mortgage Brokerage">Mortgage Brokerage</option>
                        <option value="Insurance Brokerage">Insurance Brokerage</option>
                        <option value="Accounting & Tax Practice">Accounting &amp; Tax Practice</option>
                        <option value="Bookkeeping Firm">Bookkeeping Firm</option>
                        <option value="Wealth / Financial Planning">Wealth / Financial Planning</option>
                        <option value="Other">Other Finance Firm</option>
                      </select>
                    </div>
                  </div>

                  {/* Task & Estimated Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Primary Task to Hand Over *
                      </label>
                      <select
                        value={formData.priorityTask}
                        onChange={(e) => setFormData({ ...formData, priorityTask: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy"
                      >
                        <option value="Mortgage File Prep & Lodgement">Mortgage File Prep &amp; Lodgement</option>
                        <option value="Insurance Quotes & Renewals">Insurance Quotes &amp; Renewals</option>
                        <option value="Bank Reconciliation & AP/AR">Bank Reconciliation &amp; AP/AR</option>
                        <option value="BAS & Tax Return Workpapers">BAS &amp; Tax Return Workpapers</option>
                        <option value="Payroll Processing & Super">Payroll Processing &amp; Super</option>
                        <option value="Multiple Back-Office Tasks">Multiple Back-Office Tasks</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5">
                        Estimated Weekly Volume
                      </label>
                      <select
                        value={formData.estimatedVolume}
                        onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy"
                      >
                        <option value="1–5 files / week">1–5 files / week (Small pilot)</option>
                        <option value="6–15 files / week">6–15 files / week (Medium pod)</option>
                        <option value="16+ files / week">16+ files / week (Dedicated squad)</option>
                        <option value="Unsure / Let's discuss">Unsure / Let&apos;s discuss on call</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5">
                      Tell us the specific task eating up your week
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We use BrokerEngine & Xero. We need help packaging serviceability sheets and doing daily bank reconciliations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <span>Request Your Pilot Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-grey-500 font-medium">
                      <Lock className="w-3 h-3 text-teal" />
                      <span>Zero obligation · 24-hour turnaround · Strictly confidential</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
