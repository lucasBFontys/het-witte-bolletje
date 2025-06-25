import Image from 'next/image'
import Link from 'next/link'

const products = [
    {
        name: "Vers Brood",
        price: "€3,50",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        description: "Dagelijks vers gebakken brood"
    },
    {
        name: "Aardbeiengebak",
        price: "€2,95",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        description: "Heerlijk vers fruit gebak"
    },
    {
        name: "Borrelbrood",
        price: "€4,95",
        img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        description: "Perfect voor bij de borrel"
    },
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Bakkerij achtergrond"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
                        Met liefde gebakken
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Proef het verschil van ambachtelijk brood en gebak, elke dag vers uit onze bakkerij
                    </p>
                    <Link
                        href="/assortiment"
                        className="bg-bakery-gold hover:bg-bakery-accent text-white font-bold px-8 py-3 rounded-full shadow-lg transition duration-300 inline-block"
                    >
                        Bekijk ons assortiment
                    </Link>
                </div>
            </section>

            {/* Products Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="font-display text-3xl text-bakery-brown text-center mb-12">
                    Onze Specialiteiten
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center 
                                     hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-bakery-gold">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-display text-xl text-bakery-brown mb-2">
                                {product.name}
                            </h3>
                            <p className="text-bakery-brown/70 text-center mb-4">
                                {product.description}
                            </p>
                            <span className="text-bakery-brown font-bold mb-4">
                                {product.price}
                            </span>
                            <button className="bg-bakery-brown text-white px-6 py-2 rounded-full 
                                             hover:bg-bakery-gold transition duration-300">
                                Bestel nu
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section with Images */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="mb-4 relative w-24 h-24 mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Vers brood"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="font-display text-xl text-bakery-brown mb-3">
                                Dagelijks Vers
                            </h3>
                            <p className="text-bakery-brown/70">
                                Elke dag vers gebakken brood en gebak
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 relative w-24 h-24 mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Ambachtelijk bakken"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="font-display text-xl text-bakery-brown mb-3">
                                Ambachtelijk
                            </h3>
                            <p className="text-bakery-brown/70">
                                Traditionele recepten met moderne twist
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4 relative w-24 h-24 mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Bezorging"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="font-display text-xl text-bakery-brown mb-3">
                                Bezorging
                            </h3>
                            <p className="text-bakery-brown/70">
                                Voor 15:30 besteld, morgen in huis
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 