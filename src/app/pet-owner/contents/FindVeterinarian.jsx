"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DialogViewVet from "@/components/dialogs/DialogViewVet";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { getUserPosition } from "../../../utils/getUserPosition";
import { getUserState } from "../../../utils/getUserState";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

export const FindVeterinarianCard = ({
  profileImage,
  name,
  role,
  rating,
  state,
  hospital,
  onButtonClick,
  buttonLabel = "Book Now",
  className = "",
  buttonClassName = "",
  imageClassName = "",
}) => {
  const [openDialog, setOpenDialog] = useState(null);

  const closeDialog = () => {
    setOpenDialog(null);
  };
  return (
    <div
      className={`bg-[#FFEDED] p-5 py-8 flex flex-col items-center rounded-[15px] relative ${className}`}
    >
      <DialogViewVet open={openDialog === "view"} onClose={closeDialog} />

      <button className="absolute top-8 right-8">
        <img
          src="/assets/icons/icon-arrow-top-right.svg"
          className="max-w-[12px] 2xl:max-w-[14px]"
        />
      </button>
      <div className="relative after:content-[''] after:absolute after:bottom-[14px] after:right-[14px] after:w-[15px] after:h-[15px] after:bg-[#55CA74] after:rounded-full">
        <img
          src={profileImage}
          alt="Profile"
          className={`w-full max-w-[95px] 2xl:max-w-[105px] object-cover rounded-full border-[8px] border-[#8E244B]/20 ${imageClassName}`}
        />
      </div>
      <h6 className="text-sm 2xl:text-base font-semibold">{name}</h6>
      <span className="text-xs 2xl:text-sm text-[#636363]">{role}</span>
      <div className="flex items-center my-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="/assets/icons/icon-star-red.svg"
            className={index < rating ? "" : "opacity-40"}
            alt="Star"
          />
        ))}
      </div>
      <span className="text-xs 2xl:text-sm font-medium">
        State: <span className="text-[#636363]">{state}</span>
      </span>
      <span className="text-xs 2xl:text-sm font-medium block mt-1">
        Hospital:&nbsp;
        <span className="text-[#636363]">{hospital}</span>
      </span>
      <button
        className={`w-full bg-white font-bold text-xs 2xl:text-sm text-[#DE1E33] hover:bg-[#DE1E33] hover:text-white p-5 border border-[#ACACAC] rounded-[9px] !mt-6 ${buttonClassName}`}
        onClick={() => setOpenDialog("view")}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

const FindVeterinarian = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const formRef = useRef(null);
  const [state, setState] = useState(null);
  const [states, setStates] = useState([]); // For the list of states from API
  const [selectedState, setSelectedState] = useState(""); // To hold the selected state
  const [doctors, setDoctors] = useState([]);
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

    // Animate the cards
    gsap.fromTo(
      section.querySelectorAll(".vet-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

    const handleStateChange = async (e) => {
        const selected = e.target.value;
        setSelectedState(selected); // Update the selected state when dropdown value changes

        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/doctors", {
                params: { state: selected }
            });
            setDoctors(response.data.data); // Update veterinarians data based on the selected state
        } catch (err) {
            setError(err.message); // Handle API errors
        }
    };

  return (
    <section ref={sectionRef} className="container px-10 mx-auto">
        <div>
        <div
          className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-semibold text-center my-20"
          ref={titleRef}
        >
          Find a Trusted Veterinarian Near You
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
            className="2xl:text-[36px] text-[24px] lg:text-[32px] font-semibold leading-[1.4] lg:leading-[1.1] mt-10"
            ref={subTitleRef}
          >
            Suggested Based on your location
          </h1>

          <Swiper className="flex gap-7 mb-10 mt-5" spaceBetween={24} slidesPerGroupAuto modules={[Navigation, Pagination, Scrollbar, A11y]} navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          }} scrollbar={{ draggable: true }}
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
              {doctors.length > 0 ? (
                  doctors.map((doctor) => (
                      <SwiperSlide key={doctor.id}>
                          <FindVeterinarianCard
                              profileImage={doctor.profile_img || "/assets/images/default_doctor.jpeg"}
                              name={doctor.name}
                              role={doctor.user_role}
                              rating={doctor.rate}
                              state={doctor.states}
                              hospital={doctor.hospital_name}
                              buttonLabel="View Profile"
                          />
                      </SwiperSlide>
                  ))
              ) : (
                  <div>No veterinarians found</div>
              )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FindVeterinarian;
