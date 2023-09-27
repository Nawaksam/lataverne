/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        taverne: {
          primary: "#1E698A", // blue
          secondary: "#FAC150", // honey
          accent: "#7B2705", // chocolate
          neutral: "#B1B1B1", // silver
          "base-100": "#F4DBBD", //f5efed creamwhite
          info: "#2274A5",
          success: "#135e45",
          warning: "#dd7b03",
          error: "#AD0C41",
        },
      },
      {
        taverneDark: {
          primary: "#1E698A", // blue
          secondary: "#FAC150", // honey
          accent: "#7B2705", // chocolate
          neutral: "#B1B1B1", // silver
          "base-100": "#292524", //f5efed creamwhite
          info: "#2274A5",
          success: "#135e45",
          warning: "#dd7b03",
          error: "#AD0C41",
        },
      },
    ],
    darkTheme: "taverneDark",
  },
  plugins: [require("daisyui")],
};
