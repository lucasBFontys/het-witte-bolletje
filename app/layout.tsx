import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
    style: ['normal', 'italic']
})

export const metadata: Metadata = {
    title: 'Het Witte Bolletje - Ambachtelijke Bakkerij',
    description: 'Ambachtelijke bakkerij met vers brood, gebak en andere lekkernijen',
    icons: {
        icon: [
            {
                url: '/products/bread.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                url: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        apple: [
            {
                url: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
    manifest: '/manifest.json',
    themeColor: '#F5F0E8',
    viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="nl">
            <body className={`${inter.variable} ${lora.variable} font-sans min-h-screen bg-bakery-cream flex flex-col`}>
                <Navigation />
                <main className="container mx-auto px-4 py-8 flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
} 