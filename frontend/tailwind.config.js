/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],  // Añade la fuente aquí
    },
  },
  },
  "editor.quickSuggestions": {
  "strings": "on"
},
  plugins: [],
}
