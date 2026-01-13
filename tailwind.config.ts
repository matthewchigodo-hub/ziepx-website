import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#191C1F", // Shark - Revolut primary
          DEFAULT: "#1e293b",
          light: "#334155",
          lighter: "#FFFFFF", // White background
        },
        accent: {
          purple: "#9539F2", // Revolut purple
          blue: "#7F84F6", // Cornflower Blue - Revolut signature
          cyan: "#2685BF", // Amalfi Blue
          teal: "#14b8a6",
          lime: "#BFFF37", // Revolut lime for "new" features
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-revolut": "linear-gradient(135deg, #2685BF 0%, #14b8a6 100%)", // Amalfi to teal
        "gradient-revolut-alt": "linear-gradient(135deg, #7F84F6 0%, #9539F2 100%)", // Cornflower to purple
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Using Inter as Revolut Sans alternative
      },
      letterSpacing: {
        'tight-revolut': '-0.02em', // Revolut tight letter spacing
      },
      borderRadius: {
        'revolut': '24px', // Revolut card radius
        'revolut-lg': '32px', // Larger Revolut radius
      },
    },
  },
  plugins: [],
};
export default config;
