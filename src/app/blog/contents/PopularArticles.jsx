import Image from "next/image";

export default function PopularArticles() {
    const articles = [
        {
            id: 1,
            title: "How to Maximize your Pet Hospital's Success with Virtual Vet Appointments",
            image: "/assets/images/news_pet.png?height=600&width=800",
            author: {
                name: "Viola Manisa",
                avatar: "/assets/avatars/avatar_1.png",
                isVerified: true,
            },
            date: "02 May-2024",
        },
        {
            id: 2,
            title: "How to Maximize your Pet Hospital's Success with Virtual Vet Appointments",
            image: "/assets/images/news_pet.png?height=600&width=800",
            author: {
                name: "Viola Manisa",
                avatar: "/assets/avatars/avatar_1.png",
                isVerified: true,
            },
            date: "02 May-2024",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Popular Articles</h2>
                <p className="text-gray-600">
                    We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <article key={article.id} className="group relative rounded-2xl overflow-hidden">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Static gradient overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent" />
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-600/75 via-purple-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 bg-white/90 rounded-full self-start">
                                FEATURED
                            </span>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {article.title}
                                </h3>

                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-white">{article.author.name}</span>
                                            {article.author.isVerified && (
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="w-4 h-4 text-green-400"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            )}
                                            <span className="text-white/90 text-sm">Verified writer</span>
                                        </div>
                                        <span className="text-sm text-white/75">{article.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}