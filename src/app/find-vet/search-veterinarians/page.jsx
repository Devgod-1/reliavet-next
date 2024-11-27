"use client";
import { FindVeterinarianCard } from "@/app/pet-owner/contents/FindVeterinarian";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-lg:pt-[16rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-[2rem] md:p-0">
        {[...Array(12).keys()].map((i) => (
          <FindVeterinarianCard
            name={"By Mark B."}
            key={i}
            state={"Alaska"}
            hospital={"Northeast animal clinic"}
            role={"Technician"}
            rating={4}
            profileImage={"/assets/images/vet.png"}
            className="!bg-[#243A8E]/20"
            buttonClassName="!text-[#243A8E] hover:!bg-[#243A8E] hover:!text-white !bg-transparent !border-[#243A8E] !py-3"
          />
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
        <button className="p-3 border border-[#DEE2E7] rounded-tl-lg rounded-bl-lg  w-[45px] h-[45px] border-r-0 hover:bg-[#DE1E33] group">
          <ChevronLeft className="group-hover:invert w-[20px] h-[20px]" />
        </button>
        <button className="text-xs lg:text-sm 2xl:text-base font-medium w-[45px] h-[45px] border-[#DEE2E7] border-r-0 border hover:bg-[#DE1E33] hover:text-white">
          1
        </button>
        <button className="text-xs lg:text-sm 2xl:text-base font-medium w-[45px] h-[45px] border-[#DEE2E7] border-r-0 border hover:bg-[#DE1E33] hover:text-white">
          2
        </button>
        <button className="text-xs lg:text-sm 2xl:text-base font-medium w-[45px] h-[45px] border-[#DEE2E7] border-r-0 border hover:bg-[#DE1E33] hover:text-white">
          3
        </button>
        <button className="text-xs lg:text-sm 2xl:text-base font-medium w-[45px] h-[45px] border-[#DEE2E7] border-r-0 border hover:bg-[#DE1E33] hover:text-white">
          4
        </button>
        <button className="text-xs lg:text-sm 2xl:text-base font-medium w-[45px] h-[45px] border-[#DEE2E7] border-r-0 border hover:bg-[#DE1E33] hover:text-white">
          5
        </button>
        <button className="p-3 border border-[#DEE2E7] rounded-tr-lg rounded-br-lg  w-[45px] h-[45px] hover:bg-[#DE1E33] group">
          <ChevronRight className="group-hover:invert w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
}
