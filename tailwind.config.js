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
        layer: "#07080d",
        first: "#FFF1E6",
        second: "#FF933F",
        secondDark: "#FF7000",
        layerLight: "#11151c",
        highlight: "#87e0ff",
        input: "#151821",
      },
    },
  },
}
