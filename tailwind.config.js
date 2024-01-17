/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)"
      },
    },
  },
  plugins: [],
}

