"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import DialogViewHospital from "@/components/dialogs/DialogViewHospital";

export const FindHospitalCard = () => {
  const [openDialog, setOpenDialog] = useState(null);
  return (
    <div className="bg-[#EDF3FF] flex-1 rounded-2xl p-5 py-8 relative ">
      <DialogViewHospital
        open={openDialog === "view"}
        onClose={() => setOpenDialog(null)}
      />
      <button className="absolute top-5 right-5">
        <img
          src="/assets/icons/icon-arrow-top-right.svg"
          className="max-w-[12px] 2xl:max-w-[14px]"
        />
      </button>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[url(/assets/images/hospital.png)] bg-no-repeat bg-contain w-full h-[100px] bg-center"></div>
        <div className="mt-5 text-center">
          <b>City Hospital</b>
          <br />
          <small className="text-[#636363]">New york</small>
        </div>
        <div className="flex items-center my-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src="/assets/icons/icon-star-red.svg"
              className={index < 4 ? "" : "opacity-40"}
              alt="Star"
            />
          ))}
        </div>
        <button
          onClick={() => setOpenDialog("view")}
          className="w-full hover:!bg-[#243A8E] hover:!text-white bg-white font-bold text-xs 2xl:text-sm text-[#243a82] p-5 border border-[#ACACAC] rounded-[9px] !mt-6"
        >
          View Vets,Techs
        </button>
      </div>
    </div>
  );
};

const FindHospital = () => {
  const router = useRouter();
  const swiperRef = useRef();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const center = {
    lat: 40.73061,
    lng: -73.935242,
  };

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const subTitleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create the animation when the section scrolls into view
    const section = sectionRef.current;
    // Animate the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3, // Add a slight delay for a staggered effect
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
    // Animate the form
    gsap.fromTo(
      locationRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5, // Add a slight delay for a staggered effect
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the cards
    gsap.fromTo(
      section.querySelectorAll(".hospital-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.75,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1, // Add a slight delay for a staggered effect
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container px-10 mx-auto">
      <div>
        <div
          ref={titleRef}
          className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-semibold text-center my-20"
        >
          Find the Pet Hospital of Your choice
        </div>
        <div className="flex flex-col my-5" ref={formRef}>
          <label
            htmlFor="search"
            className="pl-3 mb-2 flex gap-2 text-xs lg:text-sm text-[#636363]"
          >
            <Image
              alt="l"
              width={20}
              height={20}
              className=""
              src={"/assets/icons/icon-location.svg"}
            />
            Choose Location:
          </label>
          <input
            className="rounded-3xl bg-[#ECEEF2] sm:w-[400px] px-6 lg:px-8 py-2 lg:py-3 focus:outline-none border border-[#C4C4C4] text-xs 2xl:text-sm"
            id="search"
            defaultValue={"Alaska"}
          />
        </div>
        <div>
          <h1
            ref={subTitleRef}
            className="2xl:text-[36px] text-[24px] lg:text-[32px] font-semibold leading-[1.4] lg:leading-[1.1] mt-10 mb-10"
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
          <iframe
            ref={locationRef}
            className="rounded-xl"
            width="100%"
            height="400px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="yes"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide className="hospital-card">
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide className="hospital-card">
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide className="hospital-card">
              <FindHospitalCard />
            </SwiperSlide>
            <SwiperSlide className="hospital-card">
              <FindHospitalCard />
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center justify-center" ref={buttonRef}>
            <button
              onClick={() => router.push("/find-hospital")}
              className="bg-bgPrimaryGradientRed2 flex items-center transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl justify-center md:my-6 my-3 2xl:mt-10 p-8 py-5 2xl:p-8 2xl:py-6 w-fit text-white text-sm lg:text-sm 2xl:text-base font-bold rounded-lg"
            >
              See More{" "}
              <img
                src="/assets/icons/icon-arrow-right-big.svg"
                className="max-w-[24px] ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHospital;
