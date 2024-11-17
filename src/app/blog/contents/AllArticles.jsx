import CardBlog from "@/components/cards/CardBlog";
import { dataBlogPosts } from "@/utils/constant";
import Image from "next/image";
import Article from "./Article";

export default function AllArticles() {
  const articles = [
    {
      id: 1,
      title:
        "How to Maximize your Pet Hospital's Success with Virtual Vet Appointments",
      image: "/assets/images/news_pet.png?height=600&width=800",
      author: {
        name: "Viola Manisa",
        avatar: "/assets/avatars/avatar_4.png",
        isVerified: true,
      },
      date: "02 May-2024",
    },
    {
      id: 2,
      title:
        "How to Maximize your Pet Hospital's Success with Virtual Vet Appointments",
      image: "/assets/images/news_pet.png?height=600&width=800",
      author: {
        name: "Viola Manisa",
        avatar: "/assets/avatars/avatar_4.png",
        isVerified: true,
      },
      date: "02 May-2024",
    },
  ];

  return (
    <div className="container max-lg:p-5 mx-auto">
      <div className="my-20">
        <h1 className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]">
          All Articles
        </h1>
        <p className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]">
          We share common trends, strategies ideas, opinions, short & long
          stories <br className="hidden lg:block" /> from the team behind
          company.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
      <div className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {dataBlogPosts.slice(0, 4).map((blog, id) => (
          <CardBlog
            key={id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            imageSrc={blog.imageSrc}
            actionClassName={(id + 1) % 2 === 0 ? "!mt-16" : ""}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-5 py-3 rounded-lg border-2 border-[#243A8E] text-[#243A8E] flex gap-x-2 items-center font-bold">
          <span>Load More</span>
          <img
            src="/assets/icons/icon-arrow-right.svg"
            alt="arrow"
            className="w-[18px] h-[18px] ml-1"
          />
        </button>
      </div>
    </div>
  );
}
