"use client";
import Blog from "@/components/Blog";
import Connect from "./contents/Connect";
import Hero from "./contents/Hero";
import Learn from "./contents/Learn";
import { useRef, useState } from "react";
import { dataBlogPosts } from "@/utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBlog from "@/components/cards/CardBlog";
import Image from "next/image";

const Hospital = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const totalSlides = Math.ceil(dataBlogPosts.length / 4); // Adjust based on default slides per view

  return (
    <div>
      <Hero />
      <Connect />
      <Learn />
      <div className="relative">
        <img
          src="/assets/images/bg-promo-2.png"
          className="absolute top-[-21rem] 2xl:top-[-24rem] pointer-events-none hidden lg:block"
        />
        <section
          // className="container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7"
          className="container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7 relative z-[20]"
        >
          <div>
            <h2 className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]">
              Our Blogs
            </h2>
            <p className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]">
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
    </div>
  );
};

export default Hospital;
