import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-display)', 'serif'],
            },
            colors: {
                bakery: {
                    cream: '#FFF8F0',
                    brown: '#A47551',
                    gold: '#FFD700',
                    accent: '#F7C873',
                },
            },
        },
    },
    plugins: [],
}

export default config 