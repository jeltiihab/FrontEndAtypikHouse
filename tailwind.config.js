module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Custom-1', 'sans-serif'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#EFF0F5',
        'secondary': '#184D47',
        'danger': '#C64756',
      })
    },
    screens: {

      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  variants: {
    display: ["group-hover"],
    textColor: ['group-hover'],
  },
  plugins: [
  ],
}
