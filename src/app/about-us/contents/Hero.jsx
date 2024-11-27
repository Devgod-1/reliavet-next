"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  // Refs for animation targets
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const tabsRef = useRef([]);
  const buttonRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power4.out" }
    );

    // Animate description
    gsap.fromTo(
      descriptionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power4.out", delay: 0.25 }
    );

    // Animate tabs with stagger effect
    gsap.fromTo(
      tabsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, ease: "power4.out", delay: 0.5 }
    );

    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, ease: "power4.out", delay: 0.7 }
    );

    // Animate hero image
    gsap.fromTo(
      image1Ref.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, ease: "power4.out", delay: 0.9 }
    );
    gsap.fromTo(
      image2Ref.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, ease: "power4.out", delay: 0.9 }
    );
  }, []);

  return (
    <div
      style={{
        background: "url('/assets/images/kuttar_chap.png')",
        backgroundSize: "100%",
      }}
      className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[90vh] justify-center relative py-14"
    >
      <Image
        ref={image1Ref}
        src="/assets/images/Group67.png"
        className="absolute md:left-[6%] lg:left-[10%] lg:top-[50%] max-lg:bottom-[3rem] max-lg:left-[3rem] max-lg:w-[100px] lg:translate-y-[-50%] hidden lg:block"
        alt="hero"
        width={160}
        height={265}
      />
      <Image
        ref={image2Ref}
        src="/assets/images/Group68.png"
        className="absolute md:right-[6%] lg:right-[10%] lg:top-[50%] max-lg:top-[3rem] max-lg:right-[3rem] max-lg:w-[100px] lg:translate-y-[-50%] hidden lg:block"
        alt="hero"
        width={160}
        height={265}
      />
      <h1
        ref={headerRef}
        className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]"
      >
        About Us
      </h1>
      <p
        ref={descriptionRef}
        className="w-full max-w-[800px] text-center px-5 text-[#636363] text-sm lg:text-base 2xl:text-lg"
      >
        At <span className="font-bold">ReliaVet</span>, we understand your pet
        is a cherished member of your family. Caring about you and your pet is
        what we do, and our goal is to make your next interaction with a
        veterinarian as quick and painless as possible.
      </p>

      <button
        ref={buttonRef}
        onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
        className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-5 lg:py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[200px] lg:max-w-[300px] 2xl:max-w-[350px] !text-sm lg:!text-xl 2xl:!text-2xl font-bold rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
}
