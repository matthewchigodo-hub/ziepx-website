"use client";

import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiDollarSign, 
  FiSend, 
  FiShoppingCart 
} from "react-icons/fi";

const features = [
  {
    icon: FiUsers,
    title: "Financial Inclusion",
    description: "Accessible to unbanked and underbanked populations. No complex requirements - just a mobile phone and banking app.",
  },
  {
    icon: FiDollarSign,
    title: "Multi-Currency Support",
    description: "Seamlessly handle ZiG, USD, and other regional currencies. Automatic conversion and real-time exchange rates.",
  },
  {
    icon: FiSend,
    title: "P2P Transfers",
    description: "Send money instantly to friends and family using just their phone number. Fast, secure, and fee-free transfers.",
  },
  {
    icon: FiShoppingCart,
    title: "In-Store Payments",
    description: "Pay at retail locations with your phone. Generate a one-time code and complete your purchase in seconds.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
            Everything you need
            <br />
            <span className="text-blue-600">
              in one place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for the African market with features that matter most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
