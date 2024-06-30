const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "#000000",
        layer: "#0F1117",
        first: "#FFF1E6",
        second: "#FF933F",
        secondDark: "#FF7000",
        input: "#151821",
      },
    },
  },
}
