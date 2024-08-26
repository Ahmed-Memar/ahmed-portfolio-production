/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   screens: {
        'sm' : '480px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
/*
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
*/