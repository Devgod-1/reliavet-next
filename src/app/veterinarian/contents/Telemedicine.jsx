"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const TelemedicineHeader = () => {

  useEffect(() => {

  }, []);

  return (
    <div className="z-[2] flex flex-col items-center w-full">
      <h2 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-center">
        Expand Your Practice with Telemedicine
      </h2>
      <div
        className="font-semibold text-sm lg:text-base 2xl:text-lg max-w-[800px] text-center mt-4"
      >
        ReliaVet allows you to seamlessly integrate telemedicine into your
        practice, giving you the flexibility to connect with clients remotely.
        From routine consultations to follow-up care, provide a convenient,
        efficient solution for your clients and enhance the accessibility of
        your services.
      </div>
    </div>
  );
};

const FeatureCard = ({ imageSrc, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div
      className="md:w-1/3 flex flex-col gap-4 items-center justify-center"
    >
      <Image src={imageSrc} alt="" width={60} height={60} />
      <div className="text-base lg:text-lg 2xl:text-xl font-semibold text-center">
        {title}
      </div>
      <div className="text-sm lg:text-base 2xl:text-lg text-[#636363] max-w-[300px] text-center !-mt-2">
        {description}
      </div>
    </div>
  );
};

const TelemedicineFeatureSection = () => {
  return (
    <div className="flex flex-row max-md:flex-col max-md:gap-10 items-center justify-around mt-10 lg:mt-5">
      <FeatureCard
        imageSrc="/assets/images/consultations.png"
        title="Easy Consultations"
        description="Offer virtual consultations with intuitive scheduling and video tools."
      />
      <FeatureCard
        imageSrc="/assets/images/patient.png"
        title="Patient Records Access"
        description="Review patient history quickly for informed consultations."
      />
      <FeatureCard
        imageSrc="/assets/images/secure.png"
        // title="Secure Communication"
        title="Secure Connection"
        description="Connect with clients knowing your information is safe"
      />
    </div>
  );
};

const Telemedicine = () => {
  const router = useRouter();
  const sectionRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <section
      className="
      relative overflow-hidden
      before:content-[''] before:absolute before:right-[90%] before:w-[600px] before:bottom-[0%]
      before:h-[500px] before:bg-red-primary before:rounded-full before:blur-[250px] before:z-[-1] before:opacity-60 
      after:content-[''] after:absolute after:left-[90%] after:w-[600px] after:h-[500px] 
      after:bg-primary after:rounded-full after:blur-[250px] after:z-[-1] after:bottom-[0%] after:translate-y-[-10%] after:opacity-60
    "
    >
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 max-sm:px-10">
        <div className="flex flex-col lg:flex-row py-8 sm:py-12 md:py-16 lg:py-24 relative">
          <img
            alt="left"
            className="max-sm:absolute max-lg:w-[100px] w-full max-w-[150px] h-[250px] max-lg:h-[unset] left-0 bottom-[10px] z-[1]"
            src="/assets/images/Group67.png"
          />
          <TelemedicineHeader />
          <img
            alt="right"
            src="/assets/images/Group68.png"
            className="max-sm:absolute max-lg:w-[100px] w-full max-w-[150px] h-[250px] max-lg:h-[unset] right-0 bottom-[10px] z-[1]"
          />
          <div className="w-[200px] h-[165px] lg:hidden"></div>
        </div>
        <div className="w-full rounded-3xl bg-customgradient p-8 lg:p-14 max-lg:mt-10 backdrop-custom-blur">
          <div>
            <h1 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-center lg:mb-10">
              Features
            </h1>
            <TelemedicineFeatureSection />
            <div className="py-5 flex items-center justify-center">
              <button
                  onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL + "/register"}
                className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telemedicine;
