/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        electric: "#3b82f6",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(15,23,42,0.9))",
      },
    },
  },
  plugins: [],
};
