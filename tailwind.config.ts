import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': { "max": "260px" },
        'mobile': { "min": "767px" },
        'tablet': { "min": "1023px" },
        'desktop': { "max": "1024px" },
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {

        // 'MenuDashboard': {
        //   light: '#61dbfb',
        //   DEFAULT: '#CCFF00',
        //   dark: '#111',
        // },
        /* black-gray:road 
        green,bronw,
        white:river,forest blue
        ,white-blue:skyclound 
        
        */

        //theme night afternoon morning evening
        test: '#0caad1',
        'primary': {
          morning: "#0caad1",
          DEFAULT: "#03cdff",
          afternoon: "#35d8f5",
          evening: "#197cce",
          night: "#0c2c70",
        },
        'secondary': {
          DEFAULT: "#fff"
        },
        'danger': {
          DEFAULT: "#ad2a2a"
        },
        'warning': {
          DEFAULT: ""
        },
        'info': {
          DEFAULT: ""
        },
        'muted': {
          DEFAULT: ""
        }

      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }],
});
export default config;
