module.exports = {
  mode: "jit", 
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      animation: ["group-hover"], 
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
