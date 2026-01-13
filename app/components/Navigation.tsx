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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 relative">
                  <Logo width={40} height={40} className="w-full h-full" priority />
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">ZIEPX</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-20 flex items-baseline space-x-8">
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
              className="text-gray-300 hover:text-white focus:outline-none"
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
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#security"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
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
