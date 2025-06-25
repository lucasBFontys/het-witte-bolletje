'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
    // Add a small animation effect when the page loads
    useEffect(() => {
        const timer = setTimeout(() => {
            const crumb = document.querySelector('.bread-crumb');
            if (crumb) {
                crumb.classList.add('opacity-100', 'translate-y-0');
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-bakery-cream px-4">
            <div className="text-center max-w-2xl">


                {/* Main heading with playful message */}
                <h1 className="font-display text-4xl md:text-6xl text-bakery-brown mb-4">
                    Oeps! Deze pagina is nog niet gebakken
                </h1>

                {/* Subheading with bakery pun */}
                <p className="text-xl md:text-2xl text-bakery-brown/70 mb-8">
                    Het lijkt erop dat deze pagina nog in de oven zit...
                    of misschien hebben we het recept verloren! 🥖
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="h-0.5 w-12 bg-bakery-gold"></div>
                    <svg
                        className="w-6 h-6 text-bakery-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12,11Z" />
                    </svg>
                    <div className="h-0.5 w-12 bg-bakery-gold"></div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-bakery-brown hover:bg-bakery-brown/90 text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        Terug naar de Bakkerij
                    </Link>
                    <Link
                        href="/assortiment"
                        className="bg-bakery-gold hover:bg-bakery-accent text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        Bekijk ons Assortiment
                    </Link>
                </div>

                {/* Fun fact */}
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg inline-block">
                    <p className="text-bakery-brown/80 text-sm">
                        <span className="font-bold">Wist je dat?</span> Terwijl je wacht,
                        bakken onze bakkers elke dag meer dan 100 verse broden! 🍞
                    </p>
                </div>
            </div>
        </div>
    );
} 