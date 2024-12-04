"use client";

import { ChevronDown } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
import { useState } from "react";
import {useFetchStates} from "@/utils/fetchStates";
import {useFetchUserState} from "@/utils/fetchUserState";

export default function Filters() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("technicians");
  const {states} = useFetchStates();
  const { selectedState, setSelectedState } = useFetchUserState();

  const [hospitalName, setHospitalName] = useState("");

  const handleStateChange = async (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
  };

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
          Search Hospitals
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
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" value={selectedState} onChange={handleStateChange}>
                  <option value="">Select a State</option>
                  {states.map((state) => (
                      <option key={state.id} value={state.code}>
                        {state.name}
                      </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Enter pet hospital name:
              </label>
              <div className="relative">
                <input id="hospital_name" className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
              </div>
            </div>
          </div>
          <button
            className="text-xs 2xl:text-sm bg-red-primary p-4 px-6 rounded-lg font-semibold text-white w-full max-w-[150px]"
            onClick={() => {
              const query = new URLSearchParams({
                state: selectedState || "",
                hospital_name: document.getElementById("hospital_name").value || "",
              }).toString();
              router.push(`/find-hospital/search-hospitals/test?${query}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
