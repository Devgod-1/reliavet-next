"use client";

import { useRef, useState } from "react";
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

export default function DialogViewVet({ open, onClose }) {
  const swiperRefReview = useRef();
  const [swiperInstanceReview, setSwiperInstanceReview] = useState(null);

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
              <div className="flex max-lg:flex-col items-start">
                <img
                  src="/assets/avatars/avatar_5.png"
                  className="w-full lg:max-w-[185px] h-[185px] object-cover rounded-xl"
                />
                <div className="w-full lg:px-8 max-lg:mt-6">
                  <div className="flex max-lg:flex-col lg:items-center w-full justify-between  max-lg:space-y-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-base lg:text-xl  2xl:text-3xl">
                          Dr. Sarah Johnson
                        </h4>
                        <div className="flex items-center my-3">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img
                              key={index}
                              src="/assets/icons/icon-star-red.svg"
                              className={
                                index < 4
                                  ? "w-[14px] h-[14px]"
                                  : "opacity-40 w-[14px] h-[14px]"
                              }
                              alt="Star"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[#282828] text-xs lg:text-sm 2xl:text-base block mt-[-.25rem]">
                        General Practitioner
                      </span>
                    </div>
                    {/*  */}
                    <div>
                      <span className="text-[13px] lg:text-[15px] 2xl:text-[17px] block text-[#636363]">
                        MEMBER SINCE
                      </span>
                      <span className="text-xs lg:text-sm 2xl:text-base block font-medium">
                        June 18, 2022
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex max-lg:flex-col-reverse  justify-between items-start mt-4 border-b pb-4">
                    <p className="text-xs lg:text-sm 2xl:text-base block font-medium text-[#636363] max-w-[400px]">
                      With 10 years of experience in small animal care, Dr.
                      Johnson specializes in preventive healthcare and surgery
                      for pets of all sizes
                    </p>

                    <div className="flex items-center gap-2 max-lg:mb-4">
                      <button className="w-[30px] h-[30px] rounded-full border border-[#ABABAB] flex justify-center items-center group hover:bg-[#243A8E] hover:border-[#243A8E]">
                        <img
                          src="/assets/icons/icon-twitter.svg"
                          alt="twitter"
                          className="group-hover:invert"
                        />
                      </button>
                      <button className="w-[30px] h-[30px] rounded-full border border-[#ABABAB] flex justify-center items-center group hover:bg-[#243A8E] hover:border-[#243A8E]">
                        <img
                          src="/assets/icons/icon-facebook.svg"
                          alt="twitter"
                          className="group-hover:invert"
                        />
                      </button>
                      <button className="w-[30px] h-[30px] rounded-full border border-[#ABABAB] flex justify-center items-center group hover:bg-[#243A8E] hover:border-[#243A8E]">
                        <img
                          src="/assets/icons/icon-instagram.svg"
                          alt="twitter"
                          className="group-hover:invert"
                        />
                      </button>
                      <button className="w-[30px] h-[30px] rounded-full border border-[#ABABAB] flex justify-center items-center group hover:bg-[#243A8E] hover:border-[#243A8E]">
                        <img
                          src="/assets/icons/icon-github.svg"
                          alt="twitter"
                          className="group-hover:invert"
                        />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="py-4 space-y-1 border-b">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/assets/icons/icon-hat.svg"
                        alt="twitter"
                        className="w-[22px] h-[22px]"
                      />
                      <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                        alaska, albama, arizona, arkansas, california, colorado
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/assets/icons/icon-location.svg"
                        alt="twitter"
                        className="w-[22px] h-[22px]"
                      />
                      <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                        Alaska state
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/assets/icons/icon-hospital.svg"
                        alt="twitter"
                        className="w-[22px] h-[22px]"
                      />
                      <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                        northeast animal clinic
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="py-4 border-b">
                    <h4 className="text-[15px] lg:text-[19px] 2xl:text-[29px] font-semibold">
                      Organization:
                    </h4>
                    <span className="text-[#282828] text-xs lg:text-sm 2xl:text-base block font-medium mt-1">
                      General Practitioner
                    </span>

                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/assets/icons/icon-google.svg"
                          alt="twitter"
                          className="w-[28px] h-[28px]"
                        />
                        <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                          http://google.com
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src="/assets/icons/icon-linkedin.svg"
                          alt="twitter"
                          className="w-[28px] h-[28px]"
                        />
                        <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                          http://linkedin.com
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="py-4">
                    <h4 className="text-[15px] lg:text-[19px] 2xl:text-[29px] font-semibold">
                      What services do you need ?
                    </h4>

                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/assets/icons/icon-plus-fill-blue.svg"
                          alt="twitter"
                          className="w-[22px] h-[22px]"
                        />
                        <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                          Instant Teletriage – Get quick answers to your pet’s
                          health questions.
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src="/assets/icons/icon-plus-fill-blue.svg"
                          alt="twitter"
                          className="w-[22px] h-[22px]"
                        />
                        <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                          Scheduled Telemedicine – Virtual consultations with
                          Dr. Sarah Johnson.
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src="/assets/icons/icon-plus-fill-blue.svg"
                          alt="twitter"
                          className="w-[22px] h-[22px]"
                        />
                        <span className="capitalize text-xs lg:text-sm 2xl:text-base font-medium text-[#636363]">
                          Scheduled Teleadvice – Book an appointment for advice
                          on long-term care.
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end w-full mt-6">
                      <button className="text-xs 2xl:text-sm bg-primary p-3 px-6 rounded-lg font-semibold text-white">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end first section */}
              {/* second section */}
              <div className="lg:p-5">
                <h4 className="text-[15px] lg:text-[19px] 2xl:text-[29px] font-semibold">
                  Reviews
                </h4>
                <div className="mt-4 flex items-center gap-6">
                  <div className="flex flex-col w-fit p-5 items-center rounded-xl shadow-[0px_1px_10px_#0002]">
                    <span className="block font-semibold text-lg lg:text-2xl 2xl:text-4xl">
                      4
                    </span>
                    <span className="text-sm lg:text-base 2xl:text-lg font-medium mt-[-.25rem]">
                      Rating
                    </span>
                  </div>

                  <div className="w-full space-y-3">
                    <div>
                      <div className="w-full flex items-end justify-between">
                        <span className="text-xs lg:text-sm 2xl:text-base">
                          Response time
                        </span>
                        <span className="font-medium text-sm lg:text-base 2xl:text-lg">
                          4
                        </span>
                      </div>
                      <div className="w-full overflow-hidden bg-[#000000]/10 rounded-full h-[5px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[80%] after:bg-[linear-gradient(90deg,#D8003E_0%,#243A8E_61.5%)]"></div>
                    </div>
                    <div>
                      <div className="w-full flex items-end justify-between">
                        <span className="text-xs lg:text-sm 2xl:text-base">
                          Communication
                        </span>
                        <span className="font-medium text-sm lg:text-base 2xl:text-lg">
                          4
                        </span>
                      </div>
                      <div className="w-full overflow-hidden bg-[#000000]/10 rounded-full h-[5px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[80%] after:bg-[linear-gradient(90deg,#D8003E_0%,#243A8E_61.5%)]"></div>
                    </div>
                    <div>
                      <div className="w-full flex items-end justify-between">
                        <span className="text-xs lg:text-sm 2xl:text-base">
                          Service
                        </span>
                        <span className="font-medium text-sm lg:text-base 2xl:text-lg">
                          4
                        </span>
                      </div>
                      <div className="w-full overflow-hidden bg-[#000000]/10 rounded-full h-[5px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[80%] after:bg-[linear-gradient(90deg,#D8003E_0%,#243A8E_61.5%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end second section */}
              {/* third section */}
              <div className="relative lg:mx-8 mt-8">
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
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 1,
                      spaceBetween: 24,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => setSwiperInstanceReview(swiper)}
                >
                  {[...Array(5)].map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="bg-[#000000]/10 p-6 rounded-2xl flex max-lg:flex-col lg:items-center gap-4">
                        <img
                          src="/assets/avatars/avatar_6.png"
                          className="w-full max-w-[50px] h-[50px] object-cover rounded-full"
                        />
                        <div>
                          <div className="w-full max-lg:flex-col flex lg:items-center justify-between">
                            <span className="text-sm lg:text-base 2xl:text-lg font-bold">
                              <span className="text-lg lg:text-xl 2xl:text-2xl ">
                                4
                              </span>
                              /5
                            </span>
                            <span className="text-xs lg:text-sm 2xl:text-base font-medium">
                              Published At 2024 Apr,01 13:17
                            </span>
                          </div>
                          <p className="max-lg:mt-3 text-xs lg:text-sm 2xl:text-base mt-1">
                            Dr. John is always insightful and helpful. He
                            addressed the topics of concern and even helped
                            schedule an in person visit to follow up on a few
                            issues. Highly recommend.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
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
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
