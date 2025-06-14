export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        rosewood: '#4C2D2D',
        blush: '#FADADD',
        ivory: '#F3DDEB',
        cocoa: '#EAD5C8',
      },
    },
  },
  plugins: [],
}
