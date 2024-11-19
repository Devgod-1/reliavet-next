"use client";
import { Menu } from "lucide-react";
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
    <div className="bg-primary w-full md:py-5 py-4 sticky top-0 z-[22] overflow-hidden transition-transform ">
      <div className="max-md:hidden w-full container mx-auto flex items-center justify-between text-white h-full my-auto">
        <Image
          src="/assets/logos/main_logo.svg"
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
          <Link
            href={"/find-vet"}
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
          >
            Find A Provider
          </Link>
          <Link
            href={"/find-hospital"}
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
          >
            Find a HOSPITAL
          </Link>
          <Link
            href={"/about-us"}
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
          >
            about uS
          </Link>
          <Link
            href={"/blog"}
            className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
          >
            Blog
          </Link>
        </ul>
        <div>
          <button
            className="text-xs 2xl:text-sm px-6 font-medium"
            onClick={() =>
              window.open(
                "https://app.reliavet.com/login?_gl=1*ldlweb*_ga*NTM5NzU3MjQ1LjE3MzE5NDQyNjQ.*_ga_ERZYKJPJPK*MTczMTk0NDI2My4xLjAuMTczMTk0NDI3MC4wLjAuMA..",
                "_blank"
              )
            }
          >
            Log In
          </button>
          <button
            className="text-xs 2xl:text-sm bg-red-primary p-3 px-6 rounded-lg font-medium"
            onClick={() =>
              window.open(
                "https://app.reliavet.com/login?_gl=1*ldlweb*_ga*NTM5NzU3MjQ1LjE3MzE5NDQyNjQ.*_ga_ERZYKJPJPK*MTczMTk0NDI2My4xLjAuMTczMTk0NDI3MC4wLjAuMA..",
                "_blank"
              )
            }
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="md:hidden h-full">
        <div className="flex items-center justify-between">
          <Image
            src="/assets/logos/main_logo.svg"
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
            <Menu />
          </button>
        </div>

        <div
          className={`${
            menu ? "clip-open" : "clip-close"
          } transition-all duration-500 ease-in-out top-0 overflow-hidden fixed w-full h-[100vh] bg-primary/50 backdrop-blur-[20px] z-[-1]`}
          style={{
            clipPath: menu
              ? "circle(150% at 90% -5%)"
              : "circle(0% at 90% -20%)",
          }}
        >
          <ul className="flex h-full justify-center flex-col gap-8 items-center uppercase px-4 text-white font-bold py-5 pt-10">
            <li
              className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
              onClick={() => {
                Menu_click();
                router.push("/");
              }}
            >
              Home
            </li>
            <li
              className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
              onClick={() => {
                Menu_click();
                router.push("/find-vet");
              }}
            >
              Find A Provider
            </li>
            <li
              className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
              onClick={() => {
                Menu_click();
                router.push("/find-hospital");
              }}
            >
              Find a HOSPITAL
            </li>
            <Link
              href={"/about-us"}
              onClick={Menu_click}
              className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
            >
              about uS
            </Link>
            <Link
              href={"/blog"}
              onClick={Menu_click}
              className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium"
            >
              Blog
            </Link>
            <li className="text-xs 2xl:text-sm px-6 cursor-pointer font-medium">
              <button
                className="text-xs 2xl:text-sm py-1 px-6 font-medium cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://app.reliavet.com/login?_gl=1*ldlweb*_ga*NTM5NzU3MjQ1LjE3MzE5NDQyNjQ.*_ga_ERZYKJPJPK*MTczMTk0NDI2My4xLjAuMTczMTk0NDI3MC4wLjAuMA..",
                    "_blank"
                  )
                }
              >
                Log In
              </button>
              <button
                className="text-xs 2xl:text-sm bg-red-primary p-3 px-6 rounded-lg font-medium"
                onClick={() =>
                  window.open(
                    "https://app.reliavet.com/login?_gl=1*ldlweb*_ga*NTM5NzU3MjQ1LjE3MzE5NDQyNjQ.*_ga_ERZYKJPJPK*MTczMTk0NDI2My4xLjAuMTczMTk0NDI3MC4wLjAuMA..",
                    "_blank"
                  )
                }
              >
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
