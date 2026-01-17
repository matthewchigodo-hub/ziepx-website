"use client";

import { motion } from "framer-motion";
import { 
  FiShield, 
  FiLock, 
  FiClock, 
  FiCheckCircle,
  FiUsers
} from "react-icons/fi";

const securityFeatures = [
  {
    icon: FiShield,
    title: "Bank-Grade Security",
    description: "All transactions are protected by the same security standards used by major banks.",
  },
  {
    icon: FiLock,
    title: "One-Time Codes",
    description: "Each code is unique, time-sensitive, and can only be used once. Expires automatically for your protection.",
  },
  {
    icon: FiClock,
    title: "Time-Limited",
    description: "Codes expire within minutes, preventing unauthorized use even if intercepted.",
  },
  {
    icon: FiCheckCircle,
    title: "Transaction Confirmation",
    description: "Every transaction requires explicit confirmation in your banking app before processing.",
  },
  {
    icon: FiUsers,
    title: "Bank Partnerships",
    description: "Built in partnership with trusted financial institutions across Zimbabwe and Africa.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6">
            Your Security is
            <br />
            <span className="text-blue-600">
              Our Priority
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Multiple layers of protection ensure your money and data stay safe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-600 flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4 sm:mb-6">
            Regulated & Compliant
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            ZIEPX operates in full compliance with local financial regulations and international
            security standards. Your transactions are monitored, protected, and fully traceable
            for your peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
