/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
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
        'model-3': "url('../dist/images/model-3.jpeg')",
        'mobile-model-3': "url('../dist/images/mobile-model-3.jpeg')",
        'model-s': "url('../dist/images/model-s.jpeg')",
        'mobile-model-s': "url('../dist/images/mobile-model-s.jpeg')",
        'model-y': "url('../dist/images/model-y.jpeg')",
        'mobile-model-y': "url('../dist/images/mobile-model-y.jpeg')",
        'model-x': "url('../dist/images/model-x.jpeg')",
        'mobile-model-x': "url('../dist/images/mobile-model-x.jpeg')",
        'solar-panels': "url('../dist/images/solar-panels.jpeg')",
        'mobile-solar-panels': "url('../dist/images/mobile-solar-panels.jpeg')",
        'solar-roof': "url('../dist/images/solar-roof.jpeg')",
        'mobile-solar-roof': "url('../dist/images/mobile-solar-roof.jpeg')",
        accessories: "url('../dist/images/accessories.jpeg')",
        'mobile-accessories': "url('../dist/images/mobile-accessories.jpeg')",
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
