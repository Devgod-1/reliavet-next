import React from "react";

const CardProfile = ({
  profileImage,
  name,
  role,
  rating,
  state,
  hospital,
  onButtonClick,
  buttonLabel = "Book Now",
}) => {
  return (
    <div className="bg-[#FFEDED] p-5 py-8 flex flex-col items-center rounded-[15px] relative">
      <button className="absolute top-8 right-8">
        <img
          src="/assets/icons/icon-arrow-top-right.svg"
          className="max-w-[12px] 2xl:max-w-[14px]"
        />
      </button>
      <img
        src={profileImage}
        alt="Profile"
        className="w-full max-w-[95px] 2xl:max-w-[105px] object-cover rounded-full border-[8px] border-[#8E244B]/20"
      />
      <h6 className="text-sm 2xl:text-base font-semibold">By {name}</h6>
      <span className="text-xs 2xl:text-sm text-[#636363]">{role}</span>
      <div className="flex items-center my-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="/assets/icons/icon-star-red.svg"
            className={index < rating ? "" : "opacity-40"}
            alt="Star"
          />
        ))}
      </div>
      <span className="text-xs 2xl:text-sm font-medium">
        State: <span className="text-[#636363]">{state}</span>
      </span>
      <span className="text-xs 2xl:text-sm font-medium block mt-1">
        Hospital:&nbsp;
        <span className="text-[#636363]">{hospital}</span>
      </span>
      <button
        className="w-full bg-white font-bold text-xs 2xl:text-sm text-[#DE1E33] p-5 border border-[#ACACAC] rounded-[9px] !mt-6"
        onClick={onButtonClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default CardProfile;
