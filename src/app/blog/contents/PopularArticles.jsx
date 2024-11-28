"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PopularArticles() {
  const articlesRef = useRef([]);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {

    const fetchPopularBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=2&page=1&orderby=date`, {});

            setPopularBlogs(response.data);
        } catch (err) {
            console.error("Error fetching popular blogs:", err);
        }
    };

    fetchPopularBlogs();


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

  const formatDate = (dateString) => {
      if (dateString) {
          const date = new Date(dateString);
          const result = date.toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
          });
          return result;
      }
      else
          return '';
  };

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
          {popularBlogs.length > 0 ? (
              popularBlogs.map((blog, idx) => (
                  <Article key={idx} id={blog.id} title={blog.title.rendered} blog_image={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                           name={blog.yoast_head_json.author} blog_date={formatDate(blog.date)} />
              ))
          ) : (
              <div></div>
          )}
      </div>
    </section>
  );
}
