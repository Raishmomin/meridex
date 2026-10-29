'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0B0F14] border-t border-[#222A38] text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#222A38]">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/meridex-logo-light.png"
                  alt="Meridex Solutions"
                  width={190}
                  height={34}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </Link>
              <p className="text-xs sm:text-sm font-medium text-teal italic tracking-wide">
                Where merit meets dexterity.
              </p>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Supporting mortgage brokers, insurance brokers, accountants and finance firms across Australia and the USA with precision outsourcing.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-white">
                <a
                  href="mailto:info@meridexsolutions.com"
                  className="inline-flex items-center gap-1.5 hover:text-teal transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal" />
                  <span>info@meridexsolutions.com</span>
                </a>
              </div>

              {/* Dedicated Instagram Badge */}
              <div className="pt-1">
                <a
                  href="https://www.instagram.com/meridexsolutions?dlrf=MTJlbmZ6bWo3MnYxaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#222A38] hover:border-teal/40 transition-all shadow-md group"
                  aria-label="Follow Meridex Solutions on Instagram"
                >
                  <div className="w-5 h-5 rounded-md bg-[#0B0F14] border border-[#222A38] flex items-center justify-center text-slate-300 group-hover:text-teal group-hover:border-teal/40 shrink-0 transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white group-hover:text-teal transition-colors">
                    Instagram
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                    @meridexsolutions
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions & Coverage */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Coverage
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Australia (Active)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">United States (Active)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>United Kingdom (Launching 2027)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 Meridex Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-slate-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">·</span>
            <a
              href="https://www.instagram.com/meridexsolutions?dlrf=MTJlbmZ6bWo3MnYxaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-teal transition-colors text-slate-300 group"
              aria-label="Instagram @meridexsolutions"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal transition-colors" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
