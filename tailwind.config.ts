import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-dark": "#FF7205",
        "orange-light": "#FF9405",
        "orange-semi-light": "#FFA122",
        
        "blue-dark": "#0F2844",
        "blue-light": "#FF9405",

        "title": "#E4E4E7",
        "body": "#A1A1AA",

        fund: "#03090F",
      },
    },
    fontFamily: {
      lufga: ['var(--font-lufga)'],
    }
  },
  plugins: [],
};

export default config;
