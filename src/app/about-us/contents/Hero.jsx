"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {

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
        src="/assets/images/Group67.png"
        className="absolute md:left-[6%] lg:left-[10%] lg:top-[50%] max-lg:bottom-[3rem] max-lg:left-[3rem] max-lg:w-[100px] lg:translate-y-[-50%] hidden lg:block"
        alt="hero"
        width={160}
        height={265}
      />
      <Image
        src="/assets/images/Group68.png"
        className="absolute md:right-[6%] lg:right-[10%] lg:top-[50%] max-lg:top-[3rem] max-lg:right-[3rem] max-lg:w-[100px] lg:translate-y-[-50%] hidden lg:block"
        alt="hero"
        width={160}
        height={265}
      />
      <h1
        className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]"
      >
        About Us
      </h1>
      <p
        className="w-full max-w-[800px] text-center px-5 text-[#636363] text-sm lg:text-base 2xl:text-lg"
      >
        At <span className="font-bold">ReliaVet</span>, we understand your pet
        is a cherished member of your family. Caring about you and your pet is
        what we do, and our goal is to make your next interaction with a
        veterinarian as quick and painless as possible.
      </p>

      <button
        onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
        className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-5 lg:py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[200px] lg:max-w-[300px] 2xl:max-w-[350px] !text-sm lg:!text-xl 2xl:!text-2xl font-bold rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
}
