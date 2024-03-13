import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes : {
        adslide: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '20%': {
            transform: 'translateX(0%)',
          },
          '40%': {
            transform: 'translateX(-100%)  ',
          },
          '60%': {
            transform: 'translateX(-100%)  ',
          },
          '80%': {
            transform: 'translateX(-200%)  ',
          },
          '90%': {
            transform: 'translateX(-200%)  ',
          },
          '100%': {
            transform: 'translateX(0%)  ',
            }  
        }   
      },
      animation: {
        adslide: 'adslide 8s infinite'
      }
    },
  },
  plugins: [],
}
export default config
