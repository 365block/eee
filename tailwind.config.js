module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f3f4",
          200: "#eeeeee",
          300: "#dddddd",
          500: "#999999",
          700: "#666666",
          "200_01": "#ededed",
        },
        blue_gray: { 100: "#cccccc", 900: "#333333" },
        blue: { 800: "#0555cd" },
        red: { 500: "#ef4836", A700: "#b80000" },
        green: { A700: "#2ac96e" },
        black: {
          900: "#101010",
          "900_33": "#00000033",
          "900_19": "#00000019",
          "900_14": "#00000014",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { nanumsquareac: "NanumSquare_ac", klavika: "Klavika" },
      boxShadow: {
        bs1: "4px 4px  20px 0px #00000014",
        bs: "4px 4px  20px 0px #00000019",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
