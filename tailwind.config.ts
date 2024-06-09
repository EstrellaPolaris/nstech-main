import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#85f043',
          500: '#56d40e',
          600: '#3FAA06'

        },
        violet: {
          300: '#b7b1ff',
          500: '#6a4dff',
          600: '',
        },
      }
    },
  },
  plugins: [],
});

export default config;
