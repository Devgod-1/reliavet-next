import Image from "next/image";

const FindVet = () => {
  return (
    <section className="container flex  justify-between mx-auto py-32 relative">
      <Image
        src="/assets/images/paw.svg"
        alt=""
        className="absolute top-[30%] translate-y-[-30%] right-[calc(100%+1rem)] 2xl:right-[calc(100%+4rem)]"
        width={75}
        height={70}
      />
      <div className="w-full max-w-[600px] flex flex-col justify-between">
        <h2 className="text-[32px] 2xl:text-[36px] font-bold leading-[1.1]">
          Find the Best Care for Your <br />
          Pet with Trusted Veterinarians
        </h2>
        <p className="text-sm 2xl:text-base !leading-[2] block text-[#636363]">
          ReliaVet connects pet owners with a network of trusted veterinarians
          dedicated to providing top-quality care for pets. Our platform makes
          it easy to find a nearby veterinarian or hospital, with features like
          location-based searches, profiles of qualified vets, and telemedicine
          options for added convenience. With ReliaVet, you can feel confident
          that your pet is in good hands, whether they need a routine checkup, a
          specialist, or emergency care.
        </p>
        <button className="bg-bgPrimaryGradient p-6 py-8 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
          Get Started
        </button>
      </div>

      <Image
        src="/assets/images/best_care_1.png"
        alt=""
        className="w-full  max-w-[450px] 2xl:max-w-[550px] mr-10 2xl:mr-14"
        width={550}
        height={550}
      />
    </section>
  );
};

export default FindVet;
