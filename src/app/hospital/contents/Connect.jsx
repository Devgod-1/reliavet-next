"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {

  useEffect(() => {

  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto pt-24 max-lg:p-10">
        <h1
          className="text-[36px] font-semibold leading-[36.36px] text-left sm:text-[32px] sm:leading-[34px] md:text-[36px] md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5"
        >
          Connect and Communicate with Pet Owners
        </h1>
        <p
          className="w-full md:w-[65%] font-medium text-base 2xl:text-lg"
        >
          ReliaVet helps you build strong relationships with pet owners,
          providing easy access to telemedicine services, follow-up tools, and a
          portal for client communication. Offer clients convenient ways to stay
          connected to their pet&apos;s health and care.
        </p>
      </div>
      <div className="flex flex-col md:flex-row relative">
        <div>
          <Image
            src="/assets/images/connect_dog.png"
            width={830}
            height={620}
            alt="dog_playing"
          />
        </div>
        <div
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
