"use client";

import {useEffect, useRef, useState} from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { X } from "lucide-react";
import { FindVeterinarianCard } from "@/app/pet-owner/contents/FindVeterinarian";
import axios from "axios";

export default function DialogViewHospital({ open, onClose, hospitalId, hospitalImage }) {
  const swiperRefReview = useRef();
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);
  const [hospital, setHospital] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hospital/${hospitalId}`, {});

        setHospital(response.data.data);
      } catch (err) {
        console.error("Error fetching hospitals:", err);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
          params: {hospital_id: hospitalId}
        });

        setDoctors(response.data.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };

    fetchHospital();
    fetchDoctors();
  }, [hospitalId]);

  const formatDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(date);
    }
    else
      return '';
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center lg:p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-[62px] bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg lg:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 max-lg:rounded-[18px] max-lg:rounded-bl-[0px] max-lg:rounded-br-[0px]   max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="bg-white p-10 pt-14 relative">
              {/* first section */}
              <button
                className="absolute top-6 right-12 max-lg:right-6 bg-[#243A8E]/10"
                onClick={onClose}
              >
                <X className="w-[20px] h-[20px] text-[#243A8E]" />
              </button>
              {hospital ? (
                  <>
              <div className="flex max-lg:flex-col items-start">
                <img
                  src={hospitalImage || "/assets/images/hospital.png"}
                  alt="Profile"
                  className="w-full lg:max-w-[185px] h-[185px] object-cover rounded-xl border-[8px] border-[#afbdd9]"
                />
                <div className="w-full lg:px-8 max-lg:mt-6">
                  <div className="flex max-lg:flex-col lg:items-center w-full justify-between  max-lg:space-y-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-base lg:text-xl  2xl:text-3xl">
                          {hospital.name}
                        </h4>
                      </div>
                    </div>
                    {/*  */}
                    <div>
                      <span className="text-[13px] lg:text-[15px] 2xl:text-[17px] block text-[#636363]">
                        MEMBER SINCE
                      </span>
                      <span className="text-xs lg:text-sm 2xl:text-base block font-medium">
                        {formatDate(hospital.created_at)}
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex max-lg:flex-col-reverse  justify-between items-start mt-4 border-b pb-4">
                    <p className="text-xs lg:text-sm 2xl:text-base block font-medium text-[#636363] max-w-[400px]">
                      {hospital.summary}
                    </p>

                  </div>
                  {/*  */}
                  <div className="py-4 space-y-1 border-b">
                    <div className="flex items-center space-x-2">
                      <img
                          src="/assets/icons/icon-location.svg"
                          alt="twitter"
                          className="w-[22px] h-[22px]"
                      />
                      <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                        {hospital.states}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/assets/icons/icon-location.svg"
                        alt="twitter"
                        className="w-[22px] h-[22px]"
                      />
                      <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                        {hospital.street_address}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
              {/* end first section */}
              {/* second section */}
              {/* end second section */}
              {/* third section */}
              <div className="relative lg:mx-8 mt-8 after:content-[''] after:top-0 after:h-full after:right-0 after:bg-[linear-gradient(to_right,#fff0_0%,#fff_100%)] after:w-[300px] after:z-20 max-lg:after:hidden">
                <Swiper
                  ref={swiperRefReview}
                  spaceBetween={50}
                  slidesPerView={3}
                  slidesPerGroupAuto
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
                  {doctors.length > 0 ? (
                      doctors.map((doctor, idx) => (
                          <SwiperSlide key={idx}>
                            <FindVeterinarianCard
                                id={doctor.id}
                                profileImage={doctor.profile_img || "/assets/images/default_doctor.jpeg"}
                                name={doctor.name}
                                role={doctor.user_role}
                                rating={doctor.rate}
                                state={doctor.states}
                                hospitalId={doctor.hospital_id}
                                hospital={doctor.hospital_name}
                                buttonLabel="Book an Appointment"
                            />
                          </SwiperSlide>
                      ))
                  ) : (
                      <div>No veterinarians or technicians found</div>
                  )}
                </Swiper>
                <button
                  onClick={() => swiperRefReview.current.swiper.slidePrev()}
                  className="absolute hidden lg:block -left-12 top-[50%]"
                >
                  <Image
                    src="/assets/icons/icon-slider-left.svg"
                    width={20}
                    height={20}
                    alt="arrow_icon"
                  />
                </button>
                <button
                  onClick={() => swiperRefReview.current.swiper.slideNext()}
                  className="absolute hidden lg:block -right-12 top-[50%]"
                >
                  <Image
                    src="/assets/icons/icon-slider-right.svg"
                    width={20}
                    height={20}
                    alt="arrow_icon"
                  />
                </button>
              </div>
              {/* end third section */}
                  </>
              ) : ('')}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
