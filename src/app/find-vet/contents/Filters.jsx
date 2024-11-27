"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {useFetchCategories} from "@/utils/fetchCategories";
import {useFetchStates} from "@/utils/fetchStates";
import axios from "axios";
export default function Filters({ onSearchResults }) {
  const [activeTab, setActiveTab] = useState("veterinarians");
  const { states } = useFetchStates();
  const { categories } = useFetchCategories();
  const [ selectedState, setSelectedState ] = useState('');
  const [ selectedRating, setSelectedRating ] = useState('');
  const [ selectedCategory, setSelectedCategory ] = useState('');
  const [ selectedAvailability, setSelectedAvailability ] = useState('');
  const [ zipcode, setZipcode ] = useState('');
  const [ doctorName, setDoctorName ] = useState('');
  const [ hospitalName, setHospitalName ] = useState('');
  const [ error, setError ] = useState('');


  const handleSearch = async (query) => {
    try {
      let response;
      if (activeTab == 'veterinarians')
        response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/veterinarians?${query}`);
      else
        response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/technicians?${query}`);

      onSearchResults(response.data.data); // Pass results to the parent component
    } catch (error) {
      setError(error);
    }
  };

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
                <select id="state" className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setSelectedState(e.target.value)}>
                  <option value=""></option>
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
                Zip code:
              </label>
              <div className="relative">
                <input id="zipcode" className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setZipcode(e.target.value)}/>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Vet name:
              </label>
              <div className="relative">
                <input id="vet_name" className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setDoctorName(e.target.value)} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Pet Hospital:
              </label>
              <div className="relative">
                <input id="hospital_name" className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setHospitalName(e.target.value)}/>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Rating:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setSelectedRating(e.target.value)}>
                  <option value=""></option>
                  <option value="5">Excellent 5</option>
                  <option value="4.5">Superb 4.5+</option>
                  <option value="4">Very Good 4+</option>
                  <option value="3.5">Good 3.5+</option>
                  <option value="3">Pleasant 3+</option>
                </select>
                <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs 2xl:text-sm text-[#636363]">
                Categories:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value=""></option>
                  {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
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
                Availability:
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border rounded appearance-none pr-8 text-xs 2xl:text-sm" onChange={(e) => setSelectedAvailability(e.target.value)}>
                  <option value=""></option>
                  <option value="1">Immediate Booking</option>
                  <option value="0">Future Booking</option>
                </select>
                <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                />
              </div>
            </div>
          </div>

          <button className="text-xs 2xl:text-sm bg-red-primary p-4 px-6 rounded-lg font-semibold text-white w-full max-w-[150px]"
                  onClick={() => {
                    const searchParams = {
                      state: selectedState,
                      zipcode: zipcode,
                      vet_name: doctorName,
                      hospital_name: hospitalName,
                      rating: selectedRating,
                      categories: selectedCategory,
                      availability: selectedAvailability,
                    };
                    console.log('Search Parameters:', searchParams);

                    // Example: Redirect with query string
                    const queryString = new URLSearchParams(searchParams).toString();
                    console.log(queryString);
                    handleSearch(queryString);
                  }}
          >
            Search
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
