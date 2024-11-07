import Image from "next/image";

const Telemedicine = () => {
  return (
    <section className="container mx-auto">
      <div className="flex p-10">
        <Image
          alt="left"
          width={300}
          height={600}
          src={"/assets/images/Group67.png"}
        />
        <div className="">
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
            practice, giving you the flexibility to connect with clients
            remotely. From routine consultations to follow-up care, provide a
            convenient, efficient solution for your clients and enhance the
            accessibility of your services.
          </div>
        </div>
        <Image
          alt="left"
          width={300}
          height={600}
          src={"/assets/images/Group68.png"}
        />
      </div>
      <div>

      </div>
    </section>
  );
};

export default Telemedicine;