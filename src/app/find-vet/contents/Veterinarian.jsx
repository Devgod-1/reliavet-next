import Image from 'next/image';

export default function Veterinarian() {
    return (
        <div className="flex flex-col items-center justify-center">
            <span
                className="rounded-full bg-[url(/assets/images/vet.png)] bg-no-repeat bg-contain 
          w-[100px] h-[100px] border-[4px] border-[#8e244b48] relative
          before:content-[url('/assets/images/Ellipse.png')] before:absolute before:right-5 before:bottom-5 before:w-2 before:h-2
        "
            ></span>
            <div className="text-center">
                <b>By Mark B.</b>
                <br />
                <span>Technician</span>
            </div>
            <div className="flex gap-[2px]">
                <Image
                    alt="*"
                    src={"/assets/icons/Star_red.png"}
                    width={20}
                    height={20}
                />
                <Image
                    alt="*"
                    src={"/assets/icons/Star_red.png"}
                    width={20}
                    height={20}
                />
                <Image
                    alt="*"
                    src={"/assets/icons/Star_red.png"}
                    width={20}
                    height={20}
                />
                <Image
                    alt="*"
                    src={"/assets/icons/Star_red.png"}
                    width={20}
                    height={20}
                />
                <Image
                    alt="*"
                    src={"/assets/icons/Star_red_opacity.png"}
                    width={20}
                    height={20}
                />
            </div>
            <div className="mt-5">
                <b>State:</b> <span className="text-[#636363]">Alaska</span>
            </div>
            <div className="mt-2">
                <b>Hospital:</b>{" "}
                <span className="text-[#636363]">Northeast animal clinic</span>
            </div>
            <button className="box-border text-center p-[18px] px-[32px] gap-[5px] isolate w-[90%] hover:bg-[#243A8E] hover:text-white text-[#243A8E] border-[#243A8E] mx-auto mt-10  border  rounded-[9px]">
                <span>Book Now</span>
            </button>
        </div>
    );
}
