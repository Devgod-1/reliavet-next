import Image from "next/image";

export default function Promo() {
    return (
        <div className="bg-[#ECEEF2] py-20 mt-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between p-2">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[36px] font-semibold leading-[36.36px] text-left sm:text-[32px] sm:leading-[34px] md:text-[36px]md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5 w-full md:w-4/6 text-[#243A8E]">Get our Articles delivered From us to your inbox weekly.</h1>
                        <p className="w-full md:w-4/6">Lorem ipsum dolor sit amet consectetur. Cras pellentesque sit eget fermentum dictumst neque suscipit neque sit. Luctus sit phasellus enim nulla aliquet.</p>
                    </div>
                </div>
                <div className="p-2 bg-white rounded-2xl flex flex-col items-center relative">
                    <Image src="/assets/images/laptop.png" width={566} height={270} alt="laptop" />
                    <div className="px-4 my-4">
                        <h1 className="text-xl font-bold mb-2">The best articles every week</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur. Amet odio morbi sed.</p>
                    </div>
                    <div className="h-[150px] w-[40px] bg-[#243A8E] absolute -right-10 top-[10%] rounded-r-xl hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}
