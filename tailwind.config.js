/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient":
          "linear-gradient(90deg, rgba(217, 217, 217, 0.34) 0%, rgba(115, 115, 115, 0.34) 100%)",
        "products-gradient":
          "linear-gradient(180deg, #5C6672 0%, #000 187.21%);",
        "productsList-gradient":
          "linear-gradient(90deg, rgba(217, 217, 217, 0.10) 0%, rgba(115, 115, 115, 0.10) 100%);",
        "custom-gradient-img":
          "linear-gradient(to left, #FFF, rgba(255, 255, 255, 0.00))",
        products: "linear-gradient(to bottom, #4E5864,#4E5864)",
        socials: "linear-gradient(90deg, #F7941D 0%, #2065A3 100%)",
      },
      boxShadow: {
        custom: "10px 20px 20px 0px rgba(110, 96, 69, 0.39)",
        btn: "0px 15px 12.5px 0px rgba(64, 64, 64, 0.11)",
        btnsb: "15px 15px 25px 0px rgba(112, 66, 220, 0.17)",
        video: "-30px 20px 20px 0px rgba(0, 0, 0, 0.34);",
        filterShadow: "0px 41px 36.5px -39px rgba(0, 0, 0, 0.16)",
        shadowCrt: "0px 0px 12.9px -2px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        custom: "10px",
      },
      screens: {
        xs: "480px",
      },
      colors: {
        textPrimary: "#090909",
        textSecondary: "#1F1F1F",
        textMain: "#000",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
