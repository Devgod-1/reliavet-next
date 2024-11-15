"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FindVeterinarianCard = () => {
  return (
    <div className="bg-[#FFEDED] flex-1 rounded-2xl p-10 relative before:content-[url('/assets/images/Vector.png')] before:absolute before:right-7 before:top-5 before:w-1 before:h-1">
      <div className="flex flex-col items-center justify-center">
        <span
          className="rounded-full bg-[url(/assets/images/vet.png)] bg-no-repeat bg-contain 
          w-[100px] h-[100px] border-[4px] border-[#8e244b48] relative
          before:content-[url('/assets/images/Ellipse.png')] before:absolute before:right-5 before:bottom-5 before:w-2 before:h-2
        "
        ></span>
        <div className="text-center">
          <b>By Mark B.</b>
          <br />
          <span>Technician</span>
        </div>
        <div className="flex gap-[2px]">
          <Image
            alt="*"
            src={"/assets/icons/Star_red.png"}
            width={20}
            height={20}
          />
          <Image
            alt="*"
            src={"/assets/icons/Star_red.png"}
            width={20}
            height={20}
          />
          <Image
            alt="*"
            src={"/assets/icons/Star_red.png"}
            width={20}
            height={20}
          />
          <Image
            alt="*"
            src={"/assets/icons/Star_red.png"}
            width={20}
            height={20}
          />
          <Image
            alt="*"
            src={"/assets/icons/Star_red_opacity.png"}
            width={20}
            height={20}
          />
        </div>
        <div className="mt-5">
          <b>State:</b> <span className="text-[#636363]">Alaska</span>
        </div>
        <div className="mt-2">
          <b>Hospital:</b>{" "}
          <span className="text-[#636363]">Northeast animal clinic</span>
        </div>
        <button className="box-border text-center p-[18px] px-[32px] gap-[5px] isolate w-[90%] mx-auto mt-10 bg-[rgba(255,255,255,0.6)] border border-[#ACACAC] rounded-[9px]">
          <span className="text-[#de1e33]">Book Now</span>
        </button>
      </div>
    </div>
  );
};

const FindVeterinarian = () => {
  const swiperRef = useRef();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container px-10 mx-auto">
      <div>
        <div
          className="text-[55px] font-semibold leading-[55.55px]
            sm:text-[50px] sm:leading-[55px]
            md:text-[55px] md:leading-[55.55px]
            lg:text-[60px] lg:leading-[60px]
            w-full text-center my-20
            "
        >
          Find a Trusted Veterinarian Near You
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="search" className="pl-3 mb-2 flex gap-2">
            <Image
              alt="l"
              width={20}
              height={20}
              className=""
              src={"/assets/images/typcn_location.png"}
            />
            Choose Location:
          </label>
          <input
            className="rounded-3xl bg-[#ECEEF2] sm:w-[400px] text-xl px-5 py-1 focus:outline-none border border-[#C4C4C4]"
            id="search"
          />
        </div>
        <div>
          <h1
            className="text-[36px] font-semibold leading-[36.36px] text-left
              sm:text-[32px] sm:leading-[34px]
              md:text-[36px] md:leading-[36.36px]
              lg:text-[40px] lg:leading-[42px]
              py-5
              "
          >
            Suggested Based on your location
          </h1>
          <Swiper
            ref={swiperRef}
            className="flex gap-7 mb-10"
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <FindVeterinarianCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindVeterinarianCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindVeterinarianCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindVeterinarianCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FindVeterinarian;
