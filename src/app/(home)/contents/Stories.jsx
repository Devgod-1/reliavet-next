"use client";
import Image from "next/image";
import CardBlog from "@/components/cards/CardBlog";
import React, { useRef, useState } from "react";
import { dataBlogPosts, dataReviews } from "@/utils/constant";
import CardReview from "@/components/cards/CardReview";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const Stories = () => {
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
      <div className="w-full flex items-center justify-between  !mt-4">
        {" "}
        <h2 className="text-[32px] 2xl:text-[36px] font-semibold leading-[1.1]">
          Users success stories
        </h2>
        <div className="flex items-center gap-3">
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === 0 && "opacity-50"
            }`}
            onClick={() => swiperRefReview.current.swiper.slidePrev()}
          >
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              className="max-w-[20px] 2xl:max-w-[24px] mr-1 rotate-180"
            />{" "}
            Previous
          </button>
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === totalSlidesReview - 1 && "opacity-50"
            }`}
            onClick={() => swiperRefReview.current.swiper.slideNext()}
          >
            Next
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              className="max-w-[20px] 2xl:max-w-[24px] mr-1"
            />{" "}
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRefReview}
        className="mt-8"
        spaceBetween={24}
        slidesPerView={slidesPerViewReview}
        slidesPerGroup={slidesPerViewReview}
        onSwiper={(swiper) => setSwiperInstanceReview(swiper)} // Set swiper instance
        onSlideChange={(swiper) => {
          console.log("HAII", swiper);

          setActiveIndexReview(swiper.activeIndex / slidesPerViewReview);
        }} // Update active slide index
      >
        {dataReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <CardReview
              key={index}
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              description={review.description}
              className={"min-h-[280px] 2xl:min-h-[300px]"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="grid grid-cols-3 gap-6 mt-8">
          {dataReviews.map((review, index) => (
            <CardReview
              key={index}
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div> */}

      <div className="flex items-center gap-2 mx-auto w-fit mt-12">
        {[...Array(totalSlidesReview)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/icon-star-rounded.svg"
            onClick={() => {
              swiperInstanceReview.slideTo(index * slidesPerViewReview); // Slide to the clicked pagination dot
              setActiveIndexReview(index); // Update active index
            }}
            alt=""
            width={14}
            height={14}
            className={`max-w-[14px] cursor-pointer ${
              index === activeIndexReview ? "opacity-100" : "opacity-20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Stories;
