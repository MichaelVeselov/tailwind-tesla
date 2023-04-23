/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    screens: {
      tablet: '600px',
      desktop: '1200px',
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
    },
    extend: {
      boxShadow: {
        border: '0 2px 0 0 #181b21',
      },
      backgroundImage: (theme) => ({
        'model-3': "url('./images/model-3.jpeg')",
        'mobile-model-3': "url('./images/mobile-model-3.jpeg')",
        'model-s': "url('./images/model-s.jpeg')",
        'mobile-model-s': "url('./images/mobile-model-s.jpeg')",
        'model-y': "url('./images/model-y.jpeg')",
        'mobile-model-y': "url('./images/mobile-model-y.jpeg')",
        'model-x': "url('./images/model-x.jpeg')",
        'mobile-model-x': "url('./images/mobile-model-x.jpeg')",
        'solar-panels': "url('./images/solar-panels.jpeg')",
        'mobile-solar-panels': "url('./images/mobile-solar-panels.jpeg')",
        'solar-roof': "url('./images/solar-roof.jpeg')",
        'mobile-solar-roof': "url('./images/mobile-solar-roof.jpeg')",
        accessories: "url('./images/accessories.jpeg')",
        'mobile-accessories': "url('./images/mobile-accessories.jpeg')",
      }),
      fontFamily: {
        ubuntu: ['Ubuntu'],
        figtree: ['Figtree'],
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
