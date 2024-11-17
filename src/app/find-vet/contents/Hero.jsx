import Filters from "./Filters";

export default function Hero() {
  return (
    <div
      style={{
        background: "url('/assets/images/kuttar_chap.png')",
        backgroundSize: "100%",
      }}
      className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[90vh] justify-center py-14 mb-48 px-[2rem] md:p-0 relative"
    >
      <ul className="absolute top-0 left-[50%] translate-x-[-50%] grid grid-cols-3 max-lg:w-full max-lg:max-w-[400px] sm:flex items-center lg:gap-6 mt-6 uppercase">
        {[
          { link: "pet-owner", name: "Pet Owner" },
          { link: "veterinarian", name: "Veterinarian" },
          { link: "hospital", name: "Pet Hospital" },
        ].map((tabName) => (
          <li
            key={tabName.name}
            // onClick={() => router.push(`/${tabName.link}`)}
            className={` text-[8px] lg:text-[13px] max-lg:mx-auto 2xl:text-[15px] font-bold cursor-pointer border-b-2 relative w-fit px-4 lg:px-6 py-3 hover:before:content-[""] uppercase hover:before:w-full hover:before:h-[1.5px] hover:before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:after:content-[""] hover:after:w-full hover:after:h-[5px] hover:after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:blur-[10px] tab-list-gradient`}
          >
            {tabName.name}
          </li>
        ))}
      </ul>

      <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px] mt-[-20vh] lg:mt-[-20vh] text-center">
        Find the Best <br /> Veterinarian Near You
      </h1>
      <p className="text-[#636363] text-xs lg:text-base text-center">
        Search by location, specialty, and availability to find the perfect care
        for your pet.
      </p>
      <div className="absolute -bottom-[50vh] lg:-bottom-[15%] w-full px-[2rem] md:p-0">
        <Filters />
      </div>
    </div>
  );
}
