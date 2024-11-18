"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReview from "@/components/cards/CardReview";
import { dataReviews } from "@/utils/constant";
import gsap from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  const swiperRefReview = useRef();
  const [activeIndexReview, setActiveIndexReview] = useState(0);
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonPrevRef = useRef(null);
  const buttonNextRef = useRef(null);
  const totalSlidesReview = Math.ceil(dataReviews.length / 3); // Adjust based on default slides per view

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Trigger when section is 80% into view
        toggleActions: "play none none none", // Play on enter only
      },
      defaults: { duration: 1, ease: "power3.out" },
    });
    // GSAP animation for scaling
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.15, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      buttonPrevRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.25, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      buttonNextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.3, ease: "back.out(1.7)" }
    );

    // GSAP animation for blog cards (with delay for each card)
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
          ease: "back.out(1.7)",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="container mx-auto pb-32 max-sm:px-7" ref={sectionRef}>
      <div className="w-full flex items-center justify-between mt-4">
        <h2
          className="font-semibold leading-[1.4] lg:leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
          ref={titleRef}
        >
          Users success stories
        </h2>
        <div className="flex items-center gap-3 max-sm:hidden">
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === 0 ? "opacity-50" : ""
            }`}
            ref={buttonPrevRef}
            onClick={() => swiperRefReview.current.swiper.slidePrev()}
          >
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              layout="responsive"
              className="max-w-[20px] 2xl:max-w-[24px] mr-1 rotate-180"
            />
            Previous
          </button>
          <button
            className={`px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ${
              activeIndexReview === totalSlidesReview - 1 ? "opacity-50" : ""
            }`}
            ref={buttonNextRef}
            onClick={() => swiperRefReview.current.swiper.slideNext()}
          >
            Next
            <Image
              src="/assets/icons/icon-arrow-right-red.svg"
              alt=""
              width={24}
              height={24}
              layout="responsive"
              className="max-w-[20px] 2xl:max-w-[24px] ml-1"
            />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRefReview}
        className="mt-8"
        spaceBetween={24}
        slidesPerGroupAuto
        onSwiper={(swiper) => setSwiperInstanceReview(swiper)}
        onSlideChange={(swiper) => {
          setActiveIndexReview(Math.floor(swiper.activeIndex / 3));
        }}
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {dataReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <CardReview
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              description={review.description}
              className="min-h-[280px] 2xl:min-h-[300px]"
              ref={(el) => (cardsRef.current[index] = el)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-2 mx-auto w-fit mt-12">
        {[...Array(totalSlidesReview)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/icon-star-rounded.svg"
            onClick={() => {
              swiperInstanceReview.slideTo(index * 3); // Adjust based on default slides per view
              setActiveIndexReview(index);
            }}
            alt=""
            width={14}
            height={14}
            layout="responsive"
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
