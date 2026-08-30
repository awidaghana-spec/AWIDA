'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-awida-green border-b border-awida-green/90">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative w-10 h-10 md:w-14 md:h-14 bg-white rounded-full p-1 flex-shrink-0">
            <Image src="/nav bar logo.png" alt="AWIDA Logo" fill className="object-contain p-1" priority />
          </div>
          <div>
            <h1 className="font-lato font-medium text-sm sm:text-base md:text-lg text-white leading-tight">
              African West Indies<br /> Diaspora Alliance
            </h1>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-gray-200">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/#what-we-do" className="hover:text-white transition-colors">What We Do</Link>
          <Link href="/#programs" className="hover:text-white transition-colors">Our Programs</Link>
          <Link href="/contact" className="bg-awida-gold text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-awida-green transition-all font-semibold">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-gray-800' : '-translate-y-1 bg-white'}`}></span>
          <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0 bg-gray-800' : 'opacity-100 bg-white'}`}></span>
          <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-gray-800' : 'translate-y-1 bg-white'}`}></span>
        </button>

        {/* Mobile Menu Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Slider */}
        <div className={`fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-start px-8 pt-24 h-full gap-6 text-sm uppercase tracking-wider font-semibold text-gray-800">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-awida-green transition-colors w-full border-b border-gray-100 pb-4">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-awida-green transition-colors w-full border-b border-gray-100 pb-4">About</Link>
            <Link href="/#what-we-do" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-awida-green transition-colors w-full border-b border-gray-100 pb-4">What We Do</Link>
            <Link href="/#programs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-awida-green transition-colors w-full border-b border-gray-100 pb-4">Our Programs</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-awida-green text-white px-8 py-3 rounded-full hover:bg-green-800 transition-all font-semibold w-full text-center">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
