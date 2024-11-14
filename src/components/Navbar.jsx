"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [menu, SetMenu] = useState(false);

  const Menu_click = () => {
    SetMenu(!menu);
  };

  return (
    <div className="bg-primary w-full md:py-5 py-4 sticky top-0 z-10 overflow-hidden transition-transform">
      <div className="max-md:hidden w-full container mx-auto flex items-center justify-between text-white h-full my-auto">
        <Image
          src="/assets/logos/main_logo.png"
          alt=""
          className="w-full max-w-[90px] 2xl:max-w-[110px] cursor-pointer"
          onClick={() => router.push("/")}
          width={110}
          height={60}
        />
        <ul className="flex items-center uppercase px-4">
          <li
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <Link href={'/find-vet'} className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            Find Vet
          </Link>
          <Link href={'/find-hospital'} className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            Find HOSPITAL
          </Link>
          <Link href={'/about-us'} className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
            about uS
          </Link>
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
      <div className="md:hidden h-full">
        <div className="flex items-center justify-between">
          <Image
            src="/assets/logos/main_logo.png"
            alt=""
            className="w-full= cursor-pointer px-6"
            onClick={() => router.push("/")}
            width={110}
            height={60}
          />
          <button
            className="text-sm px-6 font-medium text-white hover:text-red-primary"
            onClick={Menu_click}
          >
            Menu
          </button>
        </div>

        <div
          className={`${menu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <ul className="flex flex-col gap-5 items-center uppercase px-4 text-white py-5 pt-10">
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
            <Link href={'/about-us'} className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
              about uS
            </Link>
            <li className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
              <button className="text-xs 2xl:text-sm py-1 px-6 font-medium cursor-pointer">
                Log In
              </button>
              <button className="text-xs 2xl:text-sm py-1 px-6 rounded-lg font-medium cursor-pointer">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
