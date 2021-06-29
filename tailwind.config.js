module.exports = {
  mode: "jit",  // this could be the err however I tried removing it and it didn't change a thing
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],  //this should be rm together with jit
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      animation: ["group-hover"], 
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
