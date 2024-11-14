const { default: Image } = require("next/image");

export default function Hospital() {
    return (
        <div className="bg-[#EDF3FF] flex-1 rounded-2xl p-10 relative before:content-[url('/assets/images/Vector.png')] before:absolute before:right-7 before:top-5 before:w-1 before:h-1">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[url(/assets/images/hospital.png)] bg-no-repeat bg-contain w-full h-[100px] bg-center"></div>
                <div className="mt-5 text-center">
                    <b>City Hospital</b>
                    <br />
                    <small className="text-[#636363]">New york</small>
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
                <button className="box-border text-center p-[12px] px-[32px] gap-[5px] isolate w-[90%] mx-auto mt-5 bg-[rgba(255,255,255,0.6)] border border-[#ACACAC] rounded-[9px]">
                    <span className="text-[#243a82]">View Vets,Techs</span>
                </button>
            </div>
        </div>
    );
};