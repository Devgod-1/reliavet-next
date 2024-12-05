"use client";
import React, { useEffect, useState } from "react";
import CardBlog from "@/components/cards/CardBlog";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const RecentArticles = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=5&page=1&orderby=date&order=desc`, {});

            setRecentBlogs(response.data);
            setTotalSlides(Math.ceil(response.data.length / 4));
        } catch (err) {
            console.error("Error fetching recent blogs:", err);
        }
    };

    fetchRecentBlogs();

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
    <div className={`bg-[#DFEDFF] shadow-2xl ${className}`}>
      <section className="container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7">
        <div>
          <h2
            className="font-semibold leading-[48px] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
          >
            Recent Articles
          </h2>
          <p
            className="text-sm 2xl:text-base leading-[1.8] mt-5 text-[#636363]"
          >
            Stay informed and empowered with our educational blog, designed to
            help pet owners like you <br className="hidden lg:block" />
            take the best care of your furry companions.
          </p>
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
            {recentBlogs.length > 0 ? (
                recentBlogs.map((blog, idx) => (
                    <SwiperSlide key={idx}>
                        <div>
                            <CardBlog
                                id={blog.id}
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
      </section>
    </div>
  );
};

export default RecentArticles;
