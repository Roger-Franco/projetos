/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {pattern: /from-(green|blue|gray)-(400|500|700)/,},
    {pattern: /to-(green|blue|gray)-(400|500|700)/,},
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

