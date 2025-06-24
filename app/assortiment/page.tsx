import Image from 'next/image'

const products = [
    {
        id: 1,
        name: 'Ambachtelijk Brood',
        description: 'Vers gebakken broden van de beste kwaliteit. Van volkoren tot wit, van stokbrood tot pistolets.',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        name: 'Taarten & Gebak',
        description: 'Heerlijke taarten en gebak voor elke gelegenheid. Bereid met verse ingrediënten en veel liefde.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        name: 'Koekjes & Lekkernijen',
        description: 'Zoete lekkernijen voor bij de koffie of thee. Van klassieke koekjes tot luxe chocoladewerk.',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
]

export default function Assortiment() {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-primary text-center mb-12">
                Ons Assortiment
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-primary mb-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 