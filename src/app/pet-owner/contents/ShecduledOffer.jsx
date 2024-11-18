import React from "react";

const ScheduledOffer = ({ className }) => {
  return (
    <div
      className={`absolute flex flex-col items-center top-0 left-0 w-full bg-[linear-gradient(114.9deg,#FFC3C9_20.24%,#FF8B97_88.65%)] p-5 lg:p-10 lg:py-14 rounded-[40px] lg:rounded-[60px] z-[20] ${className}`}
    >
      <div className="flex max-lg:flex-col gap-3 mt-6">
        <div className="w-full flex flex-col gap-4 lg:p-8  rounded-[40px]">
          <span className="text-[#DE1E33] bg-[#DE1E33]/10 p-3 w-fit rounded-full px-5 font-medium text-xs md:text-sm lg:text-base 2xl:text-lg lg:whitespace-nowrap">
            <span className="text-[10px] md:text-xs lg:text-sm 2xl:text-base">
              $
            </span>
            <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
              55
            </span>{" "}
            for a 20-minute appointment
          </span>
          <h4 className="2xl:text-[55px] text-[24px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-left mb-5">
            Scheduled Telemedicine Services
          </h4>
        </div>
        <div className="w-full flex flex-col gap-4 items-center bg-[#FFFFFF]/25 p-8  rounded-[40px]">
          <img src={"/assets/icons/icon-user-connect.svg"} alt="" />
          <div className="text-base lg:text-lg 2xl:text-xl font-semibold lg:max-w-[300px] text-center">
            Emergency <br />
            veterinary facility
          </div>
          <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] lg:max-w-[300px] text-center">
            If you feel your pet is having a life-threatening emergency, instant
            telemedicine is recommended only as a tool to help save your pet&apos;s
            life while you transport your pet to an emergency veterinary
            facility.
          </div>
        </div>
        <div className="w-[2px] h-[200px] max-lg:w-[200px] max-lg:h-[2px] mx-auto max-lg:bg-[linear-gradient(to_right,rgba(36,58,142,0)_2%,#DE1E33_52%,rgba(10,16,40,0)_100%)] bg-[linear-gradient(to_bottom,rgba(36,58,142,0)_2%,#DE1E33_52%,rgba(10,16,40,0)_100%)] my-auto"></div>
        <div className="w-full flex flex-col gap-4 items-center bg-[#FFFFFF]/25 p-8  rounded-[40px]">
          <img src={"/assets/icons/icon-person-computer-2.svg"} alt="" />
          <div className="text-base lg:text-lg 2xl:text-xl font-semibold lg:max-w-[300px] text-center">
            Face-to-face <br />
            video connection
          </div>
          <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] lg:max-w-[300px] text-center">
            With instant telemedicine, we provide you with a secure face-to-face
            video connection to a veterinarian to quickly assess your pet. If
            you believe your pet is sick or having an emergency, instant
            telemedicine will give you immediate guidance and triage advice to
            help save your pet&apos;s life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledOffer;
