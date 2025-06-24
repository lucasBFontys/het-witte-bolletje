import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/app/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Het Witte Bolletje',
    description: 'Ambachtelijke bakkerij met verse broden, taarten en koekjes',
    manifest: '/manifest.json',
    themeColor: '#facc15',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Het witte bolletje',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    icons: {
        apple: [
            { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="nl">
            <body className={`${inter.variable} font-sans`}>
                <Navigation />
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    )
} 