/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          focus: 'var(--color-primary-focus)',
        },
        secondary: 'var(--color-secondary)',
        
        text: 'var(--color-text)',
        'text-offset': 'var(--color-text-offset)',
        'text-muted': 'var(--color-text-muted)',
        
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
        
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
    },
  },
  plugins: [],
};
