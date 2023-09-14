/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: "var(--neutral)",
        "neutral-contrast": "var(--neutral-contrast)",
        "neutral-accent": "var(--neutral-accent)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--tertiary)",
      },
      keyframes: {
        uniqueTitle: {
          "0%": { backgroundColor: "#5AE1E6" }, // Cyan
          "33%": { backgroundColor: "#4287F5" }, // Bright Blue
          "66%": { backgroundColor: "#8B80F9" }, // Lavender
          "100%": { backgroundColor: "#5AE1E6" }, // Cyan again to complete loop
        },
      },
      animation: {
        uniqueTitle: "uniqueTitle 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
