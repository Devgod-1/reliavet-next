import Image from "next/image";

export default function Story() {
    return (
        <div className="container px-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 py-28">
            <div className="text-center md:text-left mb-10 md:mb-0">
                <h1 className="text-[36px] font-semibold leading-[36.36px] sm:text-[32px] sm:leading-[34px] md:text-[36px]md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5 text-center md:text-left">
                    Opu Story
                </h1>
                <p className="text-[#636363] w-full md:w-3/4">Reliable vets for you and your pets! When your pet is sick, every second counts and during these troubling times in-person appointments can sometimes take days or even weeks to become available. Instead of watching helplessly and waiting with concern, Reliavet gives you a reliable resource to have your pet quickly evaluated by a veterinarian and give you peace of mind.</p>
                <button className="px-3 py-4 lg:py-6 lg:px-8  rounded-full w-full lg:w-[500px] border mt-10 bg-[#ECEDF0] flex items-center justify-center gap-x-2 font-bold text-lg lg:text-xl">
                    <Image src='/assets/icons/icon-arrow-right.svg' width={20} height={20} alt="arrow_icon" />
                    Join our family at Reliavet today!
                </button>
            </div>
            <div className="flex justify-end">
                <Image src='/assets/images/story.png' alt="Story_image" width={615} height={644} />
            </div>
        </div>
    );
}
