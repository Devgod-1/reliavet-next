"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const JoinVet = () => {
  const router = useRouter();
  // Create refs for each animated element
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Animate elements with gsap.fromTo() using ScrollTrigger for scroll-based animations
    gsap.fromTo(
      badgeRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="flex flex-col lg:flex-row">
        <img
          src="/assets/images/image_practice_1.png"
          alt="practice"
          className="w-full lg:max-w-[50%]"
          ref={imgRef}
        />
        <div className="w-full flex flex-col justify-center space-y-8 bg-[linear-gradient(213.61deg,#243A8E_10.73%,#5774CD_38.22%,#B13A66_72.38%,#DE1E33_89.27%)] p-10 lg:p-20">
          <span
            ref={badgeRef} // Reference for animation
            className="bg-red-primary rounded-full w-fit p-2 px-3 flex items-center text-white text-[10px] lg:text-xs 2xl:text-sm pr-8"
          >
            <img
              src="/assets/icons/icon-wave.svg"
              className="max-w-[16px] lg:max-w-[18px] 2xl:max-w-[24px] mr-2"
            />
            Hey Veterinarians
          </span>
          <h2
            ref={titleRef} // Reference for animation
            className="text-[28px] lg:text-[32px] 2xl:text-[36px] font-bold leading-[1.4] lg:leading-[1.1] text-white !mt-4"
          >
            Grow Your Practice with <br className="hidden lg:block" />
            Easy-to-Use Tools
          </h2>
          <p
            ref={descriptionRef} // Reference for animation
            className="text-xs lg:text-sm 2xl:text-base !leading-[2] block text-white !mt-8"
          >
            ReliaVet connects pet owners with a network of trusted veterinarians
            dedicated to providing top-quality care for pets. Our platform makes
            it easy to find a nearby veterinarian or hospital, with features
            like location-based searches, profiles of qualified vets, and
            telemedicine options for added convenience. With ReliaVet, you can
            feel confident that your pet is in good hands, whether they need a
            routine checkup, a specialist, or emergency care.
          </p>
          <button
            ref={buttonRef} // Reference for animation
            onClick={() => {
                window.open(process.env.NEXT_PUBLIC_APP_URL, '_blank');
            }}
            className="hover:bg-white hover:text-black hover:shadow-xl hover:scale-[1.01] bg-transparent p-6 py-4 2xl:p-7 2xl:py-5 w-fit text-white max-w-[300px] !mt-12 text-xs lg:text-sm 2xl:text-base border border-white font-bold rounded-lg "
          >
            Join as vet
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinVet;
