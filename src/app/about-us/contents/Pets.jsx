"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";

export default function Pets() {
  const swiperRefReview = useRef();
  const [activeIndexReview, setActiveIndexReview] = useState(0);
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);

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
        <SwiperSlide>
          <Image
            src={"/assets/images/pet1.png"}
            alt="pet"
            width={510}
            height={598}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/pet2.png"}
            alt="pet"
            width={510}
            height={598}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/pet3.png"}
            alt="pet"
            width={510}
            height={598}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/pet3.png"}
            alt="pet"
            width={510}
            height={598}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/pet3.png"}
            alt="pet"
            width={510}
            height={598}
          />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => swiperRefReview.current.swiper.slidePrev()}
        className="absolute hidden xl:block -left-12 top-[50%]"
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
        className="absolute hidden xl:block -right-12 top-[50%]"
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
