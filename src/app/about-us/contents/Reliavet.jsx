"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Reliavet() {
  const router = useRouter();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex max-lg:flex-col">
      <div className="w-full">
        <img
          ref={imageRef}
          src="/assets/images/reliavet_pet.png"
          alt="pet"
          className="w-full"
        />
      </div>
      <div
        className="w-full flex flex-col items-center lg:ml-[-1rem] justify-center bg-[linear-gradient(221.53deg,#DE1E33_11.82%,#85111D_88.18%)] text-white p-8 pt-14 lg:p-14"
        style={{
          background: "url('/assets/images/decoration-reliavet-pet.png')",
          backgroundSize: "cover",
        }}
      >
        <h1
          ref={textRef}
          className="leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px] font-bold"
        >
          Reliavet
        </h1>
        <p
          ref={textRef}
          className="w-full text-center text-sm lg:text-base 2xl:text-lg !leading-[1.8] font-semibold mt-6"
        >
          Reliable vets for you and your pets! When your pet is sick, every
          second counts and during these troubling times in-person appointments
          can sometimes take days or even weeks to become available. Instead of
          watching helplessly and waiting with concern, Reliavet gives you a
          reliable resource to have your pet quickly evaluated by a veterinarian
          and give you peace of mind.
        </p>
        <button
          ref={buttonRef}
          onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
          className="hover:bg-white hover:text-black transition-all w-full max-w-[230px] font-bold border rounded-lg py-6 my-10 text-lg lg:text-xl 2xl:text-2xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
