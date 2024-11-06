"use client";
import React from "react";

const TechnicianPage = () => {
  return (
    <div>
      <div
        className="bg-[#ECEDF0] h-[90vh] overflow-hidden "
        style={{
          background: "url('/assets/images/bg-hero.png')",
          backgroundSize: "100%",
        }}
      >
        <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
          <div className="flex flex-col items-center p-10 pb-0">
            <h1 className="font-bold leading-[1.1] text-[54px] 2xl:text-[68px] text-center capitalize">
              Enhance Your Skills and Grow Your
              <br /> Career with ReliaVet
            </h1>

            <span className="text-base 2xl:text-lg text-[#636363] text-center mt-6">
              Join a community dedicated to advancing veterinary care through
              expertise, training, and <br />
              professional connections.
            </span>

            <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-6 py-8 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-12 relative">
            <img
              src="/assets/images/hero_tech.png"
              className="w-full max-w-[350px] 2xl:max-w-[400px] relative z-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianPage;
