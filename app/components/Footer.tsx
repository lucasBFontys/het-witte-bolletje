'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-bakery-brown text-white py-10 mt-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="font-display text-xl mb-4">Contact</h2>
                    <ul className="space-y-2 text-bakery-cream/90">
                        <li>Bakkerijstraat 123</li>
                        <li>5011 AA Tilburg</li>
                        <li>Tel: 013-1234567</li>
                        <li>Email: <a href="mailto:info@hetwittebolletje.nl" className="underline">info@hetwittebolletje.nl</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-display text-xl mb-4">Openingstijden</h2>
                    <ul className="space-y-2 text-bakery-cream/90">
                        <li>Maandag t/m vrijdag: 08:00 - 18:00</li>
                        <li>Zaterdag: 08:00 - 16:00</li>
                        <li>Zondag: Gesloten</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-display text-xl mb-4">Navigatie</h2>
                    <ul className="space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/assortiment">Assortiment</Link></li>
                        <li><Link href="/over-ons">Over Ons</Link></li>
                        <li><Link href="/contact">Contact & Bestellen</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-bakery-cream/70 mt-8 text-sm">
                &copy; {new Date().getFullYear()} Het Witte Bolletje. Alle rechten voorbehouden.
            </div>
        </footer>
    );
} 