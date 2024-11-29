"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardBlog = ({
  id,
  imageSrc,
  title,
  description,
  date,
  className = "",
  actionClassName,
}) => {
  const router = useRouter();
  return (
    <div
      className={`overflow-hidden rounded-2xl w-full relative ${className} cursor-pointer`}
      onClick={() => router.push("/blog/" + id)}
    >
      <Image
        src={imageSrc}
        className="w-full object-cover !h-64"
        alt={title}
        width={505}
        height={365}
      />

      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
        <h6 className="text-lg lg:text-[22px] 2xl:text-[26px] font-bold">
          {title}
        </h6>
        <p className={`text-xs lg:text-sm 2xl:text-base leading-[1.8] mt-1`} dangerouslySetInnerHTML={{ __html: description }}></p>

        <div
          className={`w-full flex items-center justify-between mt-10 ${actionClassName}`}
        >
          <button className="text-sm lg:text-base">Read More</button>
          <span className="text-sm lg:text-base">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
