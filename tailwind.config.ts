import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'awida-green': '#054C28',
        'awida-red': '#841A25',
        'awida-gold': '#D8B138',
      },
    },
  },
  plugins: [],
}

export default config
