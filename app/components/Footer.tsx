"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Logo width={40} height={40} className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold text-white">ZIEPX</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering financial inclusion across Zimbabwe and Africa through secure,
              accessible mobile payment solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <FiMapPin className="mr-3 text-accent-purple" />
                <span>Zimbabwe & Africa</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <FiMail className="mr-3 text-accent-purple" />
                <a href="mailto:info@ziepx.com" className="hover:text-white transition-colors">
                  info@ziepx.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <FiPhone className="mr-3 text-accent-purple" />
                <a href="tel:+263" className="hover:text-white transition-colors">
                  +263 XXX XXX XXX
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/compliance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZIEPX. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built for Zimbabwe & Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
