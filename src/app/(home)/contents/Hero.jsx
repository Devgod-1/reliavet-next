"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="bg-[#ECEDF0] 2xl:h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] lg:h-[70vh] h-[60vh] overflow-hidden">
      <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
        <div className="flex flex-col items-center p-10 text-center">
          <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]">
            Your Trusted Partner in Pet Care <br className="hidden lg:block" />
            Tailored Solutions for Every Role
          </h1>

          <ul className="flex max-sm:hidden max-sm:gap-1 items-center gap-6 mt-6">
            {[
              { link: "pet-owner", name: "Pet Owner" },
              { link: "veterinarian", name: "Veterinarian" },
              { link: "technician", name: "Technician" },
              { link: "hospital", name: "Hospital" },
            ].map((tabName) => (
              <li
                key={tabName.name}
                onClick={() => router.push(`/${tabName.link}`)}
                className={`text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2 relative w-fit px-6 py-3 hover:before:content-[""] hover:before:w-full hover:before:h-[1.5px] hover:before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:after:content-[""] hover:after:w-full hover:after:h-[5px] hover:after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:blur-[10px]`}
              >
                {tabName.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-12 relative after:absolute after:content-[''] after:w-[800px] after:h-[800px] after:rounded-full after:bg-primary after:blur-[300px] after:top-[calc(100%-18rem)] after:left-[-10rem] after:opacity-70 after:z-[1]">
          <Image
            src="/assets/images/hero_section_1.png"
            className="sm:w-full !w-[70%] relative max-sm:absolute z-[2] max-sm:-bottom-0 max-sm:-left-[35%] hidden lg:block"
            alt="hero"
            width={600}
            height={420}
          />
          <div className="w-full flex flex-col items-end pb-4 justify-center relative z-[2]">
            <h4 className="font-bold 2xl:text-[32px] xl:text-[26px] lg:text-[20px] sm:text-[18px] text-[16px] sm:text-nowrap text-center">
              Find the Best Care for Your Pet <br className="hidden lg:block"/> with Trusted Veterinarians
            </h4>
            <button className="bg-gradient-to-r from-[#D8003E] to-[#3F8EFF] p-4 py-6 2xl:p-6 2xl:py-8 w-full text-white max-w-[200px] 2xl:max-w-[250px] text-sm font-bold rounded-lg mt-8 mx-auto hover:from-[#3F8EFF] hover:to-[#D8003E] transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
