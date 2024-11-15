import CardBlog from "@/components/cards/CardBlog";
import { dataBlogPosts } from "@/utils/constant";
import Image from "next/image";
import Article from "./Article";

export default function AllArticles() {

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
        <div className="container mx-auto">
            <div className="my-20">
                <h1 className="text-[36px] font-semibold leading-[36.36px] text-left sm:text-[32px] sm:leading-[34px] md:text-[36px]md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5">All Articles</h1>
                <p className="w-full lg:w-5/12">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <Article key={article.id} article={article} />
                ))}
            </div>
            <div className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {dataBlogPosts.slice(0, 4).map((blog, id) => (
                    <CardBlog key={id} title={blog.title} date={blog.date} description={blog.description} imageSrc={blog.imageSrc} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="px-5 py-3 rounded-lg border-2 border-[#243A8E] text-[#243A8E] flex gap-x-2 items-center">
                    <span>Load More</span>
                    <Image src="/assets/icons/icon-arrow-right.svg" width={20} height={20} alt="arrow" />
                </button>
            </div>

        </div>
    );
}
