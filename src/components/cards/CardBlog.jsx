import Image from "next/image";
import React from "react";

const CardBlog = ({
  imageSrc,
  title,
  description,
  date,
  className = "",
  actionClassName,
}) => {
  return (
    <div className={`overflow-hidden rounded-2xl w-full relative ${className}`}>
      <Image src={imageSrc} className="w-full object-cover" alt={title} width={505} height={365} />

      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
        <h6 className="text-[22px] 2xl:text-[26px] font-bold">{title}</h6>
        <p className={`text-sm 2xl:text-base leading-[1.8] mt-1`}>
          {description}
        </p>

        <div
          className={`w-full flex items-center justify-between mt-10 ${actionClassName}`}
        >
          <button>Read More</button>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
