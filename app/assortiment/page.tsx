'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import productsData from '../data/products.json';

// Product categories with icons
const categories = [
    { id: 'brood', name: 'Brood', icon: '🍞' },
    { id: 'gebak', name: 'Gebak', icon: '🍰' },
    { id: 'broodjes', name: 'Broodjes', icon: '🥐' },
    { id: 'taarten', name: 'Taarten', icon: '🎂' },
    { id: 'koekjes', name: 'Koekjes', icon: '🍪' },
    { id: 'seizoen', name: 'Seizoensproducten', icon: '🎄' },
] as const;

type CategoryId = (typeof categories)[number]['id'];

// Dietary filters
const filters = [
    { id: 'glutenvrij', name: 'Glutenvrij' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'lactosevrij', name: 'Lactosevrij' },
] as const;

type FilterId = (typeof filters)[number]['id'];

interface Product {
    id: number;
    name: string;
    category: CategoryId;
    price: string;
    image: string;
    description: string;
    tags: FilterId[];
    bestseller?: boolean;
    seasonal?: boolean;
}

export default function Assortiment() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | ''>('');
    const [selectedFilters, setSelectedFilters] = useState<FilterId[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on selection
    const filteredProducts = (productsData.products as Product[]).filter(product => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesFilters = selectedFilters.length === 0 ||
            selectedFilters.every(filter => product.tags.includes(filter));
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesFilters && matchesSearch;
    });

    // Toggle filter selection
    const toggleFilter = (filterId: FilterId) => {
        setSelectedFilters(prev =>
            prev.includes(filterId)
                ? prev.filter(f => f !== filterId)
                : [...prev, filterId]
        );
    };

    return (
        <div className="min-h-screen bg-bakery-cream">
            {/* Hero Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="font-display text-4xl text-bakery-brown mb-4">
                        Ons Assortiment
                    </h1>
                    <p className="text-bakery-brown/70 max-w-2xl">
                        Ontdek ons verse assortiment aan brood, gebak en andere lekkernijen.
                        Dagelijks met zorg bereid door onze bakkers.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Zoek in ons assortiment..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <svg
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Category Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(
                                    selectedCategory === category.id ? '' : category.id
                                )}
                                className={`p-4 rounded-xl text-center transition-all duration-200 ${selectedCategory === category.id
                                    ? 'bg-bakery-brown text-white shadow-lg scale-105'
                                    : 'bg-gray-50 text-bakery-brown hover:bg-gray-100'
                                    }`}
                            >
                                <span className="text-2xl mb-2 block">{category.icon}</span>
                                <span className="text-sm font-medium">{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => toggleFilter(filter.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedFilters.includes(filter.id)
                                    ? 'bg-bakery-gold text-white'
                                    : 'bg-gray-100 text-bakery-brown hover:bg-gray-200'
                                    }`}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                        >
                            {/* Product Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {product.bestseller && (
                                    <div className="absolute top-4 right-4 bg-bakery-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Bestseller
                                    </div>
                                )}
                                {product.seasonal && (
                                    <div className="absolute top-4 right-4 bg-bakery-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Seizoensproduct
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="font-display text-xl text-bakery-brown mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-bakery-brown/70 text-sm mb-4">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-bakery-brown font-bold">
                                        €{product.price}
                                    </span>
                                    <button className="bg-bakery-brown text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-bakery-brown/90 transition-colors duration-200">
                                        Bestellen
                                    </button>
                                </div>
                                {product.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {product.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-gray-100 text-bakery-brown/70 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-bakery-brown/70 text-lg">
                            Geen producten gevonden voor deze selectie.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
} 