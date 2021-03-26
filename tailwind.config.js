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
        danger: 'var(--color-danger)',
        'default-background': 'var(--background-default)',
        'base-background': 'var(--background-base)',
        'light-background': 'var(--background-light)',
        'dark-background': 'var(--background-dark)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
        'success-text': 'var(--color-text-success)',
        'info-text': 'var(--color-text-info)',
        'warning-text': 'var(--color-text-warning)',
        'danger-text': 'var(--color-text-danger)',
        'default-text': 'var(--color-text-default)',
        
        // primary: 'var(--color-primary)',
        // secondary: 'var(--color-secondary)',
        // negative: 'var(--color-negative)',
        // positive: 'var(--color-positive)',
        // 'primary-background': 'var(--background-primary)',
        // 'sec-background': 'var(--background-sec)',
        // 'primary-text': 'var(--color-text-primary)',
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
