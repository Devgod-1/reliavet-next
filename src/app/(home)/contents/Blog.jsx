"use client";
import Image from "next/image";
import CardBlog from "@/components/cards/CardBlog";
import React, { useRef, useState } from "react";
import { dataBlogPosts, dataReviews } from "@/utils/constant";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const Blog = () => {
  const swiperRefReview = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexReview, setActiveIndexReview] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);
  const slidesPerView = 4;
  const slidesPerViewReview = 3;
  const totalSlides = Math.ceil(dataBlogPosts.length / slidesPerView);
  const totalSlidesReview = Math.ceil(dataReviews.length / slidesPerViewReview);
  return (
    <section className="container mx-auto pb-32">
      <div>
        {" "}
        <h2 className="text-[32px] 2xl:text-[36px] font-semibold leading-[1.1] !mt-4">
          Our Blogs
        </h2>
        <p className="text-sm 2xl:text-base !leading-[1.8] block !mt-5 text-[#636363]">
          Stay informed and empowered with our educational blog, designed to
          help pet owners like you <br />
          take the best care of your furry companions.
        </p>
      </div>

      {/* <div className="grid grid-cols-4 gap-6 mt-8">
          {blogPosts.map((post, index) => (
            <CardBlog
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
              date={post.date}
              actionClassName={(index + 1) % 2 === 0 && "!mt-16"}
            />
          ))}
        </div> */}

      <Swiper
        className="mt-8"
        spaceBetween={24}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Set swiper instance
        onSlideChange={(swiper) => {
          console.log(
            "swiper.activeIndex / slidesPerView",
            swiper.activeIndex / slidesPerView
          );

          setActiveIndex(swiper.activeIndex / slidesPerView);
        }} // Update active slide index
      >
        {dataBlogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <CardBlog
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
              date={post.date}
              actionClassName={(index + 1) % 2 === 0 ? "!mt-16" : ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-2 mx-auto w-fit mt-12">
        {[...Array(totalSlides)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/icon-star-rounded.svg"
            onClick={() => {
              swiperInstance.slideTo(index * slidesPerView); // Slide to the clicked pagination dot
              setActiveIndex(index); // Update active index
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

      {/* <div className="flex items-center gap-2 2xl:gap-3 mx-auto w-fit mt-12">
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
        </div> */}
    </section>
  );
};

export default Blog;
