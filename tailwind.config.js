/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'custom-bg': "url('https://i.ibb.co.com/QcXH0K8/a-similar-image-for-website-background-1.jpg')", },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

