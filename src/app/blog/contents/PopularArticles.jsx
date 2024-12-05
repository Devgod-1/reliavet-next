"use client";
import { useEffect, useState } from "react";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function PopularArticles() {
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
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          Popular Articles
        </h2>
        <p
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
