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
import { FindVeterinarianCard } from "@/app/pet-owner/contents/FindVeterinarian";

export default function DialogViewHospital({ open, onClose }) {
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
                  src="/assets/images/hospital.png"
                  className="w-full lg:max-w-[185px] h-[185px] object-cover rounded-xl"
                />
                <div className="w-full lg:px-8 max-lg:mt-6">
                  <div className="flex max-lg:flex-col lg:items-center w-full justify-between  max-lg:space-y-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-base lg:text-xl  2xl:text-3xl">
                          City hospital
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
                      We are a dedicated veterinary hospital committed to
                      providing high-quality care for your pets. Our experienced
                      team offers a full range of services, from routine
                      checkups to advanced treatments, ensuring your pets
                      receive the best possible care in a compassionate
                      environment.
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
                </div>
              </div>
              {/* end first section */}
              {/* second section */}
              {/* end second section */}
              {/* third section */}
              <div className="relative lg:mx-8 mt-8 after:absolute after:content-[''] after:top-0 after:h-full after:right-0 after:bg-[linear-gradient(to_right,#fff0_0%,#fff_100%)] after:w-[300px] after:z-20 max-lg:after:hidden">
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
                  {[...Array(5)].map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <FindVeterinarianCard
                        name={"By Mark B."}
                        state={"Alaska"}
                        hospital={"Northeast animal clinic"}
                        role={"Technician"}
                        rating={4}
                        profileImage={"/assets/images/vet.png"}
                        className="bg-[#243A8E]/20"
                        buttonClassName="!text-[#243A8E] hover:!bg-[#243A8E] hover:!text-white !bg-transparent !border-[#243A8E] !py-3"
                      />
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
