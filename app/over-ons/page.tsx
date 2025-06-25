import Image from 'next/image';

const stats = [
    { number: '50+', label: 'Jaar ervaring', description: 'als ambachtelijke bakkerij' },
    { number: '3650', label: 'Broden', description: 'gebakken per week' },
    { number: '6', label: 'Dagen', description: 'per week vers gebakken' },
    { number: '3', label: 'Generaties', description: 'familiebedrijf' },
];

const testimonials = [
    {
        quote: "De lekkerste broodjes uit de regio. Elke dag weer vers en met zorg bereid.",
        author: "Marie van Dijk",
        role: "Vaste klant"
    },
    {
        quote: "Hun desembrood is ongeëvenaard. Je proeft het vakmanschap in elk product.",
        author: "Peter de Vries",
        role: "Lokale chef-kok"
    },
    {
        quote: "Al jaren komen wij hier voor ons dagelijks brood. De kwaliteit is constant hoog.",
        author: "Familie Jansen",
        role: "Trouwe klanten"
    }
];

const timeline = [
    {
        year: "1973",
        title: "Oprichting",
        description: "Het Witte Bolletje wordt opgericht in het hart van onze stad."
    },
    {
        year: "1995",
        title: "Tweede Generatie",
        description: "De tweede generatie neemt het roer over en moderniseert de bakkerij."
    },
    {
        year: "2010",
        title: "Uitbreiding",
        description: "Opening van onze tweede vestiging en uitbreiding van het assortiment."
    },
    {
        year: "2023",
        title: "Innovatie",
        description: "Lancering van onze online bestelservice en vernieuwde winkelconcept."
    }
];

export default function AboutUs() {
    return (
        <div className="bg-bakery-cream">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Bakkerij werkplaats"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                        Over Ons
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Al meer dan 50 jaar uw ambachtelijke bakker
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="font-display text-3xl text-bakery-brown mb-6">
                            Onze Passie voor Bakken
                        </h2>
                        <p className="text-bakery-brown/80 mb-4">
                            Wij zijn Het Witte Bolletje, een ambachtelijke bakkerij met een rijke geschiedenis in het maken van gezonde broden,
                            ovenverse snacks en het lekkerste patisserie. In onze winkels vindt u een uitgebreid assortiment aan verse producten,
                            van knapperige broodjes tot verfijnde taarten.
                        </p>
                        <p className="text-bakery-brown/80">
                            Elke dag staan onze bakkers vroeg op om met passie de lekkerste producten te maken met de beste ingrediënten.
                            Van traditioneel desembrood tot moderne creaties - bij ons vindt u kwaliteit die u proeft.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1658040528782-eca4ba3cd57d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Bakker aan het werk"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="font-display text-4xl text-bakery-brown mb-2">
                                {stat.number}
                            </div>
                            <div className="font-bold text-bakery-brown mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-bakery-brown/70">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="mb-16">
                    <h2 className="font-display text-3xl text-bakery-brown text-center mb-12">
                        Onze Geschichte
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-bakery-brown/20"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                                        <div className="font-display text-2xl text-bakery-brown mb-2">
                                            {item.year}
                                        </div>
                                        <div className="font-bold text-bakery-brown mb-1">
                                            {item.title}
                                        </div>
                                        <div className="text-bakery-brown/70">
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bakery-gold rounded-full border-4 border-white"></div>
                                    <div className="w-full md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h2 className="font-display text-3xl text-bakery-brown text-center mb-12">
                        Wat Onze Klanten Zeggen
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-bakery-brown/80 mb-4">
                                    "{testimonial.quote}"
                                </div>
                                <div className="font-bold text-bakery-brown">
                                    {testimonial.author}
                                </div>
                                <div className="text-sm text-bakery-brown/70">
                                    {testimonial.role}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 