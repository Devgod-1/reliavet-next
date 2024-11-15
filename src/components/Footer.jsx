import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#ECEEF2]">
      <div className="container mx-auto flex max-lg:flex-col max-lg:px-10 max-lg:gap-5 items-center pt-24">
        <div className="w-full">
          <Image
            src="/assets/logos/logo_2.png"
            alt=""
            width={160}
            height={50}
            className="max-w-[120px] 2xl:max-w-[160px]"
          />
          <p className="text-sm 2xl:text-[16px] mt-6 font-medium leading-[1.8] text-[#282828] w-full  max-w-[310px]">
            Reliavet was founded in 2020 by Dr. Ryan Andrews and Dr. Mary
            Andrews a husband and wife team of veterinarians living in South
            Carolina.
          </p>
        </div>
        <div className="w-full flex justify-between max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-5">
          <div className="w-fit max-md:hidden">
            <h4 className="text-[24px] 2xl:text-[28px] font-bold">Menu</h4>
            <div className="flex flex-col space-y-1">
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Pet Owner
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Veterinarian
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Hospital
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Technician
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Services
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                About us
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Contact us
              </Link>
              <Link
                href={"/"}
                className="text-[13px] 2xl:text-[15px] font-medium"
              >
                Find Vet
              </Link>
            </div>
          </div>

          <div className="w-fit">
            <h4 className="text-[24px] 2xl:text-[28px] font-bold">Contact</h4>
            <div className="flex flex-col space-y-1">
              <p>
                reliavet@contact.com
                <br />
                +012-345-6789
                <br />
                9889 Lorem Ipsum street,
                <br />
                Pellentesque, CA, USA
              </p>
            </div>
          </div>

          <div className="w-fit">
            <h4 className="text-[24px] 2xl:text-[28px] font-bold">
              Follow Us on:
            </h4>
            <div className="flex flex-col justify-between space-y-1 h-full">
              <div className="flex items-center mt-2 gap-3">
                <button className="bg-primary w-[32px] h-[32px] 2xl:w-[42px] 2xl:h-[42px] rounded-full flex items-center justify-center">
                  <Image src="/assets/logos/facebook.svg" alt="" width={14} height={10} />
                </button>
                <button className="bg-primary w-[32px] h-[32px] 2xl:w-[42px] 2xl:h-[42px] rounded-full flex items-center justify-center">
                  <Image src="/assets/logos/twitter.svg" alt="" width={16} height={16} />
                </button>
                <button className="bg-primary w-[32px] h-[32px] 2xl:w-[42px] 2xl:h-[42px] rounded-full flex items-center justify-center">
                  <Image src="/assets/logos/instagram.svg" alt="" width={16} height={16} />
                </button>
              </div>

              <button className="font-medium text-lg 2xl:text-xl flex items-center bg-white p-6 py-2 rounded-lg shadow-[2px_3px_12px_#243A8E2E] mt-auto max-[500px]:mt-3">
                <Image src="/assets/icons/icon-cs.svg" className="mr-3" alt="" width={57} height={57} /> Let&apos;s
                talk
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 flex items-center justify-between mt-20 border-t border-t-[#243A8E66] sm:text-sm 2xl:text-base text-xs">
        <span className="text-[#282828]">
          Copyright Dotcreativemarket
        </span>
        <div className="w-full max-w-[400px] flex items-center">
          <span className="flex w-full text-[#282828]">
            Terms of Use
          </span>
          <span className="flex w-full text-[#282828]">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
