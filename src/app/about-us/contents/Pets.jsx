"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pets() {
  const swiperRefReview = useRef();
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: swiperRefReview.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".button-prev, .button-next",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: swiperRefReview.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      className="container mx-auto mb-20 px-[2rem] md:p-0 relative before:content-[''] before:absolute before:right-[90%] before:w-[600px] before:bottom-[0%]
      before:h-[500px] before:bg-red-primary before:rounded-full before:blur-[250px] before:z-[-1] before:opacity-60 
      after:content-[''] after:absolute after:left-[90%] after:w-[600px] after:h-[500px] 
      after:bg-primary after:rounded-full after:blur-[250px] after:z-[-1] after:bottom-[0%] after:translate-y-[-10%] after:opacity-60"
    >
      <Swiper
        ref={swiperRefReview}
        spaceBetween={50}
        slidesPerView={3}
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
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiperInstanceReview(swiper)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((pet, index) => (
          <SwiperSlide key={index}>
            <Image
              ref={(el) => (imagesRef.current[index] = el)}
              src={`/assets/images/pet${pet}.jpg`}
              alt="pet"
              width={510}
              height={400}
              className="object-cover h-[400px] rounded-[60px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRefReview.current.swiper.slidePrev()}
        className="absolute hidden xl:block -left-12 top-[50%] button-prev"
      >
        <Image
          src="/assets/icons/icon-slider-left.svg"
          width={30}
          height={30}
          alt="arrow_icon"
        />
      </button>
      <button
        onClick={() => swiperRefReview.current.swiper.slideNext()}
        className="absolute hidden xl:block -right-12 top-[50%] button-next"
      >
        <Image
          src="/assets/icons/icon-slider-right.svg"
          width={30}
          height={30}
          alt="arrow_icon"
        />
      </button>
    </div>
  );
}
