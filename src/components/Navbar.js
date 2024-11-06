"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-primary w-full h-[10vh] sticky top-0 z-10">
      <div className="w-full container mx-auto flex items-center justify-between text-white h-full my-auto">
        <img
          src="/assets/logos/logo.svg"
          className="w-full max-w-[90px] 2xl:max-w-[110px] cursor-pointer"
          onClick={() => router.push("/")}
        />
        <ul className="flex items-center uppercase px-4">
          <li
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            Find Vet
          </li>
          <li className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            Find HOSPITAL
          </li>
          <li className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            about uS
          </li>
        </ul>
        <div>
          <button className="text-xs 2xl:text-sm px-6 font-medium">
            Log In
          </button>
          <button className="text-xs 2xl:text-sm bg-red-primary p-3 px-6 rounded-lg font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
