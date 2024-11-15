import Image from "next/image";

const JoinVet = () => {
  return (
    <section>
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="w-full h-full xl:max-w-[50%] relative">
          <Image
            src="/assets/images/image_practice_1.png"
            alt="practice"
            className="object-cover"
            layout="responsive"
            width={700}
            height={450}
          />
        </div>
        <div className="w-full flex flex-col justify-center space-y-8 bg-[linear-gradient(213.61deg,#243A8E_10.73%,#5774CD_38.22%,#B13A66_72.38%,#DE1E33_89.27%)] p-20 max-xl:px-10">
          <span className="bg-red-primary rounded-full w-fit p-2 px-3 flex items-center text-white text-xs 2xl:text-sm pr-8">
            <Image
              src="/assets/icons/icon-wave.svg"
              alt=""
              className="max-w-[18px] 2xl:max-w-[24px] mr-2 "
              width={24}
              height={24}
            />{" "}
            Hey Veterinarians
          </span>
          <h2 className="text-[32px] 2xl:text-[36px] font-bold leading-[1.1] text-white !mt-4">
            Grow Your Practice with <br />
            Easy-to-Use Tools
          </h2>
          <p className="text-sm 2xl:text-base !leading-[2] block text-white !mt-8">
            ReliaVet connects pet owners with a network of trusted veterinarians dedicated to providing top-quality care for pets. Our platform makes it easy to find a nearby veterinarian or hospital, with features like location-based searches, profiles of qualified vets, and telemedicine options for added convenience. With ReliaVet, you can feel confident that your pet is in good hands, whether they need a routine checkup, a specialist, or emergency care.
          </p>
          <button className="bg-transparent p-6 py-4 2xl:p-7 2xl:py-5 w-fit text-white max-w-[300px] !mt-12 text-sm 2xl:text-base border border-white font-bold rounded-lg">
            Join as vet
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinVet;

