import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className={``}>
        <div className=" py-14 flex max-md:flex-col max-md:px-5 gap-20">
          <div className="w-full">
            <img
              src="/assets/images/bg-contact.png"
              alt="pet"
              className="max-lg:rounded-2xl lg:rounded-tr-[65px] lg:rounded-br-[65px]"
            />
          </div>
          <div className="max-lg:py-0 lg:p-10 w-full flex flex-col items-center justify-center">
            <div className="w-full lg:max-w-[500px] bg-[#243A8E]/5 border border-[#243A8E]/15 rounded-3xl p-5 lg:p-10 shadow-[0px_4px_10px_#0001,0px_4px_10px_#0001]">
              <h4 className="text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] leading-[1.3] font-semibold text-center">
                Have a question?{" "}
                <span className="block font-semibold">Get in touch.</span>
              </h4>

              <div className="space-y-8 mt-8">
                <input
                  placeholder="Name"
                  className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent w-full border-b border-b-[#243A8E]/70 pb-2"
                />
                <input
                  placeholder="Email address"
                  className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent w-full border-b border-b-[#243A8E]/70 pb-2"
                />
                <input
                  placeholder="Phone number"
                  className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent w-full border-b border-b-[#243A8E]/70 pb-2"
                />
                <input
                  placeholder="Message"
                  className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent w-full border-b border-b-[#243A8E]/70 pb-2"
                />
              </div>

              <div className="w-full flex justify-center mt-6">
                <button className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl text-sm 2xl:text-base bg-primary text-white p-4 px-8 rounded-lg font-medium ">
                  Submit
                </button>
              </div>
            </div>

            <div className="space-y-2 mt-6 lg:mt-12 max-lg:flex max-lg:flex-col max-lg:items-center">
              <div className="flex items-center text-sm lg:text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-email-red.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-[16px] lg:max-w-[18px] 2xl:max-w-[24px] mr-3 2xl:mr-3"
                />{" "}
                Contact@reliavet.com
              </div>
              <div className="flex items-center text-sm lg:text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-phone-red.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="max-w-[30px] lg:max-w-[32px] 2xl:max-w-[40px] mr-1 2xl:mr-1 -ml-2"
                />{" "}
                +34 123 456 789
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
