import Image from "next/image";

const FindVet = () => {
  return (
    <section className="container flex lg:flex-row flex-col justify-center lg:justify-between max-lg:gap-5 items-center mx-auto sm:py-24 py-10  max-sm:px-10 relative">
      <Image
        src="/assets/images/paw.svg"
        alt=""
        className="absolute top-[30%] translate-y-[-30%] right-[calc(100%+1rem)] 2xl:right-[calc(100%+4rem)]"
        width={75}
        height={70}
      />
      <Image
        src="/assets/images/best_care_1.png"
        alt=""
        className="w-full  max-w-[450px] 2xl:max-w-[550px] 2xl:mr-14 md:px-5 lg:hidden"
        width={550}
        height={550}
      />
      <div className="w-full max-w-[600px] flex flex-col justify-between">
        <h2 className="2xl:text-[40px] text-[27px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-medium leading-[48px] lg:mb-10 md:mb-5 mb-3">
          Find the Best Care for Your Pet with Trusted Veterinarians
        </h2>
        <p className="text-sm 2xl:text-base !leading-[2] block text-[#636363] mb-5 lg:mb-10">
          ReliaVet connects pet owners with a network of trusted veterinarians dedicated to providing top-quality care for pets. Our platform makes it easy to find a nearby veterinarian or hospital, with features like location-based searches, profiles of qualified vets, and telemedicine options for added convenience. With ReliaVet, you can feel confident that your pet is in good hands, whether they need a routine checkup, a specialist, or emergency care.
        </p>
        <button className="bg-bgPrimaryGradient py-6 md:py-8 2xl:py-10 w-full text-white sm:max-w-[350px] text-sm 2xl:text-2xl font-bold rounded-lg hover:bg-bgPrimaryGradient2 hover:shadow-lg">
          Get Started
        </button>
      </div>

      <Image
        src="/assets/images/best_care_1.png"
        alt=""
        className="w-full  max-w-[450px] 2xl:max-w-[550px] 2xl:mr-14 md:px-5 hidden lg:block"
        width={550}
        height={550}
      />
    </section>
  );
};

export default FindVet;
