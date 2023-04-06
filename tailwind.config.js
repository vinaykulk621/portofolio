/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '540px',
      md: '760px',
      lg: '1200px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              textDecoration: 'none',
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      colors: {
        'simple-black': '#0c0c0c',
        'simple-black-2': '#171717',
        'simple-blue': '#0a2725',
        'link-col': '#ff9a00',
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        spotify: [
          'spotify-circular',
          'spotify-circular-cyrillic',
          'spotify-circular-arabic',
          'spotify-circular-hebrew',
          'Helvetica Neue',
          'helvetica',
          'arial',
          'Hiragino Kaku Gothic Pro',
          'Meiryo',
          'MS Gothic',
        ],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
