/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgHeader: "#F8F8F6",
        bgHeader2: "#F4F1ED",
        textColor: "#122947",
        textColor2: "#9A9DA0",
      },
      backgroundImage: {
        "hero-pattern": "url('/image6.png')",
        "hero-pattern2": "url('/image11.png')",
        "hero-pattern3": "url('/image13.png')",
      },
    },
  },
  plugins: [],
};
