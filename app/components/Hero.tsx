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
        <div className="absolute top-20 -left-40 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
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
              We're building a platform to empower financial inclusion with secure, multi-currency mobile payments.
              Coming soon to everyone, everywhere.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#how-it-works"
                className="relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg w-full sm:w-auto text-center overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(37, 99, 235, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
                {/* Hover fill effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Text with hover effect */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
