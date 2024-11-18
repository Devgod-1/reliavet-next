"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Filters() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("technicians");

  return (
    <div className="container mx-auto rounded-lg">
      <div className="flex gap-x-4 w-full lg:w-1/4">
        <div
          className={`flex-1 py-4 px-4 text-center font-semibold rounded-t-xl ${
            activeTab === "technicians"
              ? "bg-white text-[#383838]"
              : "bg-[#C3D8FF] text-gray-700"
          }`}
          onClick={() => setActiveTab("technicians")}
        >
          Search veterinarians/Technicians
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end gap-4 p-5 bg-white lg:rounded-lg rounded-tl-none  shadow-[0px_4px_12px_#0002]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Select a state:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>Alaska</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Enter pet hospital:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>96504</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
          <button
            className="text-xs 2xl:text-sm bg-red-primary p-4 px-6 rounded-lg font-semibold text-white w-full max-w-[150px]"
            onClick={() => {
              if (!pathname.includes("/find-hospital/search-hospitals/")) {
                router.push("/find-hospital/search-hospitals/test");
              } else {
                router.push("/find-hospital/search-hospitals");
              }
            }}
          >
            {pathname.includes("/find-hospital/search-hospitals/")
              ? "Clear Filter"
              : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}
