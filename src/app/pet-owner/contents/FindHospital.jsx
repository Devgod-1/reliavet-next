"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FindHospitalCard = () => {
  return (
    <div className="bg-[#EDF3FF] flex-1 rounded-2xl p-10 relative before:content-[url('/assets/images/Vector.png')] before:absolute before:right-7 before:top-5 before:w-1 before:h-1">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[url(/assets/images/hospital.png)] bg-no-repeat bg-contain w-full h-[100px] bg-center"></div>
        <div className="mt-5 text-center">
          <b>City Hospital</b>
          <br />
          <small className="text-[#636363]">New york</small>
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
        <button className="box-border text-center p-[12px] px-[32px] gap-[5px] isolate w-[90%] mx-auto mt-5 bg-[rgba(255,255,255,0.6)] border border-[#ACACAC] rounded-[9px]">
          <span className="text-[#243a82]">View Vets,Techs</span>
        </button>
      </div>
    </div>
  );
};

const FindHospital = () => {
  const swiperRef = useRef();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const center = {
    lat: 40.73061,
    lng: -73.935242,
  };

  return (
    <section className="container px-10 mx-auto">
      <div>
        <div
          className="text-[55px] font-semibold leading-[55.55px]
            sm:text-[50px] sm:leading-[55px]
            md:text-[55px] md:leading-[55.55px]
            lg:text-[60px] lg:leading-[60px]
            w-full text-center my-20"
        >
          Find a Trusted Veterinarian Near You
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="search" className="pl-3 mb-2 flex gap-2">
            <Image
              alt="location icon"
              width={20}
              height={20}
              src={"/assets/images/typcn_location.png"}
            />
            Choose Location:
          </label>
          <input
            className="rounded-3xl bg-[#ECEEF2] sm:w-[400px] text-xl px-5 py-1 focus:outline-none border border-[#C4C4C4]"
            id="search"
            placeholder="Enter your location"
          />
        </div>
        <div>
          <h1
            className="text-[36px] font-semibold leading-[36.36px] text-left
              sm:text-[32px] sm:leading-[34px]
              md:text-[36px] md:leading-[36.36px]
              lg:text-[40px] lg:leading-[42px]
              py-5"
          >
            Suggested Based on your location
          </h1>
          {/* <LoadScript>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "500px",
              }}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript> */}
          <iframe className="rounded-xl" width="100%" height="400px" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="yes" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            className="flex gap-7 my-10"
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
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide>
              <FindHospitalCard />
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center justify-center">
            <button className="bg-bgPrimaryGradientRed2 md:my-6 my-3 2xl:mt-10 p-4 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
              See More <b>&rarr;</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHospital;
