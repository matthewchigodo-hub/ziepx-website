"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: "url('/images/zipex%20background.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Minimal overlay for text readability - very light to show the image clearly */}
          <div className="absolute inset-0 bg-white/15"></div>
        </div>
        {/* Fallback if image doesn't exist */}
        <div className="absolute inset-0 bg-gray-50 opacity-0" style={{ opacity: 0 }}></div>
      </div>

      {/* Background Elements */}
      <div className="absolute right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 lg:pl-16">
        <div className="max-w-4xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Logo and Title */}
            <div className="flex justify-start items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 relative">
                  <Logo width={64} height={64} className="w-full h-full" priority />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark tracking-tight">
                ZIEPX
              </h1>
            </div>

            {/* Main Headline */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mobile Payments for
              <br />
              <span className="text-blue-600">
                Zimbabwe & Africa
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-gray-800 font-medium mb-10 max-w-2xl text-balance leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Empowering financial inclusion with secure, multi-currency mobile payments.
              Accessible to everyone, everywhere.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#how-it-works"
                className="border-2 border-gray-300 text-primary-dark px-8 py-4 rounded-full font-semibold text-lg hover:border-accent-purple hover:text-accent-purple transition-all duration-200 w-full sm:w-auto text-center"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
