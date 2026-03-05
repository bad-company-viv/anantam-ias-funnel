/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b1220',
          900: '#111c2f',
          800: '#1a2a40',
          700: '#253650',
          600: '#334968',
          500: '#4b6487',
          200: '#c4d1e0',
          100: '#dde6f1',
          50: '#eef3f9',
        },
        saffron: {
          700: '#8f5d08',
          600: '#a66d0a',
          500: '#bf8212',
          400: '#d59a2f',
          100: '#f5e6c8',
          50: '#fbf6ec',
        },
        sand: {
          100: '#f5f2eb',
          50: '#faf8f3',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Avenir Next', 'Segoe UI', 'sans-serif'],
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        panel: '0 18px 45px -28px rgba(17, 28, 47, 0.55)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
