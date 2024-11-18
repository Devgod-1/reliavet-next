"use client";
import { useEffect, useRef, useState } from "react";
import CardBlog from "@/components/cards/CardBlog";
import { dataBlogPosts } from "@/utils/constant";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentArticles = ({ className = "" }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const slideRefs = useRef([]);

  const totalSlides = Math.ceil(dataBlogPosts.length / 4); // Adjust based on default slides per view

  useEffect(() => {
    // Animate the heading and paragraph
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

    // Animate Swiper slides as they come into view
    slideRefs.current.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className={`bg-[#DFEDFF] shadow-2xl ${className}`}>
      <section className="container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7">
        <div>
          <h2
            ref={headingRef}
            className="font-semibold leading-[48px] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
          >
            Recent Articles
          </h2>
          <p
            ref={paragraphRef}
            className="text-sm 2xl:text-base leading-[1.8] mt-5 text-[#636363]"
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
              <div ref={(el) => (slideRefs.current[index] = el)}>
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
    </div>
  );
};

export default RecentArticles;
