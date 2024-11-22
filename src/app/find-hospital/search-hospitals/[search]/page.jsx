"use client";
import DialogViewHospital from "@/components/dialogs/DialogViewHospital";
import Hospital from "../../contents/Hospital";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
// import Hospital from "../contents/Hospital";

export default function Page() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-lg:pt-[16rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[...Array(12).keys()].map((i) => (
          <Hospital key={i} />
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
