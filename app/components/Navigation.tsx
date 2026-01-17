"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide nav when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-primary-dark/95 backdrop-blur-md shadow-sm" : "bg-primary-dark"
    } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-1 sm:-ml-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                  <Logo width={40} height={40} className="w-full h-full" priority />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">ZIEPX</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:flex-1 md:justify-end">
            <div className="flex items-baseline space-x-6 lg:space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#security"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Security
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-primary-dark border-t border-gray-700">
            <a
              href="#features"
              className="text-gray-300 hover:text-white block px-3 py-3 text-base font-medium min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white block px-3 py-3 text-base font-medium min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#security"
              className="text-gray-300 hover:text-white block px-3 py-3 text-base font-medium min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Security
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
