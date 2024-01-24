/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        icons: "#4c7bcd",
        bg_color: "rgb(58, 70, 139)",
        dimWhite: "rgba(255, 255, 255, 0.7)"
      },
      fontFamily: {
        'head': ['Rubik Doodle Shadow', 'system-ui'],
        'font_tiny': ['Shantell Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}

