"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CardBlog from "@/components/cards/CardBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataBlogPosts } from "@/utils/constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const totalSlides = Math.ceil(dataBlogPosts.length / 4); // Adjust based on default slides per view

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.5, ease: "power3.out" }, // Reduce duration for faster animation
    });

    // Faster GSAP animation for scaling
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );

    // Faster GSAP animation for blog cards
    cardsRef.current.forEach((card) => {
      tl.fromTo(
        card,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "back.out(1.7)" } // Reduced to 0.2s
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7"
      ref={sectionRef}
    >
      <div>
        <h2
          ref={titleRef}
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          Our Blogs
        </h2>
        <p
          ref={descriptionRef}
          className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]"
        >
          Stay informed and empowered with our educational blog, designed to
          help pet owners like you <br className="hidden lg:block" />
          take the best care of your furry companions.
        </p>
      </div>

      <Swiper
        ref={swiperRef}
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
        {dataBlogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div ref={(el) => (cardsRef.current[index] = el)}>
              <CardBlog
                imageSrc={post.imageSrc}
                title={post.title}
                description={post.description}
                date={post.date}
                actionClassName={(index + 1) % 2 === 0 ? "!mt-16" : ""}
              />
            </div>
          </SwiperSlide>
        ))}
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
  );
};

export default Blog;
