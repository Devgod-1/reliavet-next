"use client";
import { useEffect, useState } from "react";
import CardBlog from "@/components/cards/CardBlog";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function AllArticles() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=4&page=1&orderby=date&order=asc`, {});
            setAllBlogs(response.data);
        } catch (err) {
            console.error("Error fetching all blogs:", err);
        }
    };
    const fetchPopularBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=2&page=1&orderby=date`, {});

            setPopularBlogs(response.data);
        } catch (err) {
            console.error("Error fetching popular blogs:", err);
        }
    };

    fetchAllBlogs();
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
    <div className="container max-lg:p-5 mx-auto">
      <div className="my-20">
        <h1
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          All Articles
        </h1>
        <p
          className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]"
        >
          We share common trends, strategies ideas, opinions, short & long
          stories <br className="hidden lg:block" /> from the team behind the
          company.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularBlogs.length > 0 ? (
              popularBlogs.map((blog, idx) => (
                  <Article key={idx} id={blog.slug} title={blog.title.rendered} blog_image={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                           name={blog.yoast_head_json.author} blog_date={formatDate(blog.date)} />
              ))
          ) : (
              <div></div>
          )}
      </div>

      <div className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {allBlogs.length > 0 ? (
              allBlogs.map((blog, idx) => (
                  <div key={idx}>
                      <CardBlog
                          id={blog.slug}
                          title={blog.title.rendered}
                          date={formatDate(blog.date)}
                          description={blog.content.rendered.split('.')[0].trim()}
                          imageSrc={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                          actionClassName={(idx + 1) % 2 === 0 ? "!mt-16" : ""}
                      />
                  </div>
              ))
          ) : (
              <div></div>
          )}
      </div>

      <div className="flex justify-center">
        <button
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
