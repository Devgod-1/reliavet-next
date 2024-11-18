import React from "react";

const InstantServiceOffer = ({ className }) => {
  return (
    <div
      className={`absolute flex flex-col items-center top-0 left-0 w-full bg-[linear-gradient(127.08deg,#C3D8FF_16.8%,#89AEFF_83.2%)] p-5 lg:p-10 py-14 rounded-[40px] lg:rounded-[60px] z-[20] ${className}`}
    >
      <h4 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-center mb-5">
        Instant Teletriage Services
      </h4>
      <span className="text-[#DE1E33] bg-[#DE1E33]/10 p-3 rounded-full px-5 font-medium text-sm lg:text-base 2xl:text-lg">
        <span className="text-xs lg:text-sm 2xl:text-base">$</span>
        <span className="text-lg lg:text-xl 2xl:text-2xl">75</span> for a
        20-minute appointment
      </span>

      <div className="flex max-lg:flex-col gap-6 mt-6">
        <div className="full flex flex-col gap-4 items-center bg-[#FFFFFF]/25 p-8  rounded-[40px]">
          <img src={"/assets/icons/icon-veterinary.svg"} alt="" />
          <div className="text-base lg:text-lg 2xl:text-xl font-semibold max-w-[300px] text-center">
            Pre-existing veterinary
            <br />
            client-patient relationship.
          </div>
          <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] max-w-[300px] text-center">
            Using instant telemedicine, a veterinarian may be limited in what
            illnesses he or she can treat. During initial triage, suggestions
            will be given to help improve the outcome of your pet&apos;s health;
            however, certain medications cannot be prescribed without a
            pre-existing veterinary client-patient relationship.
          </div>
        </div>
        <div className="w-[2px] h-[200px] max-lg:w-[200px] max-lg:h-[2px] mx-auto max-lg:bg-[linear-gradient(to_right,rgba(36,58,142,0)_2%,#243A8E_52%,rgba(10,16,40,0)_100%)] bg-[linear-gradient(to_bottom,rgba(36,58,142,0)_2%,#243A8E_52%,rgba(10,16,40,0)_100%)] my-auto"></div>
        <div className="full flex flex-col gap-4 items-center bg-[#FFFFFF]/25 p-8  rounded-[40px]">
          <img src={"/assets/icons/icon-alert.svg"} alt="" />
          <div className="text-base lg:text-lg 2xl:text-xl font-semibold max-w-[300px] text-center">
            Emergency <br />
            veterinary facility
          </div>
          <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] max-w-[300px] text-center">
            If you feel your pet is having a life-threatening emergency, instant
            telemedicine is recommended only as a tool to help save your pet&apos;s
            life while you transport your pet to an emergency veterinary
            facility.
          </div>
        </div>
        <div className="w-[2px] h-[200px] max-lg:w-[200px] max-lg:h-[2px] mx-auto max-lg:bg-[linear-gradient(to_right,rgba(36,58,142,0)_2%,#243A8E_52%,rgba(10,16,40,0)_100%)] bg-[linear-gradient(to_bottom,rgba(36,58,142,0)_2%,#243A8E_52%,rgba(10,16,40,0)_100%)] my-auto"></div>
        <div className="full flex flex-col gap-4 items-center bg-[#FFFFFF]/25 p-8  rounded-[40px]">
          <img src={"/assets/icons/icon-person-computer.svg"} alt="" />
          <div className="text-base lg:text-lg 2xl:text-xl font-semibold max-w-[300px] text-center">
            Face-to-face <br />
            video connection
          </div>
          <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] max-w-[300px] text-center">
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

export default InstantServiceOffer;
