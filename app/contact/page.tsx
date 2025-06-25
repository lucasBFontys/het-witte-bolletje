'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import productsData from '../data/products.json'

type OrderItem = {
    productId: number
    quantity: number
    notes: string
}

export default function Contact() {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        pickupDate: '',
        pickupTime: '09:00',
    })

    const handleAddProduct = (productId: number) => {
        setOrderItems(prev => {
            const exists = prev.find(item => item.productId === productId)
            if (exists) {
                return prev.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { productId, quantity: 1, notes: '' }]
        })
    }

    const handleUpdateQuantity = (productId: number, quantity: number) => {
        if (quantity === 0) {
            setOrderItems(prev => prev.filter(item => item.productId !== productId))
        } else {
            setOrderItems(prev =>
                prev.map(item =>
                    item.productId === productId ? { ...item, quantity } : item
                )
            )
        }
    }

    const handleUpdateNotes = (productId: number, notes: string) => {
        setOrderItems(prev =>
            prev.map(item =>
                item.productId === productId ? { ...item, notes } : item
            )
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Hier zou de verzendlogica komen
        console.log('Form submitted:', { formData, orderItems })
    }

    const getTotalPrice = () => {
        return orderItems.reduce((total, item) => {
            const product = productsData.products.find(p => p.id === item.productId)
            return total + (product ? parseFloat(product.price) * item.quantity : 0)
        }, 0)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Informatie */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                >
                    <h1 className="font-display text-3xl text-bakery-brown mb-6">
                        Contact & Bestellen
                    </h1>
                    <div className="space-y-6 mb-8">
                        <div>
                            <h2 className="font-display text-xl text-bakery-brown mb-2">
                                Openingstijden
                            </h2>
                            <div className="space-y-2 text-bakery-brown/70">
                                <p>Maandag t/m vrijdag: 08:00 - 18:00</p>
                                <p>Zaterdag: 08:00 - 16:00</p>
                                <p>Zondag: Gesloten</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display text-xl text-bakery-brown mb-2">
                                Adres
                            </h2>
                            <p className="text-bakery-brown/70">
                                Bakkerijstraat 123<br />
                                5011 AA Tilburg
                            </p>
                        </div>
                        <div>
                            <h2 className="font-display text-xl text-bakery-brown mb-2">
                                Contact
                            </h2>
                            <div className="space-y-2 text-bakery-brown/70">
                                <p>Tel: 013-1234567</p>
                                <p>Email: info@hetwittebolletje.nl</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.533444841651!2d5.0871853!3d51.5602123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6be0000000001%3A0x0!2zNTHCsDMzJzM2LjgiTiA1wrAwNScxMy45IkU!5e0!3m2!1snl!2snl!4v1710835940000!5m2!1snl!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Bestelformulier */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Persoonlijke gegevens */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="font-display text-2xl text-bakery-brown mb-6">
                                Uw gegevens
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-bakery-brown mb-1">
                                        Naam
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-bakery-brown mb-1">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-bakery-brown mb-1">
                                        Telefoon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-bakery-brown mb-1">
                                        Voorkeur contact
                                    </label>
                                    <div className="flex space-x-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="email"
                                                checked={formData.preferredContact === 'email'}
                                                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                                className="mr-2"
                                            />
                                            E-mail
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="phone"
                                                checked={formData.preferredContact === 'phone'}
                                                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                                className="mr-2"
                                            />
                                            Telefoon
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bestelling */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="font-display text-2xl text-bakery-brown mb-6">
                                Uw bestelling
                            </h2>
                            <div className="space-y-4">
                                {/* Product selector */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                    {productsData.products.map((product) => (
                                        <button
                                            key={product.id}
                                            type="button"
                                            onClick={() => handleAddProduct(product.id)}
                                            className={`p-4 rounded-xl text-center transition-all duration-200 ${orderItems.some(item => item.productId === product.id)
                                                ? 'bg-bakery-brown text-white'
                                                : 'bg-gray-50 text-bakery-brown hover:bg-gray-100'
                                                }`}
                                        >
                                            <span className="block text-sm font-medium">{product.name}</span>
                                            <span className="block text-xs mt-1">€{product.price}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Geselecteerde producten */}
                                {orderItems.length > 0 && (
                                    <div className="space-y-4">
                                        {orderItems.map((item) => {
                                            const product = productsData.products.find(p => p.id === item.productId)
                                            if (!product) return null
                                            return (
                                                <div key={item.productId} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                                    <div className="flex-grow">
                                                        <h3 className="font-medium text-bakery-brown">
                                                            {product.name}
                                                        </h3>
                                                        <div className="mt-2 flex items-center space-x-4">
                                                            <div className="flex items-center space-x-2">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-bakery-brown hover:bg-gray-300"
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="w-8 text-center">{item.quantity}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-bakery-brown hover:bg-gray-300"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                            <span className="text-bakery-brown/70">
                                                                €{(parseFloat(product.price) * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Opmerkingen (optioneel)"
                                                            value={item.notes}
                                                            onChange={(e) => handleUpdateNotes(item.productId, e.target.value)}
                                                            className="mt-2 w-full px-3 py-1 text-sm rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-bakery-gold/50"
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="flex justify-between items-center font-medium text-bakery-brown pt-4 border-t">
                                            <span>Totaal</span>
                                            <span>€{getTotalPrice().toFixed(2)}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Afhaalmoment */}
                                <div className="pt-6">
                                    <h3 className="font-display text-xl text-bakery-brown mb-4">
                                        Afhaalmoment
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="pickupDate" className="block text-sm font-medium text-bakery-brown mb-1">
                                                Datum
                                            </label>
                                            <input
                                                type="date"
                                                id="pickupDate"
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                                value={formData.pickupDate}
                                                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pickupTime" className="block text-sm font-medium text-bakery-brown mb-1">
                                                Tijd
                                            </label>
                                            <select
                                                id="pickupTime"
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                                value={formData.pickupTime}
                                                onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                                            >
                                                {Array.from({ length: 21 }, (_, i) => {
                                                    const hour = Math.floor(i / 2) + 9
                                                    const minute = i % 2 === 0 ? '00' : '30'
                                                    const time = `${hour.toString().padStart(2, '0')}:${minute}`
                                                    return (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra opmerkingen */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="font-display text-2xl text-bakery-brown mb-6">
                                Extra opmerkingen
                            </h2>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                placeholder="Heeft u nog speciale wensen of opmerkingen?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        {/* Submit knop */}
                        <button
                            type="submit"
                            className="w-full bg-bakery-brown text-white font-bold py-4 px-8 rounded-full hover:bg-bakery-brown/90 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={orderItems.length === 0}
                        >
                            Bestelling plaatsen
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
} 