"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = [
  {
    number: 1,
    title: "Open Your Banking App",
    instruction: "On the online store's website, select ZIEPX payment. Then, open your banking app and navigate to ZIEPX.",
    phoneContent: {
      topText: "Payment Options",
      buttons: [
        { label: "Credit Card", icon: "💳", active: false },
        { label: "ZIEPX", icon: "ZIEPX", active: true },
        { label: "Other", icon: "↔️", active: false },
      ],
    },
  },
  {
    number: 2,
    title: "Generate a ZIEPX Code",
    instruction: "Enter the code on the payment page of the online store.",
    phoneContent: {
      topText: "Pay via",
      brand: "ZIEPX",
      codeLabel: "ZIEPX Code",
      code: "654 321",
      cancelButton: "Cancel",
      payButton: "Pay",
    },
  },
  {
    number: 3,
    title: "Enter Code at Checkout/ATM",
    instruction: "At the point of sale or ATM, enter your 6-digit ZIEPX code to authorize the transaction.",
    phoneContent: {
      topText: "Enter Code",
      codeLabel: "ZIEPX Code",
      code: "654 321",
      cancelButton: "Cancel",
      confirmButton: "Confirm",
    },
  },
  {
    number: 4,
    title: "Confirm Transaction",
    instruction: "Confirm the transaction with your PIN in the bank app. Done!",
    phoneContent: {
      topText: "Confirm Transaction",
      pinLabel: "Enter PIN",
      pin: "• • • •",
      confirmButton: "Confirm",
    },
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const currentStepData = steps[currentStep];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, secure, and fast. Coming soon - get started in minutes.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          {/* Step Indicators */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => goToStep(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  index === currentStep
                    ? "bg-blue-600 text-white scale-110 shadow-lg"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Phone Mockup - Left Side */}
            <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Phone Frame */}
                <div className="w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
                    
                    {/* Phone Screen Content */}
                    <div className="h-full pt-8 pb-4 px-4 flex flex-col">
                      {currentStep === 0 && (
                        <>
                          <div className="text-sm text-gray-600 mb-4 text-center">
                            {currentStepData.phoneContent.topText}
                          </div>
                          <div className="space-y-3 flex-1">
                            {currentStepData.phoneContent.buttons?.map((button, idx) => (
                              <div
                                key={idx}
                                className={`w-full py-4 px-4 rounded-xl border-2 flex items-center justify-center gap-3 ${
                                  button.active
                                    ? "bg-primary-dark text-white border-primary-dark"
                                    : "bg-gray-50 border-gray-200 text-gray-700"
                                }`}
                              >
                                <span className="text-xl">{button.icon}</span>
                                <span className="font-semibold">{button.label}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {currentStep === 1 && (
                        <>
                          <div className="text-sm text-gray-600 mb-2">
                            {currentStepData.phoneContent.topText}
                          </div>
                          <div className="bg-primary-dark text-white px-4 py-3 rounded-lg mb-4 text-center font-bold text-lg">
                            {currentStepData.phoneContent.brand}
                          </div>
                          <div className="text-xs text-gray-500 mb-1">
                            {currentStepData.phoneContent.codeLabel}
                          </div>
                          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl py-6 px-4 mb-6 text-center">
                            <div className="text-3xl font-bold text-primary-dark tracking-wider">
                              {currentStepData.phoneContent.code}
                            </div>
                          </div>
                          <div className="mt-auto flex gap-3">
                            <button className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold">
                              {currentStepData.phoneContent.cancelButton}
                            </button>
                            <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold">
                              {currentStepData.phoneContent.payButton}
                            </button>
                          </div>
                        </>
                      )}

                      {currentStep === 2 && (
                        <>
                          <div className="text-lg font-semibold text-gray-800 mb-6">
                            {currentStepData.phoneContent.topText}
                          </div>
                          <div className="text-sm text-gray-500 mb-2">
                            {currentStepData.phoneContent.codeLabel}
                          </div>
                          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl py-6 px-4 mb-6 text-center">
                            <div className="text-3xl font-bold text-primary-dark tracking-wider">
                              {currentStepData.phoneContent.code}
                            </div>
                          </div>
                          <div className="mt-auto flex gap-3">
                            <button className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold">
                              {currentStepData.phoneContent.cancelButton}
                            </button>
                            <button className="flex-1 py-3 bg-accent-blue text-white rounded-xl font-semibold">
                              {currentStepData.phoneContent.confirmButton}
                            </button>
                          </div>
                        </>
                      )}

                      {currentStep === 3 && (
                        <>
                          <div className="text-lg font-semibold text-gray-800 mb-8">
                            {currentStepData.phoneContent.topText}
                          </div>
                          <div className="text-sm text-gray-500 mb-4 text-center">
                            {currentStepData.phoneContent.pinLabel}
                          </div>
                          <div className="flex justify-center gap-3 mb-8">
                            {[1, 2, 3, 4].map((_, idx) => (
                              <div
                                key={idx}
                                className="w-12 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center"
                              >
                                <span className="text-2xl text-blue-500">•</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-auto">
                            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg">
                              {currentStepData.phoneContent.confirmButton}
                            </button>
                          </div>
                        </>
                      )}

                      {/* Home Button Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Instructions - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                  {currentStepData.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  {currentStepData.instruction}
                </p>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-center lg:justify-start gap-4">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    currentStep === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    currentStep === steps.length - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                  }`}
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
