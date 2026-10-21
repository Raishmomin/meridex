'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Mortgage Broker Support (Aus)', href: '/#services' },
    { label: 'Bookkeeping & BAS Prep (Aus)', href: '/#services' },
    { label: 'QuickBooks Bookkeeping & AP/AR (USA)', href: '/#services' },
    { label: 'Mortgage 1003 File Prep (USA)', href: '/#services' },
    { label: '1099 & W-2 Preparation (USA)', href: '/#services' },
    { label: 'UK Pilot Workflows (Launching Q3)', href: '/#services' },
  ];

  return (
    <footer className="bg-[#EFECE6] border-t border-[#E5E1D8] text-grey-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E5E1D8]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/meridex-logo.png"
                alt="Meridex Solutions"
                width={180}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm font-medium text-grey-500 italic">
              Where merit meets dexterity.
            </p>
            
            <p className="text-sm text-grey-600 leading-relaxed max-w-sm">
              Supporting mortgage brokers, insurance brokers, accountants and finance firms across Australia and the USA with precision outsourcing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@meridex.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-navy hover:text-teal transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-teal" />
                <span>info@meridex.com</span>
              </a>
              <span className="hidden sm:inline text-grey-300">·</span>
              <a
                href="tel:+918097527110"
                className="inline-flex items-center gap-2 text-xs font-semibold text-navy hover:text-teal transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal" />
                <span>+91 8097 527 110</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-grey-600 hover:text-navy transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links / Capabilities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-grey-600 hover:text-navy transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions & Coverage */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">
              Coverage
            </h4>
            <div className="space-y-2.5 text-xs text-grey-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-navy">Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-navy">United States</span>
              </div>
              <div className="flex items-center gap-2 text-grey-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>United Kingdom (Soon)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-grey-500">
          <p>© 2026 Meridex. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-navy transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-navy transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
