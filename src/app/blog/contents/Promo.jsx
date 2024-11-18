"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Promo() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const laptopImageRef = useRef(null);
  const rightSideDecorRef = useRef(null);

  useEffect(() => {
    // Animate the heading and paragraph
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
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
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the laptop image (zoom-in effect)
    gsap.fromTo(
      laptopImageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: laptopImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the right-side decorative element (slide in from the right)
    gsap.fromTo(
      rightSideDecorRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: rightSideDecorRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      className="bg-[#ECEEF2] py-20"
      style={{
        background: "url('/assets/images/bg-promo.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto max-lg:p-5 flex flex-col md:flex-row justify-between p-2 mt-[16rem]">
        <div className="flex items-center">
          <div>
            <h1
              ref={headingRef}
              className="text-[36px] 2xl:text-[40px] font-semibold !leading-[1.3] text-left py-5 w-full text-[#243A8E]"
            >
              Get our Articles delivered From <br /> us to your inbox weekly.
            </h1>
            <p
              ref={paragraphRef}
              className="w-full max-w-[650px] text-sm 2xl:text-base leading-[1.8]"
            >
              Lorem ipsum dolor sit amet consectetur. Cras pellentesque sit eget
              fermentum dictumst neque suscipit neque sit. Luctus sit phasellus
              enim nulla aliquet.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[450px] 2xl:max-w-[500px] p-2 max-lg:bg-[#ECEEF2] bg-white rounded-2xl flex flex-col items-center relative max-lg:mt-10">
          <Image
            ref={laptopImageRef}
            src="/assets/images/laptop.png"
            width={566}
            height={270}
            alt="laptop"
          />
          <div className="px-6 my-6">
            <h1 className="text-xl font-bold mb-2">
              The best articles every week
            </h1>
            <p className="text-[#636363] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Amet odio morbi sed.
            </p>
          </div>
          <div
            ref={rightSideDecorRef}
            className="h-[150px] 2xl:h-[200px] w-[40px] bg-[#243A8E] absolute -right-10 top-[10%] rounded-r-xl hidden md:block"
          ></div>
        </div>
      </div>
    </div>
  );
}
