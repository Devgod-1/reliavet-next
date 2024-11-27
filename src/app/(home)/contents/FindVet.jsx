"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FindVet = () => {
  const router = useRouter();
  // Refs for elements to animate
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

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
    tl.fromTo(titleRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      // Description animation: Fade in
      .fromTo(
        descriptionRef.current,
        { opacity: 0 },
        { opacity: 1 },
        "-=0.5" // overlap with previous animation
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0 },
        { opacity: 1 },
        "-=0.5" // overlap with previous animation
      )
      // Main image animation: Scale up from 0 to 1
      .fromTo(
        imageRef.current,
        { scale: 0 },
        { scale: 1 },
        "-=0.5" // overlap with previous animation
      );

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Attach ref for ScrollTrigger
      className="container flex lg:flex-row flex-col justify-center lg:justify-between max-lg:gap-5 items-center mx-auto sm:py-24 py-10 max-sm:px-10 relative"
    >
      <Image
        src="/assets/images/paw.svg"
        alt=""
        className="absolute top-[30%] translate-y-[-30%] right-[calc(100%+1rem)] 2xl:right-[calc(100%+4rem)]"
        width={75}
        height={70}
      />

      {/* Main Image (mobile) */}
      <Image
        src="/assets/images/best_care_1.png"
        alt=""
        className="w-full max-w-[450px] 2xl:max-w-[550px] 2xl:mr-14 md:px-5 lg:hidden"
        width={550}
        height={550}
        ref={imageRef} // Attach ref for animation
      />

      {/* Content */}
      <div className="w-full max-w-[600px] flex flex-col justify-between">
        <h2
          ref={titleRef} // Attach ref for animation
          className="2xl:text-[40px] text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-semibold leading-[48px] lg:mb-10 md:mb-5 mb-3"
        >
          Find the Best Care for Your Pet with Trusted Veterinarians
        </h2>

        <p
          ref={descriptionRef} // Attach ref for animation
          className="text-xs lg:text-sm 2xl:text-base !leading-[2] block text-[#636363] mb-5 lg:mb-10"
        >
          ReliaVet connects pet owners with a network of trusted veterinarians
          dedicated to providing top-quality care for pets. Our platform makes
          it easy to find a nearby veterinarian or hospital, with features like
          location-based searches, profiles of qualified vets, and telemedicine
          options for added convenience. With ReliaVet, you can feel confident
          that your pet is in good hands, whether they need a routine checkup, a
          specialist, or emergency care.
        </p>

        <button
          ref={buttonRef}
          onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
          className="bg-bgPrimaryGradient py-5 lg:py-6 md:py-8 2xl:py-10 w-full transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl text-white sm:max-w-[350px] text-xs lg:text-sm 2xl:text-2xl font-bold rounded-lg "
        >
          Get Started
        </button>
      </div>

      {/* Main Image (desktop) */}
      <Image
        src="/assets/images/best_care_1.png"
        alt="main-vet"
        className="w-full max-w-[450px] 2xl:max-w-[550px] 2xl:mr-14 md:px-5 hidden lg:block"
        width={550}
        height={550}
        ref={imageRef} // Attach ref for animation
      />
    </section>
  );
};

export default FindVet;
