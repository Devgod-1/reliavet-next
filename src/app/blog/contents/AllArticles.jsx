"use client";
import React, { useEffect, useState } from "react";
import CardBlog from "@/components/cards/CardBlog";
import Article from "./Article";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AllArticles() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=50&page=1&orderby=date&order=asc`, {});
            setAllBlogs(response.data);
            setTotalSlides(Math.ceil(response.data.length / 4));
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

        <Swiper
            className="mt-8"
            spaceBetween={24}
            slidesPerGroupAuto
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) =>
                setActiveIndex(Math.floor(swiper.activeIndex / 4))
            }
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }}
        >
            {allBlogs.length > 0 ? (
                allBlogs.map((blog, idx) => (
                    <SwiperSlide key={idx}>
                        <div>
                            <CardBlog
                                id={blog.slug}
                                imageSrc={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                                title={blog.title.rendered}
                                description={blog.content.rendered.split('.')[0].trim()}
                                date={formatDate(blog.date)}
                                actionClassName={(idx + 1) % 2 === 0 ? "!mt-16" : ""}
                            />
                        </div>
                    </SwiperSlide>
                ))
            ) : (
                <div></div>
            )}

        </Swiper>

        <div className="flex items-center gap-2 mx-auto w-fit mt-12">
            {[...Array(totalSlides)].map((_, index) => (
                <Image
                    key={index}
                    src="/assets/icons/icon-star-rounded.svg"
                    onClick={() => {
                        swiperInstance.slideTo(index * 4);
                        setActiveIndex(index);
                    }}
                    alt=""
                    width={370}
                    height={500}
                    className={`max-w-[14px] cursor-pointer ${
                        index === activeIndex ? "opacity-100" : "opacity-20"
                    }`}
                />
            ))}
        </div>
    </div>
  );
}
