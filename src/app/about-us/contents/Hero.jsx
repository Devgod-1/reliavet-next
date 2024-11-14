import Image from "next/image";

export default function Hero() {
    return (
        <div
            style={{
                background: "url('/assets/images/kuttar_chap.png')",
                backgroundSize: "100%",
            }} className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] 2xl:h-[90vh] justify-center relative py-14">
            <Image src='/assets/images/Group67.png' className="absolute md:left-[6%] lg:md:left-[12%] top-[20%] hidden md:block" alt="hero" width={160} height={265} />
            <Image src='/assets/images/Group68.png' className="absolute md:right-[6%] lg:md:right-[12%] top-[20%] hidden md:block" alt="hero" width={160} height={265} />
            <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]">About Us</h1>
            <p className="w-full md:w-2/6 text-center px-5 text-[#636363]">At ReliaVet, we understand your pet is a cherished member of your family. Caring about you and your pet is what we do, and our goal is to make your next interaction with a veterinarian as quick and painless as possible.</p>
            <button className="bg-bgPrimaryGradient p-6 py-8 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
                Get Started
            </button>
        </div>
    );
}
