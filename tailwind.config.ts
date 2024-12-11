import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redPantone: 'var(--red-pantone)',
        babyPowder: 'var(--baby-powder)',
        nonPhotoBlue: 'var(--non-photo-blue)',
        cerulean: 'var(--cerulean)',
        berkeleyBlue: 'var(--berkeley-blue)',
      },
    },
  },
  plugins: [],
} satisfies Config;
