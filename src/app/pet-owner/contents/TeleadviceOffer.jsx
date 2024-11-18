import React from "react";

const TeleadviceOffer = ({ className }) => {
  return (
    <div
      className={`absolute flex flex-col items-center top-0 left-0 w-full bg-[linear-gradient(127.08deg,#C3D8FF_16.8%,#89AEFF_83.2%)] p-5 lg:p-10 lg:py-14 rounded-[40px] lg:rounded-[60px] z-[20] ${className}`}
    >
      <div className="flex max-lg:flex-col gap-6">
        <div className="w-full flex max-lg:flex-col items-center bg-[#FFFFFF]/25 rounded-[20px] lg:rounded-[40px] overflow-hidden">
          <img
            src={"/assets/images/teleadvice_img.png"}
            alt=""
            className="max-h-[700px] w-full lg:w-[50%]"
          />
          <div className="p-4 lg:p-8 w-full lg:w-[50%] flex flex-col items-center justify-center">
            <span className="text-[#DE1E33] bg-[#DE1E33]/10 p-3 w-fit rounded-full px-5 font-medium text-xs md:text-sm lg:text-base 2xl:text-lg lg:whitespace-nowrap mb-9">
              <span className="text-[10px] md:text-xs lg:text-sm 2xl:text-base">
                $
              </span>
              <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                35
              </span>{" "}
              for a 20-minute appointment
            </span>
            <h4 className="2xl:text-[46px] text-[28px] md:text-[32px] lg:text-[36px]  leading-[1.4] lg:leading-[1.1] font-bold text-center mb-5">
              Teleadvice Services
            </h4>
            <div className="text-xs !leading-[1.7] 2xl:text-sm text-[#636363] text-center p-5 pt-0 lg:px-8">
              Not all situations require a pet owner to visit with their
              veterinarian face-to-face. Sometimes you may just have a question
              or need something explained in more detail. With teleadvice, you
              can speak directly to a veterinarian over the telephone and get
              reliable answers to your questions. <br /> Teleadvice is only used
              for informational purposes and general advice. Our veterinarians
              are not allowed to diagnose, treat, or prescribe medications using
              teleadvice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeleadviceOffer;
