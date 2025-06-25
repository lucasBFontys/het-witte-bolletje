'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" tabIndex={0} aria-label="Ga naar homepagina" onKeyDown={e => { if (e.key === 'Enter') window.location.href = '/' }}>
                        <Image
                            src="/products/logo.png"
                            alt="Logo van Het Witte Bolletje: illustratie van brood, croissants en bakkerijgereedschap"
                            width={50}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                        <span className="ml-3 text-xl font-display text-bakery-brown">
                            Het Witte Bolletje
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/assortiment">Assortiment</NavLink>
                        <NavLink href="/over-ons">Over Ons</NavLink>
                        <NavLink href="/contact">Contact & Bestellen</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-bakery-brown hover:text-bakery-gold"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="/assortiment">Assortiment</MobileNavLink>
                            <MobileNavLink href="/over-ons">Over Ons</MobileNavLink>
                            <MobileNavLink href="/contact">Contact</MobileNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-bakery-brown hover:text-bakery-gold transition duration-200"
    >
        {children}
    </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="block px-3 py-2 rounded-md text-base font-medium text-bakery-brown hover:text-bakery-gold hover:bg-gray-50 transition duration-200"
    >
        {children}
    </Link>
)

export default Navigation 