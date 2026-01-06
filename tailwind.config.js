/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#1e1e1e",
        surface: "#262626",
        border: "#333333",

        primary: "#ff5c2a",
        primaryHover: "#ff784e",

        textPrimary: "#ffffff",
        textSecondary: "#cfcfcf",
        textMuted: "#9ca3af",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"), // ✅ WORDPRESS STYLE BLOG SUPPORT
  ],
};
