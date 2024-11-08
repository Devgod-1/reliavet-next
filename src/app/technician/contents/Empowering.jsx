import Image from "next/image";

const Empowering = () => {
  return (
    <section className="flex py-20 sm:py-24 md:py-28 lg:py-40 relative container px-10 mx-auto">
      <Image
        alt="left"
        width={300}
        height={600}
        className="max-lg:absolute w-[100px] left-0 bottom-[10px] z-[1]"
        src={"/assets/images/Group67.png"}
      />
      <div className="z-[2]">
        <h2
          className="text-[32px] leading-[32px] tracking-[-0.02em] text-center
          sm:text-[40px] sm:leading-[40px] sm:tracking-[-0.03em]
          md:text-[48px] md:leading-[48px] md:tracking-[-0.035em]
          lg:text-[55px] lg:leading-[55px] lg:tracking-[-0.04em]
          font-semibold mb-5"
        >
          Empowering Veterinary Technicians to Succeed
        </h2>
        <div
          className="text-[16px] leading-[24px] text-center
          sm:text-[18px] sm:leading-[26px]
          md:text-[20px] md:leading-[28px]
          font-normal"
        >
          Veterinary technicians play a vital role in animal care, and at
          ReliaVet, we&apos;re here to support your journey every step of the way.
          With resources to boost your skills, access to job opportunities, and
          a community of fellow technicians, ReliaVet is your partner in
          delivering the best care for animals and advancing in your career.
        </div>
      </div>
      <Image
        alt="left"
        width={300}
        height={600}
        src={"/assets/images/Group68.png"}
        className="max-lg:absolute w-[100px] right-0 bottom-[10px] z-[1]"
      />
    </section>
  );
};

export default Empowering;
