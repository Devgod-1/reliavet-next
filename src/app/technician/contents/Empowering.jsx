"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Empowering = () => {

  useEffect(() => {
  }, []);

  return (
    <div
      className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 max-sm:px-10"
    >
      <section className="flex flex-col lg:flex-row py-8 sm:py-12 md:py-16 lg:py-24 relative">
        <img
          alt="left"
          className="max-sm:absolute max-lg:w-[100px] w-full max-w-[150px] h-[250px] max-lg:h-[unset] left-0 bottom-[10px] z-[1]"
          src="/assets/images/Group67.png"
        />
        <div className="z-[2] flex flex-col items-center w-full">
          <h2
            className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-center"
          >
            Empowering Veterinary Technicians to Succeed
          </h2>
          <div
            className="font-semibold text-sm lg:text-base 2xl:text-lg max-w-[800px] text-center mt-4"
          >
            Veterinary technicians play a vital role in animal care, and at
            ReliaVet, we&apos;re here to support your journey every step of the way.
            With resources to boost your skills, access to job opportunities,
            and a community of fellow technicians, ReliaVet is your partner in
            delivering the best care for animals and advancing in your career.
          </div>
        </div>
        <img
          alt="right"
          src="/assets/images/Group68.png"
          className="max-sm:absolute max-lg:w-[100px] w-full max-w-[150px] h-[250px] max-lg:h-[unset] right-0 bottom-[10px] z-[1]"
        />
        <div className="w-[200px] h-[165px] lg:hidden"></div>
      </section>
    </div>
  );
};

export default Empowering;
