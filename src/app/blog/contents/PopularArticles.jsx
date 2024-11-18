import Image from "next/image";
import Article from "./Article";

export default function PopularArticles() {
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
    <section className="container mx-auto px-4 pb-12 mt-[-4rem]">
      <div className="space-y-4 mb-12">
        <h2 className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]">
          Popular Articles
        </h2>
        <p className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]">
          We share common trends, strategies ideas, opinions, short & long
          stories
          <br className="hidden lg:block" /> from the team behind company.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
