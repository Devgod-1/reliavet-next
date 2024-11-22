"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Filters() {
  const [activeTab, setActiveTab] = useState("technicians");

  return (
    <div className="container mx-auto rounded-lg ">
      <div className="flex gap-x-2 lg:gap-x-4 w-full lg:w-2/4">
        <Link
          href={"/find-vet/search-veterinarians"}
          className={`text-sm lg:text-base flex-1 py-4 px-4 text-center font-semibold rounded-t-xl ${
            activeTab === "veterinarians"
              ? "bg-white text-[#383838] "
              : "bg-[#C3D8FF] text-gray-700"
          }`}
          onClick={() => setActiveTab("veterinarians")}
        >
          Search Veterinarians
        </Link>
        <Link
          href={"/find-vet/search-technicians"}
          className={`text-sm lg:text-base flex-1 py-4 px-4 text-center font-semibold rounded-t-xl ${
            activeTab === "technicians"
              ? "bg-white text-[#383838]"
              : "bg-[#C3D8FF] text-gray-700"
          }`}
          onClick={() => setActiveTab("technicians")}
        >
          Search Technicians
        </Link>
      </div>
      <div>
        <div className="flex max-lg:flex-col items-end gap-4 p-5 bg-white lg:rounded-lg rounded-tl-none  shadow-[0px_4px_12px_#0002]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {" "}
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
                Zip code:
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
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Vet name:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>Sarah Jhonson</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            {/* <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Type:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>technician</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div> */}
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Categories:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>Dog</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Rating:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>Excellent 5</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Pet Hospital:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>northeast animal clinic</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Availability:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm">
                  <option>immediate booking</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 "
                  size={20}
                />
              </div>
            </div>
          </div>

          <button className="text-xs 2xl:text-sm bg-red-primary p-4 px-6 rounded-lg font-semibold text-white w-full max-w-[150px]">
            Clear Filters
          </button>
        </div>
      </div>
      {/* <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                    Clear Filters
                </button>
            </div> */}
    </div>
  );
}
