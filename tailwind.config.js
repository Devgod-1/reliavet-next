/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Adds Poppins to Tailwind's 'font-sans'
      },
      colors: {
        red: {
          primary: "#DE1E33",
        },
        primary: { DEFAULT: "#243A8E" },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        customgradient:
          'linear-gradient(95.46deg, rgba(105, 175, 255, 0.2) 0.57%, rgba(0, 72, 255, 0.2) 99.43%)',
        bgPrimaryGradient:
          "linear-gradient(91.73deg, #243a8e 42.1%, #0065ff 91.59%)",
        bgPrimaryGradient2:
          "linear-gradient(266.36deg, #243a8e 3.07%, #3f8eff 96.93%)",
        bgPrimaryGradientRed:
          "linear-gradient(90.59deg, #de1e33 6.21%, #243a8e 93.79%)",
        bgPrimaryGradientRed2:
          "linear-gradient(88.56deg, #DE1E33 58.02%, #851113 125.13%)",
      },
    },
  },
  plugins: [],
};
