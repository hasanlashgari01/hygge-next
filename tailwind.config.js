/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        100: "#00CC96",
        10: "#00CC9610",
      },
      secondary: {
        100: "#2975FF",
        10: "#2975FF10",
      },
      tertiary: {
        100: "#FFC123",
        10: "#FFC12310",
      },
      tertiary_2: {
        100: "#FF66A0",
        10: "#FF66A010",
      },
      accent: "#F6F7FB",
      accent_2: "#FF0000",
      white: "#FFFFFF",
      black: {
        1: "#000000",
        2: "#1E1E27",
        3: "#14141B",
        4: "#2C2C37",
      },
      dark: {
        100: "#1A202C",
        64: "#1A202C64",
        40: "#1A202C40",
        24: "#1A202C24",
      },
      light: {
        100: "#F7FAFC",
        64: "#F7FAFC64",
        40: "#F7FAFC40",
        24: "#F7FAFC24",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        // sm: "3rem",
        md: "2.5rem",
        lg: "3rem",
        "2xl": "6rem",
      },
    },

    extend: {
      screens: {
        md: "768px",
        "2xl": "1440px",
      },
      backgroundImage: {
        hero: "url('/public/images/hero/hero.png')",
        heroTablet: "url('/public/images/hero/hero-md.png')",
        heroLaptop: "url('/public/images/hero/hero-lg.png')",
        heroDesktop: "url('/public/images/hero/hero-2xl.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
