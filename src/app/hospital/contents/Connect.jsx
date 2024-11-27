"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

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

    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
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

    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <div className="container mx-auto pt-24 max-lg:p-10">
        <h1
          ref={headingRef}
          className="text-[36px] font-semibold leading-[36.36px] text-left sm:text-[32px] sm:leading-[34px] md:text-[36px] md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5"
        >
          Connect and Communicate with Pet Owners
        </h1>
        <p
          ref={paragraphRef}
          className="w-full md:w-[65%] font-medium text-base 2xl:text-lg"
        >
          ReliaVet helps you build strong relationships with pet owners,
          providing easy access to telemedicine services, follow-up tools, and a
          portal for client communication. Offer clients convenient ways to stay
          connected to their pet&apos;s health and care.
        </p>
      </div>
      <div className="flex flex-col md:flex-row relative">
        <div ref={imageRef}>
          <Image
            src="/assets/images/connect_dog.png"
            width={830}
            height={620}
            alt="dog_playing"
          />
        </div>
        <div
          ref={featuresRef}
          className="flex flex-col justify-center mx-auto lg:pr-[4%] 2xl:pr-[8%]"
        >
          <div className="border p-10 lg:px-20 lg:py-16 2xl:px-28 2xl:py-20 rounded-3xl max-lg:rounded-none bg-[#000000]/5 backdrop-blur-sm">
            <div className="absolute z-[-1] -top-[60%] -right-[20%]">
              <Image
                src="/assets/images/hospital_blob.png"
                width={1500}
                height={954}
                alt="background blob"
              />
            </div>
            <h1 className="text-xl lg:text:2xl 2xl:text-3xl font-bold mb-3">
              Engagement Features:
            </h1>
            <ul className="list-disc w-full text-sm 2xl:text-base pl-5">
              <li>
                Telemedicine Options: &quot;Provide remote consultations for added
                convenience and accessibility.&quot;
              </li>
              <li>
                Follow-Up Tools: &quot;Engage clients post-visit to ensure pets
                continue receiving quality care at home.&quot;
              </li>
              <li>
                Secure Messaging: &quot;Keep communication private and protected with
                secure messaging options.&quot;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
