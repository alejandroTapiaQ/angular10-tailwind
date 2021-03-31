module.exports = {
  prefix: 'tw-',
  important: true,
  purge: {
    enabled: false,
    content: ['./index.html', './src/**/*.{vue,html,js,scss,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        error: 'var(--color-danger)',
        'main-text': 'var(--color-main-text)'
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
