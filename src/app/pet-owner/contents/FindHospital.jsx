"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import DialogViewHospital from "@/components/dialogs/DialogViewHospital";
import {getUserPosition} from "@/utils/getUserPosition";
import {getUserState} from "@/utils/getUserState";
import MapWithScript from "@/components/MapWithScript";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

export const FindHospitalCard = ({
    name,
    states,
    address,
    profile_image,
}) => {
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
        <div className="bg-no-repeat bg-contain w-full h-[100px] bg-center" style={{
            backgroundImage: `url(${profile_image})`,
        }}></div>
        <div className="mt-5 text-center">
          <b>{name}</b>
          <br />
          <small className="text-[#636363]">{states}</small>
            <br />
            <small className="text-[#636363]">{address}</small>
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

    const [state, setState] = useState(null);
    const [states, setStates] = useState([]); // For the list of states from API
    const [addresses, setAddresses] = useState(['428 Olivia Road,Andrews, SC 29510']); // For the list of states from API
    const [selectedState, setSelectedState] = useState(""); // To hold the selected state
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
      const fetchStates = async () => {
          try {
              const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/states");
              const data = await response.json();
              setStates(data.data); // Set the states list
          } catch (err) {
              setError(err.message);
          }
      };
      const fetchUserState = async () => {
          try {
              const { latitude, longitude } = await getUserPosition();
              const userState = await getUserState(latitude, longitude);
              setState(userState);
              setSelectedState(userState);
          } catch (err) {
              setError(err.message);
          }
      };

      fetchStates();
      fetchUserState();

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

    const handleStateChange = async (e) => {
        const selected = e.target.value;
        setSelectedState(selected); // Update the selected state when dropdown value changes

        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/hospitals", {
                params: { state: selected }
            });
            const hospitals = response.data.data;
            setHospitals(hospitals);

            const addressString = hospitals.map(hospital => hospital.street_address || "");
            setAddresses(addressString);
        } catch (err) {
            setError(err.message); // Handle API errors
        }
    };

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
            <select
                id="state-dropdown"
                value={selectedState}
                onChange={handleStateChange}
                className="rounded-3xl bg-[#ECEEF2] sm:w-[400px] px-6 lg:px-8 py-2 lg:py-3 focus:outline-none border border-[#C4C4C4] text-xs 2xl:text-sm"
            >
                <option value="">Select a State</option>
                {states.map((state) => (
                    <option key={state.id} value={state.code}>
                        {state.name}
                    </option>
                ))}
            </select>
        </div>
        <div>
          <h1
            ref={subTitleRef}
            className="2xl:text-[36px] text-[24px] lg:text-[32px] font-semibold leading-[1.4] lg:leading-[1.1] mt-10 mb-10"
          >
            Suggested Based on your location
          </h1>

        </div>
        <div>
          <Swiper
            ref={swiperRef}
            className="flex gap-7 my-10"
            spaceBetween={24}
            slidesPerGroupAuto modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) =>
              setActiveIndex(Math.floor(swiper.activeIndex / 4))
            }
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            scrollbar={{ draggable: true }}
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
              {hospitals.length > 0 ? (
                  hospitals.map((hospital) => (
                      <SwiperSlide key={hospital.id} className="hospital-card">
                          <FindHospitalCard name={hospital.name} states={hospital.states} address={hospital.street_address} profile_image={hospital.profile_img || "/assets/images/hospital.png"}/>
                      </SwiperSlide>
                  ))
              ) : (
                  <div>No hospitals found</div>
              )}
          </Swiper>
            <MapWithScript addresses={addresses} />
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
