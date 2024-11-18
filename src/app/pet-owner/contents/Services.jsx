"use client";
import Image from "next/image";
import InstantServiceOffer from "./InstantServiceOffer";
import ScheduledOffer from "./ShecduledOffer";
import TeleadviceOffer from "./TeleadviceOffer";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TelemedicineHeader = () => {
  return (
    <div className="z-[2] flex flex-col items-center">
      <h2 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-white text-center">
        At ReliaVet, we understand your pet
      </h2>
      <div className="font-semibold text-sm lg:text-base 2xl:text-lg max-w-[800px] text-center mt-4">
        Is a cherished member of your family. Caring about you and your pet is
        what we do, and our goal is to make your next interaction with a
        veterinarian as quick and painless as possible.
      </div>
    </div>
  );
};

const FeatureCard = ({ imageSrc, description, isOpen, onClick }) => {
  return (
    <div
      className="md:w-1/3 flex flex-col gap-4 items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <Image src={imageSrc} alt="" width={60} height={60} />
      <div className="text-sm lg:text-base 2xl:text-lg text-[#636363] max-w-[300px] text-center">
        {description}
      </div>

      <>
        <img
          src="/assets/icons/icon-arrow-popup-1.svg"
          className={`absolute top-[10rem] md:top-[calc(100%+.25rem)] left-[50%] max-md:translate-x-[-50%] md:left-[8%] 2xl:left-[10%] transition ${
            isOpen && imageSrc === "/assets/images/next.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
        <InstantServiceOffer
          className={`top-[11rem] md:top-[calc(100%+2rem)] ${
            isOpen && imageSrc === "/assets/images/next.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          } transition-all duration-300 transform `}
        />
      </>

      <>
        <img
          src="/assets/icons/icon-arrow-popup-2.svg"
          className={`absolute top-[21rem] md:top-[calc(100%+.25rem)] left-[50%] translate-x-[-50%] transition ${
            isOpen && imageSrc === "/assets/images/schedule.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
        <ScheduledOffer
          className={`top-[22rem] md:top-[calc(100%+2rem)] ${
            isOpen && imageSrc === "/assets/images/schedule.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
      </>

      <>
        <img
          src="/assets/icons/icon-arrow-popup-3.svg"
          className={`absolute top-[calc(100%+.25rem)] right-[50%] max-md:translate-x-[-50%] md:right-[8%] 2xl:right-[10%] transition ${
            isOpen && imageSrc === "/assets/images/call.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
        <TeleadviceOffer
          className={`top-[calc(100%+2rem)] ${
            isOpen && imageSrc === "/assets/images/call.png"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
      </>
    </div>
  );
};

const TelemedicineFeatureSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (card) => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <div className="flex flex-row max-md:flex-col gap-10 items-center justify-around mt-5 py-8 relative">
      <FeatureCard
        imageSrc="/assets/images/next.png"
        description="Only $75 to have your pets needs immediately assessed by a veterinarian!"
        isOpen={openCard === "next"}
        onClick={() => handleCardClick("next")}
      />
      <FeatureCard
        imageSrc="/assets/images/schedule.png"
        description="Review patient history quickly for informed consultations."
        isOpen={openCard === "schedule"}
        onClick={() => handleCardClick("schedule")}
      />
      <FeatureCard
        imageSrc="/assets/images/call.png"
        description="Have questions answered and receive advice about your pets for only $35"
        isOpen={openCard === "call"}
        onClick={() => handleCardClick("call")}
      />
    </div>
  );
};

const Services = () => {
  // Refs for elements to animate
  const sectionRef = useRef(null);
  const cardFormRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Set up GSAP Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Trigger when section is 80% into view
        toggleActions: "play none none none", // Play on enter only
      },
      defaults: { duration: 1, ease: "power3.out" },
    });

    // Title animation: Slide in from left to right
    tl.fromTo(cardFormRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      // Description animation: Fade in
      .fromTo(
        servicesRef.current,
        { opacity: 0 },
        { opacity: 1 },
        "-=0.5" // overlap with previous animation
      );

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="container px-10 mx-auto" ref={sectionRef}>
      <div
        className="w-full bg-bgPrimaryGradient2 max-sm:px-10 px-5 py-5 text-white rounded-b-[3rem] rounded-tl-[3rem] overflow-hidden shadow-[0px_4px_20px_6px_#00000015,0px_4px_20px_6px_#00000015]"
        style={{
          background: "url('/assets/images/bg-at-reliavet.png')",
          backgroundSize: "cover",
        }}
        ref={cardFormRef}
      >
        <div className="flex flex-col lg:flex-row lg:p-10 py-8 sm:py-12 md:py-16 lg:py-24 relative ">
          <Image
            alt="left"
            width={300}
            height={600}
            className="max-lg:absolute w-[100px] left-0 bottom-[10px] z-[1]"
            src={"/assets/images/cat-dog-frame-1.png"}
          />
          <div className="w-full">
            <TelemedicineHeader />
          </div>
          <Image
            alt="left"
            width={300}
            height={600}
            src={"/assets/images/cat-dog-frame-2.png"}
            className="max-lg:absolute w-[100px] right-0 bottom-[10px] z-[1]"
          />

          <div className="w-[200px] h-[165px] lg:hidden"></div>
        </div>
      </div>
      <div
        className="w-full rounded-3xl py-20  md:p-8 lg:p-10 lg:py-32"
        ref={servicesRef}
      >
        <div>
          <h1 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-center lg:mb-10">
            Services We Offer
          </h1>
          <TelemedicineFeatureSection />
          <div className="py-5 flex items-center justify-center">
            <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
