import Image from "next/image";

const Streamline = () => {
  return (
    <section className="mt-28 relative max-md:p-10">
      <Image
        src="/assets/images/paw.svg"
        alt="Paw Background"
        className="absolute left-[45%] top-[-8.5rem] z-[-1]"
        width={100}
        height={120}
      />
      <div className="container relative md:py-32 mx-auto before:content-[''] before:absolute before:right-[100%] before:w-[600px] before:h-[500px] before:bg-red-primary before:rounded-full before:blur-[250px] before:z-[-1] before:opacity-60 after:content-[''] after:absolute after:left-[100%] after:w-[600px] after:h-[500px] after:bg-primary after:rounded-full after:blur-[250px] after:z-[-1] after:top-[50%] after:translate-y-[-50%] after:opacity-60">
        <div className="w-full flex md:flex-row flex-col rounded-[5rem] overflow-hidden bg-black text-white">
          <div className="w-full md:p-20 px-10 py-5">
            <h2 className="2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-semibold leading-[1.1] text-white !mt-4">
              Streamline Operations <br />
              and Enhance Patient Care
            </h2>
            <p className="text-sm 2xl:text-base !leading-[2] block text-white !mt-8">
              Manage appointments, staff, and telemedicine services seamlessly.
              Connect with pet owners and improve care delivery with tools
              designed for veterinary hospitals.
            </p>
            <button className="bg-transparent p-8 py-4 2xl:p-9 2xl:py-5 w-fit text-white max-w-[300px] !mt-12 text-sm 2xl:text-base border border-white font-bold rounded-lg">
              Learn More
            </button>
          </div>

          {/* Main Image with width and height */}
          <Image
            src="/assets/images/image_streamline_1.png"
            alt="Streamline Operations"
            className="w-full md:max-w-[50%] object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Streamline;
