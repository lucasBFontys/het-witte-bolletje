import Image from 'next/image'

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Welkom bij Het Witte Bolletje
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Ambachtelijk brood en gebak, vers uit de oven
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Vers gebakken brood in onze bakkerij"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        Onze Passie voor Bakken
                    </h2>
                    <p className="text-gray-600">
                        Al meer dan 30 jaar staat Het Witte Bolletje bekend om zijn heerlijke verse brood en gebak.
                        Elke dag staan onze bakkers vroeg op om de lekkerste producten te maken met de beste ingrediënten.
                    </p>
                    <p className="text-gray-600">
                        Van knapperige stokbroden tot zoete lekkernijen - bij ons vindt u alles wat uw hart begeert.
                        Kom langs en ervaar zelf waarom onze klanten al jaren terugkomen voor onze ambachtelijke producten.
                    </p>
                </div>
            </div>
        </div>
    )
} 