/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ba: ["bpg-arial"],
        ap: ["Anonymous Pro", "monospace"],
        // 'Anonymous Pro', monospace;
      },
      colors: {
        kuro: "#232323",
      },
    },
  },
  plugins: [],
};
