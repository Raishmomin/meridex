'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/#hero' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#E5E1D8]'
          : 'bg-[#F7F5F0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with clean modern graphic mark matching reference style */}
          <Link href="#hero" className="flex items-center gap-2.5 focus:outline-none group">
            <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white font-semibold text-sm transition-transform duration-200 group-hover:scale-105">
              <span className="text-teal-light">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-navy">
              Meridex
            </span>
          </Link>

          {/* Desktop Navigation - Clean, minimalist aesthetic */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-grey-700 hover:text-navy transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Pill Button styled like reference image */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-navy hover:bg-navy-light rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-grey-700 hover:text-navy hover:bg-[#EFECE6] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-[#E5E1D8] bg-[#F7F5F0] overflow-hidden ${
          mobileMenuOpen ? 'max-h-[520px] opacity-100 py-4 shadow-lg' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-2 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-grey-800 hover:text-navy hover:bg-[#EFECE6] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-navy hover:bg-navy-light rounded-full transition-colors shadow-sm"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
