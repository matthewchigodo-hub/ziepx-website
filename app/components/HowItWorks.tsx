"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

// Random purchase scenarios
const purchaseScenarios = [
  {
    store: "Supermarket",
    items: [
      { name: "Fresh Vegetables", price: 12.50 },
      { name: "Milk & Dairy", price: 8.75 },
      { name: "Bread & Bakery", price: 4.25 },
    ],
  },
  {
    store: "Coffee Shop",
    items: [
      { name: "Cappuccino", price: 4.50 },
      { name: "Croissant", price: 3.25 },
    ],
  },
  {
    store: "Gas Station",
    items: [
      { name: "Fuel", price: 45.00 },
      { name: "Snacks", price: 6.50 },
    ],
  },
  {
    store: "Restaurant",
    items: [
      { name: "Main Course", price: 24.99 },
      { name: "Dessert", price: 8.50 },
      { name: "Beverages", price: 5.75 },
      ],
  },
  {
    store: "Pharmacy",
    items: [
      { name: "Prescription", price: 18.99 },
      { name: "Vitamins", price: 12.50 },
    ],
  },
];

// App icons with parody names
const apps = [
  { name: "Bank", icon: "$", color: "from-blue-600 to-blue-800", clickable: true },
  { name: "InstaGram", icon: "📷", color: "from-pink-500 to-purple-600", clickable: false },
  { name: "FaceBook", icon: "👥", color: "from-blue-500 to-blue-700", clickable: false },
  { name: "WhatsApp", icon: "💬", color: "from-green-500 to-green-700", clickable: false },
  { name: "YouTube", icon: "▶️", color: "from-red-500 to-red-700", clickable: false },
  { name: "Spotify", icon: "🎧", color: "from-green-500 to-green-600", clickable: false },
  { name: "Maps", icon: "🗺️", color: "from-blue-500 to-blue-600", clickable: false },
  { name: "CandyCrush", icon: "🍬", color: "from-pink-400 to-pink-600", clickable: false },
  { name: "Settings", icon: "⚙️", color: "from-gray-400 to-gray-600", clickable: false },
];

