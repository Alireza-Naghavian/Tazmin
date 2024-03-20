/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      "2xl": `1366px`,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1.625rem",
        },
      },
      colors: {
        primary: {
          900: "rgb( 74, 109, 255)",
          800: "rgb( 92, 124, 255)",
          700: "rgb(110, 138, 255)",
          600: "rgb(128, 153, 255)",
          500: "rgb(146, 167, 255)",
          400: "rgb(164, 182, 255)",
          300: "rgb(183, 197, 255)",
          200: "rgb(201, 211, 255)",
          100: "rgb(219, 226, 255)",
          50: "rgb(228, 233, 255)",
        },
        secondary: {
          900: "rgb(17, 24, 39)",
          800: "rgb(31, 41, 55)",
          700: "rgb(55, 65, 81)",
          600: "rgb(75, 85, 99)",
          500: "rgb(107, 114, 128 )",
          400: "rgb( 156, 163, 175)",
          300: "rgb( 209, 213, 219)",
          200: "rgb(229, 231, 235 )",
          100: "rgb( 243, 244, 246)",
          50: "rgb(249, 250, 251 )",
          0: "rbg(255, 255, 255)",
        },
        success: "rbg(0, 192, 115)",
        warning: "rgb(255, 153, 0)",
        error: "rgb( 255, 71, 87)",
        black_base: "rgb(16,24,40)",
        gray_base :"rgb(95, 100, 104)",
        hover:"rgba(215, 216, 217, 0.2)",
        blue_base:"rgb(37, 170, 225)"
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaBold: "Dana DemiBold",
        Lalezar: "Lalezar",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(`child`, `&>*`);
      addVariant(`child-hover`, `&>*:hover`);
    },
  ],
};
