/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myfontcolor: "var(--text)",
        backgroundcolor: "var(--background)",
        primarycolor: "var(--primary)",

        secondarycolor: "var(--secondary)",
        accentcolor: "var(--accent)",
      },
    },
  },
  plugins: [],
};
