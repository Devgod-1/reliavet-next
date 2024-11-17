import Image from "next/image";

export default function Story() {
  return (
    <div className="container px-[2rem] mx-auto flex max-lg:flex-col-reverse gap-12 lg:gap-24 items-center py-20 pb-14 lg:py-28">
      <div className="text-center md:text-left mb-10 md:mb-0 w-full">
        <h1 className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-semibold mb-5">
          Our Story
        </h1>
        <p className="text-[#636363] w-full text-sm lg:text-base 2xl:text-lg !leading-[1.8]">
          Reliable vets for you and your pets! When your pet is sick, every
          second counts and during these troubling times in-person appointments
          can sometimes take days or even weeks to become available. Instead of
          watching helplessly and waiting with concern, Reliavet gives you a
          reliable resource to have your pet quickly evaluated by a veterinarian
          and give you peace of mind.
        </p>
        <button className="px-3 py-4 lg:py-6 lg:px-8 rounded-full w-full lg:w-[500px] border mt-10 bg-[#ECEDF0] flex items-center justify-center gap-x-2 font-bold text-sm lg:text-lg 2xl::text-xl">
          <img
            src="/assets/icons/icon-arrow-right.svg"
            className="hidden sm:inline-block w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] 2xl:w-[20px] 2xl:h-[20px]"
            alt="arrow_icon"
          />
          Join our family at Reliavet today!
        </button>
      </div>
      <div className="flex justify-end w-full">
        <Image
          src="/assets/images/story.png"
          alt="Story_image"
          width={615}
          height={644}
        />
      </div>
    </div>
  );
}
