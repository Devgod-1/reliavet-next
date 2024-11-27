"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const router = useRouter();

  // Refs for animated elements
  const headingRef = useRef(null);
  const tabRefs = useRef([]);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Timeline for staggered animations using gsap.fromTo

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 }
    );
    // Animate each tab with stagger
    gsap.fromTo(
      tabRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15 },
      "<0.3"
    );
    // Animate subtitle
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      "<0.3"
    );
    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 },
      "<0.3"
    );
    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      "<0.3"
    );
  }, []);

  return (
    <section
      className="bg-[#ECEDF0] h-[90vh] overflow-hidden"
      style={{
        background: "url('/assets/images/bg-hero.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
        <div className="flex flex-col max-lg:h-full max-lg:justify-center items-center p-5 py-2 lg:p-10 pb-0">
          <div className="flex flex-col items-center lg:mt-[-2rem]">
            <h1
              ref={headingRef}
              className="font-bold leading-[1.4] lg:leading-[1.1] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[54px] 2xl:text-[68px] text-center capitalize"
            >
              Join the Future of Veterinary Care
              <br className="hidden lg:block" /> with ReliaVet
            </h1>

            <ul className="grid grid-cols-2 sm:flex items-center gap-6 my-6">
              {[
                { link: "pet-owner", name: "Pet Owner" },
                { link: "veterinarian", name: "Veterinarian" },
                { link: "technician", name: "Technician" },
                { link: "hospital", name: "Hospital" },
              ].map((tabName, index) => (
                <li
                  key={tabName.name}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => router.push(`/${tabName.link}`)}
                  className={`${
                    tabName.link === "veterinarian" &&
                    'before:content-[""] before:w-full before:h-[1.5px] before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] before:absolute before:left-0 before:bottom-0 after:content-[""] after:w-full after:h-[5px] after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] after:absolute after:left-0 after:bottom-0 after:blur-[10px]'
                  } text-[8px] lg:text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2 relative w-fit px-6 py-3`}
                >
                  {tabName.name}
                </li>
              ))}
            </ul>
          </div>

          <span
            ref={subtitleRef}
            className="text-sm lg:text-base 2xl:text-lg text-[#636363] text-center mt-6"
          >
            Connect with pet owners, access valuable resources, and expand your
            reach in veterinary <br /> telemedicine
          </span>

          <button
            onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
            ref={buttonRef}
            className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-5 lg:py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[200px] lg:max-w-[300px] 2xl:max-w-[350px] !text-sm lg:!text-xl 2xl:!text-2xl font-bold rounded-lg"
          >
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-12 relative lg:mt-[-2rem]">
          <Image
            src="/assets/images/hero_vet.png"
            alt=""
            width={600}
            height={800}
            ref={imageRef}
            className="w-full max-w-[400px] 2xl:max-w-[450px] relative z-[2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
