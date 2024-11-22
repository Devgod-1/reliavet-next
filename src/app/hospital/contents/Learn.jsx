"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Learn() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      imageRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef}>
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
              ref={headingRef}
              className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold mb-6"
            >
              You learn everyday
            </h1>
            <p ref={paragraphRef} className="text-sm lg:text-base 2xl:text-xl">
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
                ref={(el) => (cardRefs.current[index] = el)}
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
                    Lorem ipsum dolor sit amet consectetur. Sit imperdiet
                    consequat eget vel metus suspendisse lorem arcu turpis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:h-[66rem]">
          <img
            ref={imageRef}
            src="/assets/images/hospital_learn_pet.png"
            alt="pet"
            className="w-full object-cover xl:h-[66rem]"
          />
        </div>
      </div>
    </div>
  );
}
