import Image from "next/image";

const TelemedicineHeader = () => {
  return (
    <div className="z-[2]">
      <h2
        className="text-[32px] leading-[32px] tracking-[-0.02em] text-center
          sm:text-[40px] sm:leading-[40px] sm:tracking-[-0.03em]
          md:text-[48px] md:leading-[48px] md:tracking-[-0.035em]
          lg:text-[55px] lg:leading-[55px] lg:tracking-[-0.04em]
          font-semibold mb-5"
      >
        Expand Your Practice with Telemedicine
      </h2>
      <div
        className="text-[16px] leading-[24px] text-center
          sm:text-[18px] sm:leading-[26px]
          md:text-[20px] md:leading-[28px]
          font-normal"
      >
        ReliaVet allows you to seamlessly integrate telemedicine into your
        practice, giving you the flexibility to connect with clients remotely.
        From routine consultations to follow-up care, provide a convenient,
        efficient solution for your clients and enhance the accessibility of
        your services.
      </div>
    </div>
  );
};

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="md:w-1/3 flex flex-col gap-4 items-center justify-center">
      <Image src={imageSrc} alt="" width={60} height={60} />
      <div
        className="text-[20px] leading-[28px] tracking-[-0.03em] text-center
          sm:text-[22px] sm:leading-[28px] sm:tracking-[-0.035em]
          md:text-[24px] md:leading-[30px] md:tracking-[-0.04em]
          font-semibold"
      >
        {title}
      </div>
      <div
        className="text-[18px] leading-[26px] tracking-[-0.02em] text-center
          sm:text-[20px] sm:leading-[28px] sm:tracking-[-0.03em]
          md:text-[22px] md:leading-[30px] md:tracking-[-0.04em]
          font-normal text-[#636363]"
      >
        {description}
      </div>
    </div>
  );
};

const TelemedicineFeatureSection = () => {
  return (
    <div className="flex flex-row max-md:flex-col max-md:gap-3 items-center justify-around mt-5">
      <FeatureCard
        imageSrc="/assets/images/consultations.png"
        title="Easy Consultations"
        description="Offer virtual consultations with intuitive scheduling and video tools."
      />
      <FeatureCard
        imageSrc="/assets/images/patient.png"
        title="Patient Records Access"
        description="Review patient history quickly for informed consultations."
      />
      <FeatureCard
        imageSrc="/assets/images/secure.png"
        title="Secure Communication"
        description="Have questions answered and receive advice about your pets for only $35"
      />
    </div>
  );
};

const Telemedicine = () => {
  return (
    <section
      className="
      relative overflow-hidden
      before:content-[''] before:absolute before:right-[90%] before:w-[600px] before:bottom-[0%]
      before:h-[500px] before:bg-red-primary before:rounded-full before:blur-[250px] before:z-[-1] before:opacity-60 
      after:content-[''] after:absolute after:left-[90%] after:w-[600px] after:h-[500px] 
      after:bg-primary after:rounded-full after:blur-[250px] after:z-[-1] after:bottom-[0%] after:translate-y-[-10%] after:opacity-60
    "
    >
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 max-sm:px-10 ">
        <div className="flex py-8 sm:py-12 md:py-16 lg:py-24 relative">
          <Image
            alt="left"
            width={300}
            height={600}
            className="max-sm:absolute w-[100px] left-0 bottom-[10px] z-[1]"
            src={"/assets/images/Group67.png"}
          />
          <TelemedicineHeader />
          <Image
            alt="left"
            width={300}
            height={600}
            src={"/assets/images/Group68.png"}
            className="max-sm:absolute w-[100px] right-0 bottom-[10px] z-[1]"
          />
        </div>
        <div className="w-full rounded-3xl bg-customgradient p-4 sm:p-6 md:p-8 lg:p-10 backdrop-custom-blur">
          <div>
            <h1
              className="text-center text-[36px] leading-[40px] tracking-[-0.02em] 
              sm:text-[44px] sm:leading-[48px] sm:tracking-[-0.03em]
              md:text-[50px] md:leading-[55px] md:tracking-[-0.035em]
              lg:text-[55px] lg:leading-[59px] lg:tracking-[-0.04em]
              font-bold py-5 lg:py-8"
            >
              Feature
            </h1>
            <TelemedicineFeatureSection />
            <div className="py-5 flex items-center justify-center">
              <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-4 py-6 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telemedicine;
