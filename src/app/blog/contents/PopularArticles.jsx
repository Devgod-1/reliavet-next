"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PopularArticles() {
  const articlesRef = useRef([]);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

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

  useEffect(() => {
    // Fade in and slide up the heading and paragraph
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

    // Animate the articles as they come into view
    articlesRef.current.forEach((articleElement) => {
      gsap.fromTo(
        articleElement,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: articleElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="container mx-auto px-4 pb-12 mt-[-4rem]">
      <div className="space-y-4 mb-12">
        <h2
          ref={headingRef}
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          Popular Articles
        </h2>
        <p
          ref={paragraphRef}
          className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]"
        >
          We share common trends, strategies ideas, opinions, short & long
          stories
          <br className="hidden lg:block" /> from the team behind the company.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div key={article.id} ref={(el) => (articlesRef.current[index] = el)}>
            <Article article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
