"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[#ECEDF0] h-[90vh] overflow-hidden "
      style={{
        background: "url('/assets/images/bg-hero.png')",
        backgroundSize: "100%",
      }}
    >
      <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
        <div className="flex flex-col items-center p-10 pb-0">
          <h1 className="font-bold leading-[1.1] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[54px] 2xl:text-[68px] text-center capitalize">
            Your Pet&apos;s Health, Just a Click Away
          </h1>

          <span className="text-base 2xl:text-lg text-[#636363] text-center mt-6">
            Find the Best Care for Your Pet with Trusted Veterinarians
          </span>

          <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-12 relative">
          <Image
            src="/assets/images/hero_pet.png"
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