// Generate random 6-digit code
const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export default function HowItWorks() {
  const [currentView, setCurrentView] = useState<"checkout" | "home" | "biometric" | "bank" | "ziepx" | "confirm" | "success">("home");
  const [purchaseScenario, setPurchaseScenario] = useState(purchaseScenarios[0]);
  const [ziepxCode, setZiepxCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [balance, setBalance] = useState(1250.75);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [showBalanceReduction, setShowBalanceReduction] = useState(false);

  // Generate random purchase scenario on mount
  useEffect(() => {
    const randomScenario = purchaseScenarios[Math.floor(Math.random() * purchaseScenarios.length)];
    setPurchaseScenario(randomScenario);
  }, []);

  const totalAmount = purchaseScenario.items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckoutContinue = () => {
    setCurrentView("home");
  };

  const handleBankAppClick = () => {
    setCurrentView("biometric");
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setCurrentView("bank");
    }, 2000);
  };

  const handleZiepxClick = () => {
    const code = generateCode();
    setZiepxCode(code);
    setCurrentView("ziepx");
  };

  const handleCodeInput = (digit: string) => {
    if (enteredCode.length < 6) {
      setEnteredCode(enteredCode + digit);
    }
  };

  const handleCodeDelete = () => {
    setEnteredCode(enteredCode.slice(0, -1));
  };

  const handleConfirm = () => {
    if (enteredCode === ziepxCode.replace(/\s/g, "")) {
      setCurrentView("confirm");
      setIsConfirming(true);
      setTimeout(() => {
        setIsConfirming(false);
        setShowBalanceReduction(true);
        setBalance((prev) => prev - totalAmount);
        setTimeout(() => {
          setCurrentView("success");
        }, 1500);
      }, 2000);
    }
  };

  const resetFlow = () => {
    setCurrentView("home");
    setEnteredCode("");
    setZiepxCode("");
    setShowBalanceReduction(false);
    const randomScenario = purchaseScenarios[Math.floor(Math.random() * purchaseScenarios.length)];
    setPurchaseScenario(randomScenario);
    setBalance(1250.75);
  };

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
            Experience ZIEPX in action - try the interactive demo below
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="flex justify-end mb-4">
              <button
              onClick={resetFlow}
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              New Scenario
              </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Phone Mockup - Left Side */}
            <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
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
                      <AnimatePresence mode="wait">
                        {/* Checkout/Receipt Screen */}
                        {currentView === "checkout" && (
                          <motion.div
                            key="checkout"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="h-full flex flex-col"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-lg font-bold text-gray-800">{purchaseScenario.store}</h3>
                              <div className="text-xs text-gray-500">9:41</div>
                          </div>
                            
                            <div className="flex-1 overflow-hidden">
                              <div className="space-y-3 mb-4">
                                {purchaseScenario.items.map((item, idx) => (
                                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm text-gray-700">{item.name}</span>
                                    <span className="text-sm font-semibold text-gray-800">${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                              
                              <div className="border-t-2 border-gray-200 pt-3 mb-4">
                                <div className="flex justify-between items-center">
                                  <span className="text-lg font-bold text-gray-800">Total</span>
                                  <span className="text-xl font-bold text-primary-dark">${totalAmount.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              <div className="mb-4 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                                <div className="text-xs text-gray-600 mb-2">Select Payment Method</div>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center">
                                    <Logo width={20} height={20} className="brightness-0 invert" />
                          </div>
                                  <span className="text-sm font-semibold text-gray-800">Pay with ZIEPX</span>
                          </div>
                          </div>
                            </div>
                            
                            <button
                              onClick={handleCheckoutContinue}
                              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                              Continue
                            </button>
                          </motion.div>
                        )}

                        {/* Home Screen */}
                        {currentView === "home" && (
                          <motion.div
                            key="home"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col"
                          >
                            <div className="text-center mb-4">
                              <div className="text-xs text-gray-500 mb-1">9:41</div>
                              <div className="text-sm font-semibold text-gray-800">Home</div>
                          </div>
                            <div className="flex-1 grid grid-cols-3 gap-3 p-2 overflow-hidden">
                              {apps.map((app, idx) => (
                                <motion.button
                                  key={idx}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={app.clickable ? handleBankAppClick : undefined}
                                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                                    app.clickable
                                      ? "bg-blue-50 border-2 border-blue-300 cursor-pointer hover:bg-blue-100"
                                      : "bg-gray-50 hover:bg-gray-100"
                                  }`}
                                >
                                  <div className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-1 shadow-sm`}>
                                    <span className="text-white text-lg">{app.icon}</span>
                          </div>
                                  <span className={`text-xs ${app.clickable ? "text-gray-700 font-medium" : "text-gray-600"}`}>
                                    {app.name}
                                  </span>
                                </motion.button>
                              ))}
                            </div>
                            <div className="text-center text-xs text-gray-500 mt-2">
                              {currentView === "home" && "Click the Bank app to pay"}
                          </div>
                          </motion.div>
                        )}

                        {/* Biometric Authentication */}
                        {currentView === "biometric" && (
                          <motion.div
                            key="biometric"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center bg-white"
                          >
                            <motion.div
                              animate={{
                                scale: isAuthenticating ? [1, 1.2, 1] : 1,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: isAuthenticating ? Infinity : 0,
                              }}
                              className="w-24 h-24 border-4 border-gray-900 rounded-full flex items-center justify-center mb-4"
                            >
                              <motion.div
                                animate={{
                                  opacity: isAuthenticating ? [0.3, 1, 0.3] : 0.3,
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: isAuthenticating ? Infinity : 0,
                                }}
                                className="w-16 h-16 bg-gray-900 rounded-full"
                              />
                            </motion.div>
                            <p className="text-gray-900 text-lg font-semibold mb-2">Face ID</p>
                            <p className="text-gray-600 text-sm">Authenticating...</p>
                          </motion.div>
                      )}

                        {/* Bank App */}
                        {currentView === "bank" && (
                          <motion.div
                            key="bank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="h-full flex flex-col bg-white"
                          >
                            {/* Header */}
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">$</span>
                                  </div>
                                  <span className="text-base font-bold text-blue-600">Banking App</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 flex items-center justify-center">
                                    <span className="text-xs">🔍</span>
                                  </div>
                                  <div className="w-6 h-6 flex items-center justify-center">
                                    <span className="text-xs">☰</span>
                                  </div>
                                </div>
                          </div>
                              <div className="text-lg font-bold text-gray-900">Hello, Brendon!</div>
                          </div>

                            {/* Quick Access Shortcuts */}
                            <div className="flex items-center gap-3 mb-4 px-1">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleZiepxClick}
                                className="flex flex-col items-center gap-1"
                              >
                                <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center">
                                  <Logo width={20} height={20} className="brightness-0 invert" />
                                </div>
                                <span className="text-xs text-gray-600">ZIEPX</span>
                              </motion.button>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-lg">💳</span>
                                </div>
                                <span className="text-xs text-gray-600">Card</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-lg">📤</span>
                                </div>
                                <span className="text-xs text-gray-600">Transfer</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-lg">📊</span>
                                </div>
                                <span className="text-xs text-gray-600">Analytics</span>
                              </div>
                            </div>

                            {/* Accounts Section */}
                            <div className="mb-3 flex-1 overflow-y-auto scrollbar-hide">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-4 bg-blue-600 rounded"></div>
                                  <h4 className="text-sm font-bold text-gray-900">Accounts (1)</h4>
                                </div>
                                <span className="text-xs text-gray-500">⌃</span>
                              </div>
                              
                              {/* Main Account Card */}
                              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-3 mb-3 text-white">
                                <div className="flex items-center justify-between mb-2">
                                  <div>
                                    <div className="text-xs opacity-90 mb-1">Checking Account</div>
                                    <div className="text-xs opacity-75">****1333</div>
                                  </div>
                                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                                    <span className="text-white text-xs">$</span>
                                  </div>
                                </div>
                                <div className="text-xs opacity-80 mb-1">Available funds</div>
                                <motion.div
                                  key={balance}
                                  initial={{ scale: 1.05 }}
                                  animate={{ scale: 1 }}
                                  className="text-2xl font-bold"
                                >
                                  ${balance.toFixed(2)}
                                </motion.div>
                                {showBalanceReduction && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-xs text-red-200 mt-1"
                                  >
                                    -${totalAmount.toFixed(2)}
                                  </motion.div>
                                )}
                              </div>

                              {/* Recent Transactions */}
                              <div className="mb-2">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Transactions</h4>
                                <div className="space-y-2">
                                  {[
                                    { name: "Grocery Store", amount: 45.50, date: "Today", icon: "🛒" },
                                    { name: "Coffee Shop", amount: 4.75, date: "Yesterday", icon: "☕" },
                                    { name: "Gas Station", amount: 60.00, date: "2 days ago", icon: "⛽" },
                                  ].map((transaction, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                      <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                          <span className="text-xs">{transaction.icon}</span>
                                        </div>
                                        <div>
                                          <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                                          <div className="text-xs text-gray-500">{transaction.date}</div>
                                        </div>
                                      </div>
                                      <div className="text-sm font-semibold text-gray-900">-${transaction.amount.toFixed(2)}</div>
                              </div>
                            ))}
                          </div>
                              </div>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="flex items-center justify-around pt-2 border-t border-gray-200">
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                                <span className="text-xs text-blue-600 font-semibold">Home</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <span className="text-xs text-gray-400">Payments</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <span className="text-xs text-gray-400">History</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <span className="text-xs text-gray-400">More</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* ZIEPX Code Screen */}
                        {currentView === "ziepx" && (
                          <motion.div
                            key="ziepx"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="h-full flex flex-col"
                          >
                            <div className="text-center mb-4">
                              <div className="text-sm text-gray-600 mb-2">Pay via</div>
                              <div className="flex justify-center mb-4">
                                <Logo width={40} height={40} />
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-2 text-center">ZIEPX Code</div>
                            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl py-6 px-4 mb-6 text-center">
                              <div className="text-3xl font-bold text-primary-dark tracking-wider">
                                {ziepxCode.match(/.{1,3}/g)?.join(" ") || ziepxCode}
                              </div>
                            </div>
                            
                            <div className="text-xs text-gray-500 mb-4 text-center">
                              Enter this code on the checkout
                            </div>
                            
                            <div className="mt-auto flex gap-3">
                              <button
                                onClick={() => setCurrentView("bank")}
                                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold"
                              >
                                Back
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* Confirmation Biometric */}
                        {currentView === "confirm" && (
                          <motion.div
                            key="confirm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center bg-white"
                          >
                            <motion.div
                              animate={{
                                scale: isConfirming ? [1, 1.2, 1] : 1,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: isConfirming ? Infinity : 0,
                              }}
                              className="w-24 h-24 border-4 border-gray-900 rounded-full flex items-center justify-center mb-4"
                            >
                              <motion.div
                                animate={{
                                  opacity: isConfirming ? [0.3, 1, 0.3] : 0.3,
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: isConfirming ? Infinity : 0,
                                }}
                                className="w-16 h-16 bg-gray-900 rounded-full"
                              />
                            </motion.div>
                            <p className="text-gray-900 text-lg font-semibold mb-2">Face ID</p>
                            <p className="text-gray-600 text-sm">Confirming transaction...</p>
                          </motion.div>
                        )}

                        {/* Success Screen */}
                        {currentView === "success" && (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4"
                            >
                              <span className="text-white text-4xl">✓</span>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
                            <p className="text-gray-600 text-center mb-6 px-4">
                              ${totalAmount.toFixed(2)} paid to {purchaseScenario.store}
                            </p>
                            <button
                              onClick={resetFlow}
                              className="bg-blue-600 text-white rounded-xl py-3 px-6 font-semibold"
                            >
                              Try Again
                            </button>
                          </motion.div>
                      )}
                      </AnimatePresence>

                      {/* Home Button Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Code Input Panel - Right Side */}
            <div className="flex-1 w-full lg:w-auto">
              {currentView === "ziepx" && (
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200"
              >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Enter ZIEPX Code
                </h3>
                  
                  {/* Code Display */}
                  <div className="flex justify-center gap-2 mb-6">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <div
                        key={idx}
                        className={`w-12 h-14 rounded-lg border-2 flex items-center justify-center text-2xl font-bold ${
                          enteredCode[idx]
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-gray-300 bg-white text-gray-400"
                        }`}
                      >
                        {enteredCode[idx] || ""}
                      </div>
                    ))}
                  </div>

                  {/* Number Pad */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                        key={num}
                        onClick={() => handleCodeInput(num.toString())}
                        className="py-4 bg-white border-2 border-gray-300 rounded-xl font-bold text-xl text-gray-800 hover:bg-gray-50 hover:border-blue-500 transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={handleCodeDelete}
                      className="py-4 bg-white border-2 border-gray-300 rounded-xl font-bold text-lg text-gray-800 hover:bg-gray-50 hover:border-red-500 transition-colors"
                    >
                      ⌫
                    </button>
                    <button
                      onClick={() => handleCodeInput("0")}
                      className="py-4 bg-white border-2 border-gray-300 rounded-xl font-bold text-xl text-gray-800 hover:bg-gray-50 hover:border-blue-500 transition-colors"
                    >
                      0
                </button>
                <button
                      onClick={handleConfirm}
                      disabled={enteredCode.length !== 6}
                      className={`py-4 rounded-xl font-bold text-lg transition-colors ${
                        enteredCode.length === 6
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                      Confirm
                </button>
              </div>
                </motion.div>
              )}

              {currentView !== "ziepx" && (
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Instructions</h3>
                  <div className="space-y-3 text-gray-700">
                    {currentView === "checkout" && (
                      <>
                        <p>1. Review your purchase</p>
                        <p>2. Click "Continue" to proceed</p>
                        <p>3. Open your Bank app</p>
                        <p>4. Pay with ZIEPX</p>
                      </>
                    )}
                    {currentView === "home" && (
                      <>
                        <p>1. Click the Bank app icon</p>
                        <p>2. Authenticate with Face ID</p>
                        <p>3. View your balance</p>
                        <p>4. Click "Pay with ZIEPX"</p>
                      </>
                    )}
                    {currentView === "biometric" && (
                      <p>Authenticating with Face ID...</p>
                    )}
                    {currentView === "bank" && (
                      <>
                        <p>✓ Bank app opened</p>
                        <p>✓ View your account balance</p>
                        <p>→ Click "Pay with ZIEPX" to continue</p>
                      </>
                    )}
                    {currentView === "confirm" && (
                      <p>Confirming transaction with Face ID...</p>
                    )}
                    {currentView === "success" && (
                      <>
                        <p className="text-green-600 font-semibold">✓ Payment completed!</p>
                        <p>Your balance has been updated</p>
                        <p>Click "Try Again" to start over</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
