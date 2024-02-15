/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4k": "3840px", // Custom 4k breakpoint
        "2xl": "2040px", // Custom 2xl breakpoint
        "2xs": "320px", // Custom 2xs breakpoint
        custom: "409px", // Custom xs breakpoint
        xs: "376px",
      },
    },
  },
  plugins: [],
};
