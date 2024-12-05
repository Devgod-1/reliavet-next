"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Learn() {

  useEffect(() => {
  }, []);

  return (
    <div >
      <div className="flex flex-col md:flex-row text-white max-lg:mb-20 relative xl:h-[66rem]">
        <div
          className="p-10 lg:p-20 w-full flex flex-col gap-y-10"
          style={{
            background: "url('/assets/images/learn_bg.png')",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1
              className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold mb-6"
            >
              You learn everyday (Coming soon...)
            </h1>
            <p className="text-sm lg:text-base 2xl:text-xl">
              Access a wide range of educational materials, from telemedicine
              guides to clinical resources, designed to help you grow your
              practice and stay informed about the latest advancements in
              veterinary care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-20">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-3"
              >
                <Image
                  src={"/assets/icons/icon-learn.svg"}
                  width={60}
                  height={60}
                  alt="icon"
                />
                <div className="mt-5">
                  <h1 className="text-base lg:text-lg 2xl:text-xl font-semibold">
                    Patient Care Guides
                  </h1>
                  <p className="text-xs lg:text-sm 2xl:text-base leading-[1.9] !mt-2">
                    Learn how maximize virtual care to better care for your patients.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:h-[66rem]">
          <img
            src="/assets/images/hospital_learn_pet.png"
            alt="pet"
            className="w-full object-cover xl:h-[66rem]"
          />
        </div>
      </div>
    </div>
  );
}
