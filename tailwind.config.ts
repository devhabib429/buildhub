import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grid: {
          '0%': { transform: 'translateY(0) scale(150%) rotate(-6deg)' },
          '100%': { transform: 'translateY(-50px) scale(150%) rotate(-6deg)' },
        },
        'float-code': {
          '0%': { transform: 'translate(0, 0) rotate(var(--tw-rotate))' },
          '50%': { transform: 'translate(20px, -20px) rotate(calc(var(--tw-rotate) + 2deg))' },
          '100%': { transform: 'translate(0, 0) rotate(var(--tw-rotate))' },
        },
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        grid: 'grid 20s linear infinite',
        'float-code': 'float-code 15s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
