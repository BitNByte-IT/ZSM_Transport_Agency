/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1E6F3C",
          greenLight: "#34A853",
          blue: "#0D47A1",
          blueLight: "#1565C0",
          yellow: "#FFC107",
          yellowDeep: "#FFA000",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        bangla: ["var(--font-bangla)", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.9s ease-out forwards",
        slideRight: "slideRight 0.7s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
