import Image from "next/image";

export default function Promo() {
  return (
    <div
      className="bg-[#ECEEF2] py-20 "
      
    >
      <div className="container mx-auto max-lg:p-5 flex flex-col md:flex-row justify-between p-2 mt-[16rem]">
        <div className="flex items-center">
          <div>
            <h1 className="text-[36px] 2xl:text-[40px] font-semibold !leading-[1.3] text-left  py-5 w-full text-[#243A8E]">
              Get our Articles delivered From <br /> us to your inbox weekly.
            </h1>
            <p className="w-full max-w-[650px] text-sm 2xl:text-base leading-[1.8]">
              Lorem ipsum dolor sit amet consectetur. Cras pellentesque sit eget
              fermentum dictumst neque suscipit neque sit. Luctus sit phasellus
              enim nulla aliquet.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[450px] 2xl:max-w-[500px] p-2 max-lg:bg-[#ECEEF2] bg-white rounded-2xl flex flex-col items-center relative max-lg:mt-10">
          <Image
            src="/assets/images/laptop.png"
            width={566}
            height={270}
            alt="laptop"
          />
          <div className="px-6 my-6">
            <h1 className="text-xl font-bold mb-2">
              The best articles every week
            </h1>
            <p className="text-[#636363] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Amet odio morbi sed.
            </p>
          </div>
          <div className="h-[150px] 2xl:h-[200px] w-[40px] bg-[#243A8E] absolute -right-10 top-[10%] rounded-r-xl hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}
