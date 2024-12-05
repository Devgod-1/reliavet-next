import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  useEffect(() => {
  }, []);

  return (
    <div>
      <div
        className="bg-[#ECEDF0] h-[90vh] overflow-hidden "
        style={{
          background: "url('/assets/images/bg-hero.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
          <div className="flex flex-col max-lg:h-full max-lg:justify-center items-center p-10 pb-0">
            <div className="flex flex-col items-center mt-[-2rem]">
              <h1
                className="font-bold leading-[1.4] lg:leading-[1.1] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[54px] 2xl:text-[68px] text-center capitalize"
              >
                Transform Hospital <br className="hidden lg:block" /> Operations
                with ReliaVet
              </h1>

              <ul className="grid grid-cols-2 sm:flex items-center gap-6 my-6">
                {[
                  { link: "pet-owner", name: "Pet Owner" },
                  { link: "veterinarian", name: "Veterinarian" },
                  { link: "technician", name: "Technician" },
                  { link: "hospital", name: "Hospital" },
                ].map((tabName, index) => (
                  <li
                    key={tabName.name}
                    onClick={() => router.push(`/${tabName.link}`)}
                    className={`${
                      tabName.link === "hospital" &&
                      'before:content-[""] before:w-full before:h-[1.5px] before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] before:absolute before:left-0 before:bottom-0 after:content-[""] after:w-full after:h-[5px] after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] after:absolute after:left-0 after:bottom-0 after:blur-[10px]'
                    } text-[8px] lg:text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2 relative w-fit px-6 py-3 hover:before:content-[""] hover:before:w-full hover:before:h-[1.5px] hover:before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:after:content-[""] hover:after:w-full hover:after:h-[5px] hover:after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:blur-[10px]`}
                  >
                    {tabName.name}
                  </li>
                ))}
              </ul>
            </div>

            <span
              className="text-base 2xl:text-lg text-[#636363] text-center mt-6"
            >
              Join leading veterinary hospitals using ReliaVet to improve
              workflows, manage <br className="hidden lg:block" /> appointments,
              and enhance client relationships.
            </span>

            <button
              onClick={() => {
                window.open(process.env.NEXT_PUBLIC_APP_URL, '_blank');
              }}
              className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-5 lg:py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[200px] lg:max-w-[300px] 2xl:max-w-[350px] !text-sm lg:!text-xl 2xl:!text-2xl font-bold rounded-lg"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-12 relative mt-[2rem]">
            <img
              src="/assets/images/hero_hospital.png"
              className="w-full max-w-[500px] 2xl:max-w-[550px] relative z-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
