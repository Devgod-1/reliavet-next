import Filters from "./Filters";

export default function Hero() {
  return (
    <div
      style={{
        background: "url('/assets/images/kuttar_chap.png')",
        backgroundSize: "100%",
      }}
      className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[90vh] 2xl:h-[75vh] justify-center py-14 mb-48 px-[2rem] md:p-0 relative"
    >
      <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px] mt-[-20vh] lg:mt-[-10vh] text-center">
        Find the Pet Hospital of <br /> Your choice
      </h1>
      <p className="text-[#636363] text-xs lg:text-base text-center">
        FInd out which option suites you best
      </p>
      <div className="absolute -bottom-[50vh] lg:-bottom-[10vh]  w-full px-[2rem] md:p-0">
        <Filters />
      </div>
    </div>
  );
}
