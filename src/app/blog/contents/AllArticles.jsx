"use client";
import { useEffect, useRef } from "react";
import CardBlog from "@/components/cards/CardBlog";
import { dataBlogPosts } from "@/utils/constant";
import Image from "next/image";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const articleRefs = useRef([]);
  const loadMoreBtnRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate the heading and paragraph
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate article cards (Article component)
    articleRefs.current.forEach((article, index) => {
      gsap.fromTo(
        article,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: article,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    // Animate article cards (Article component)
    cardsRef.current.forEach((article, index) => {
      gsap.fromTo(
        article,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: article,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate "Load More" button
    gsap.fromTo(
      loadMoreBtnRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: loadMoreBtnRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="container max-lg:p-5 mx-auto">
      <div className="my-20">
        <h1
          ref={headingRef}
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          All Articles
        </h1>
        <p
          ref={paragraphRef}
          className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]"
        >
          We share common trends, strategies ideas, opinions, short & long
          stories <br className="hidden lg:block" /> from the team behind the
          company.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div
            ref={(el) => (articleRefs.current[article.id] = el)}
            key={article.id}
          >
            <Article article={article} />
          </div>
        ))}
      </div>

      <div className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {dataBlogPosts.slice(0, 4).map((blog, id) => (
          <div key={id} ref={(el) => (cardsRef.current[id] = el)}>
            <CardBlog
              title={blog.title}
              date={blog.date}
              description={blog.description}
              imageSrc={blog.imageSrc}
              actionClassName={(id + 1) % 2 === 0 ? "!mt-16" : ""}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          ref={loadMoreBtnRef}
          className="px-5 py-3 rounded-lg border-2 border-[#243A8E] text-[#243A8E] flex gap-x-2 items-center font-bold"
        >
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
