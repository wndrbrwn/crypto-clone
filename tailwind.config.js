/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      backgroundImage:{"footer-back": "url('/images/bottom.png')",
    },
      colors: {
        "crypto-main": "#0A062F",
        "crypto-back": "#137499",
        "crypto-text": "#FFFFFF99",

        "techit-main": "#ff7710",
        "techit-gray": {
          50: "#f5f5f5",
          100: "#e5e5e5",
          150: "#a3a3a3",
          200: "#737373",
          300: "#222222",
        },
      },
    },
    fontFamily: {
      pretendard: ["Pretendard"],
    },
  },
  plugins: [],
};
