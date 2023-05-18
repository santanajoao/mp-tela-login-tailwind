/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        moutainSky: 'url(/mountains-sky.jpg)'
      }
    },
  },
  plugins: [],
}
