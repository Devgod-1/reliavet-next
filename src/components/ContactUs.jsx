import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="bg-[linear-gradient(215.82deg,#243A8E_18.23%,#496FFF_81.77%)]">
        <div className="container mx-auto text-white py-14 flex max-md:flex-col max-md:px-5 gap-20">
          <div className="w-full mt-12">
            <div>
              <h4 className="text-[27px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px] font-bold">
                Contact us{" "}
              </h4>
              <span className="text-base 2xl:text-lg">
                Have questions or need assistance? Our dedicated support <br />{" "}
                team is here to help you make the most of ReliaVet.
              </span>
            </div>
            <div className="space-y-2 mt-12">
              <div className="flex items-center text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-email.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-[18px] 2xl:max-w-[24px] mr-3 2xl:mr-3"
                />{" "}
                Contact@reliavet.com
              </div>
              <div className="flex items-center text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-phone.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="max-w-[32px] 2xl:max-w-[40px] mr-1 2xl:mr-1 -ml-2"
                />{" "}
                +34 123 456 789
              </div>
            </div>
          </div>
          <div className="w-full bg-white/5 border border-white/50 rounded-3xl p-7 2xl:p-10">
            <h4 className="text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] leading-[1.3] font-bold">
              Have a question?{" "}
              <span className="block font-semibold">Get in touch.</span>
            </h4>

            <div className="space-y-8 mt-8">
              <input
                placeholder="Name"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Email address"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Phone number"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Message"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
            </div>

            <button className="text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold bg-black w-full py-4 rounded-xl mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#243A8E33]">
        <div className="py-6 2xl:py-10 container mx-auto flex max-md:flex-col max-md:px-5 items-center justify-between">
          <h4 className="max-sm:text-[25px] text-[30px] 2xl:text-[40px] leading-[1.3] font-bold">
            Subscribe to Newsletter
          </h4>

          <div className="w-full bg-white max-w-[500px] 2xl:max-w-[600px] flex items-center rounded-2xl overflow-hidden">
            <input className="w-full  h-[80px] 2xl:h-[90px]" />
            <button className="bg-red-primary rounded-2xl shadow-[-4px_0px_20px_#D9D9D9aa] w-fit text-lg 2xl:text-xl font-bold text-white   h-[80px] 2xl:h-[90px] px-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
