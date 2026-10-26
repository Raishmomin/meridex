'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background styling when scrolled
      setIsScrolled(currentScrollY > 20);

      // Keep header visible at the very top or when mobile menu is open
      if (mobileMenuOpen || currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN past threshold -> HIDE header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> SHOW header
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#0B0F14]/95 backdrop-blur-md shadow-md border-b border-[#222A38]'
            : 'bg-[#0B0F14]'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none group shrink-0">
            <Image
              src="/meridex-logo-light.png"
              alt="Meridex Solutions"
              width={190}
              height={34}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation - Clean, minimalist aesthetic */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-grey-400 hover:text-white transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Pill Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-full transition-all duration-200 shadow-sm hover:shadow"
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
              className="p-2 rounded-xl text-grey-300 hover:text-white hover:bg-[#151A22] transition-colors focus:outline-none"
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
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-[#222A38] bg-[#0B0F14] overflow-hidden ${
          mobileMenuOpen ? 'max-h-[520px] opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-2 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-grey-300 hover:text-white hover:bg-[#151A22] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-full transition-colors shadow-sm"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </header>
    {/* Spacer to prevent layout shift with fixed header */}
    <div className="h-20 w-full shrink-0" aria-hidden="true" />
  </>
);
}
