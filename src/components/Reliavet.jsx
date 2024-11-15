import Image from "next/image";

const Reliavet = () => {
  return (
    <section className="bg-[#EDEEF3] mx-auto py-8 sm:py-12 md:py-16 lg:py-24 max-sm:px-10 z-10">
      <div className="container mx-auto relative">
        <div
          className="text-[32px] leading-[36px] tracking-[-2px] text-center
                sm:text-[40px] sm:leading-[44px] sm:tracking-[-3px]
                md:text-[48px] md:leading-[52px] md:tracking-[-3.5px]
                lg:text-[55px] lg:leading-[59px] lg:tracking-[-4px]
                font-normal p-6"
        >
          Why <b>Reliavet</b>
        </div>
        <div className="">
          <div className="flex max-lg:flex-col gap-5 items-center justify-around">
            <Image
              src={"/assets/images/reliavet1.png"}
              alt=""
              className=""
              width={450}
              height={450}
            />
            <div className="flex items-center justify-center lg:w-3/5">
              <div
                className="text-[20px] leading-[30px] tracking-[-0.02em] text-center w-4/5 
                sm:text-[22px] sm:leading-[35px] sm:tracking-[-0.03em]
                md:text-[25px] md:leading-[40px] md:tracking-[-0.04em]
                lg:text-[30px] lg:leading-[48px] lg:tracking-[-0.04em] font-medium"
              >
                ReliaVet is more than a platform—it&apos;s a partner in your
                mission to provide outstanding veterinary care. We equip
                veterinarians with cutting-edge tools, support, and resources to
                meet the evolving needs of your practice and clients.
              </div>
            </div>
          </div>
          <div className="h-[2px] w-11/12 mx-auto bg-gradient-to-r from-[#a7a7a733] via-[#a7a7a7] to-[#a7a7a733] my-5" />
          <div className="flex max-lg:flex-col gap-5 items-center justify-around">
            <Image
              src={"/assets/images/reliavet2.png"}
              alt=""
              className=""
              width={450}
              height={450}
            />
            <div className="flex items-center justify-center lg:w-3/5">
              <div
                className="text-[20px] leading-[30px] tracking-[-0.02em] w-4/5 
                sm:text-[22px] sm:leading-[35px] sm:tracking-[-0.03em]
                md:text-[25px] md:leading-[40px] md:tracking-[-0.04em]
                lg:text-[30px] lg:leading-[48px] lg:tracking-[-0.04em] font-medium
                flex flex-col gap-4
                "
              >
                <div className="flex gap-2 items-center">
                  <Image
                    alt=""
                    src={"/assets/images/typcn_tick.png"}
                    width={32}
                    height={32}
                  />
                  Comprehensive Telemedicine Integration
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    alt=""
                    src={"/assets/images/typcn_tick.png"}
                    width={32}
                    height={32}
                  />
                  Education and Professional Growth
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    alt=""
                    src={"/assets/images/typcn_tick.png"}
                    width={32}
                    height={32}
                  />
                  Dedicated Support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-[25px] leading-[36px] text-center
          sm:text-[30px] sm:leading-[40px]
          md:text-[35px] md:leading-[45px]
          lg:text-[40px] lg:leading-[50px]
          font-normal py-20"
        >
          Then book an appointment today with ReliaVet to speak to one of our
          licensed veterinarians who will be happy to help!
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reliavet;
