import Image from "next/image";

const Reliavet = ({ features = [], whyText = "" }) => {
  return (
    <section className="bg-[#EDEEF3] mx-auto py-8 sm:py-12 md:py-16 lg:py-24 max-sm:px-10 z-10">
      <div className="container mx-auto relative">
        <div
          className=" text-center
                2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1]
                font-semibold mb-12"
        >
          Why <span className="font-bold">Reliavet</span>
        </div>
        <div className="">
          <div className="flex max-lg:flex-col gap-5 items-stretch">
            <Image
              src={"/assets/images/reliavet1.png"}
              alt=""
              className=""
              width={450}
              height={450}
            />
            <div className="flex items-center justify-center lg:w-3/5 relative">
              <img
                src="/assets/icons/paw.svg"
                className="absolute w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] left-2 top-2 lg:left-5 lg:top-5"
              />
              <img
                src="/assets/icons/paw.svg"
                className="absolute w-[60px] h-[60px] 2xl:w-[75px] 2xl:h-[75px] right-0 bottom-0 lg:right-5 lg:bottom-5 rotate-[-90deg]"
              />
              <div className="font-semibold text-[#282828] h-full flex justify-center items-center p-10 px-5 lg:px-20 2xl:px-32">
                {whyText}
              </div>
            </div>
          </div>
          <div className="h-[2px] w-11/12 mx-auto bg-gradient-to-r from-[#a7a7a733] via-[#a7a7a7] to-[#a7a7a733] my-12" />
          <div className="flex max-lg:flex-col gap-5 items-stretch">
            <Image
              src={"/assets/images/reliavet2.png"}
              alt=""
              className=""
              width={450}
              height={450}
            />
            <div className="flex items-center justify-center relative w-full  p-10 px-5 lg:px-20 2xl:px-32">
              <img
                src="/assets/icons/paw.svg"
                className="absolute w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] left-2 top-2 lg:left-5 lg:top-5"
              />
              <img
                src="/assets/icons/paw.svg"
                className="absolute w-[60px] h-[60px] 2xl:w-[75px] 2xl:h-[75px] right-0 bottom-0 lg:right-5 lg:bottom-5 rotate-[-90deg]"
              />

              <div className="flex flex-col items-start  w-full font-semibold text-[#282828] text-sm lg:text-base 2xl:text-lg lg:p-10 space-y-4                ">
                {features?.map((feature, idx) => (
                  <div
                    className="flex gap-2 items-start w-full"
                    key={idx + feature}
                  >
                    <img
                      alt=""
                      src={"/assets/images/typcn_tick.png"}
                      className="w-[20px] h-[20p] 2xl:w-[22px] 2xl:h-[22px] mr-2 mt-[.25rem]"
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className=" text-center
         font-bold text-[22px] lg:text-[26px] 2xl:text-[30px] pt-20"
        >
          Then book an appointment today with ReliaVet to speak to one of{" "}
          <br className="hidden lg:block" />
          our licensed veterinarians who will be happy to help!
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-sm lg:text-xl 2xl:text-2xl font-bold rounded-lg">
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reliavet;
