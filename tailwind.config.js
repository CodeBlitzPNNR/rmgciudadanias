/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero': "url('/src/assets/bg-hero.svg')",
      },
      colors: {
        text: '#140d0d',
        background: '#ffffff',
        primary: '#a60827',
        secondary: '#487030',
        accent: '#bacc67',
      },
      fontFamily: {
        custom: ['"Poppins"', 'serif'],
        roboto: ['"Roboto"', 'Poppins'],
      },
    },
  },
  plugins: [],
};
