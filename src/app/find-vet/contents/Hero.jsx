import Filters from "./Filters";

export default function Hero() {
    return (
        <div style={{
            background: "url('/assets/images/kuttar_chap.png')",
            backgroundSize: "100%",
        }} className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[90vh] justify-center relative py-14 mb-48 px-[2rem] md:p-0">
            <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px] text-center">Find the Best <br /> Veterinarian Near You</h1>
            <p className="text-[#636363]">Search by location, specialty, and availability to find the perfect care for your pet.</p>
            <div className="absolute -bottom-[20%] w-full px-[2rem] md:p-0">
                <Filters />
            </div>
        </div>
    );
}
