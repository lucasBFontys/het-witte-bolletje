'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold text-primary">
                        Het Witte Bolletje
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/assortiment" className="text-gray-600 hover:text-primary transition-colors">
                            Assortiment
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
                        onClick={handleToggle}
                        aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
                    >
                        {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
                                onClick={handleToggle}
                            >
                                Home
                            </Link>
                            <Link
                                href="/assortiment"
                                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
                                onClick={handleToggle}
                            >
                                Assortiment
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
                                onClick={handleToggle}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation 