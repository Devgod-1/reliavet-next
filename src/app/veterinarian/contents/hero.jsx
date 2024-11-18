"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[#ECEDF0] h-[90vh] overflow-hidden "
      style={{
        background: "url('/assets/images/bg-hero.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
        <div className="flex flex-col max-lg:h-full max-lg:justify-center items-center p-5 py-2 lg:p-10 pb-0">
          <h1 className="font-bold leading-[1.4] lg:leading-[1.1] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[54px] 2xl:text-[68px] text-center capitalize">
            Join the Future of Veterinary Care
            <br className="hidden lg:block" /> with ReliaVet
          </h1>

          <span className="text-sm lg:text-base 2xl:text-lg text-[#636363] text-center mt-6">
            Connect with pet owners, access valuable resources, and expand your
            reach in veterinary <br /> telemedicine
          </span>

          <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-5 lg:py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[200px] lg:max-w-[300px] 2xl:max-w-[350px] !text-sm lg:!text-xl 2xl:!text-2xl font-bold rounded-lg">
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-12 relative">
          <Image
            src="/assets/images/hero_vet.png"
            alt=""
            width={600}
            height={800}
            className="w-full max-w-[400px] 2xl:max-w-[450px] relative z-[2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
