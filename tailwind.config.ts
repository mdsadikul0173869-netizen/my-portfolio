import type { Config } from "tailwindcss";

const config: Config = {
  // আপনার প্রজেক্টের সব ফাইল স্ক্যান করার জন্য সঠিক পাথ
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // কাস্টম এনিমেশন সেটআপ
      animation: {
        blob: "blob 7s infinite",
      },
      // এনিমেশনের মুভমেন্ট লজিক
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      // এক্সট্রা রাউন্ডেড কর্নার (v4 স্টাইল সাপোর্ট)
      borderRadius: {
        '4xl': '2rem', // ৩২ পিক্সেলের সমান
      },
    },
  },
  plugins: [],
};

export default config;