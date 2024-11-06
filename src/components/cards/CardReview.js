import React from "react";

const CardReview = ({ avatar, name, rating, description, className }) => {
  // Generate stars based on the rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={`w-full border-[1.25px] border-[#243A8E26] rounded-xl p-6 2xl:p-10 ${className}`}
    >
      <div className="flex items-start justify-between">
        <img
          src={avatar}
          alt={`${name}'s Avatar`}
          className="max-w-[55px] 2xl:max-w-[70px] rounded-xl"
        />
        <div className="flex items-center 2xl:gap-1 w-fit">
          {/* Full stars */}
          {[...Array(fullStars)].map((_, index) => (
            <img
              key={`full-${index}`}
              src="/assets/icons/icon-star.svg"
              className="max-w-[20px] 2xl:max-w-[28px]"
              alt="Full Star"
            />
          ))}
          {/* Half star if necessary */}
          {hasHalfStar && (
            <img
              src="/assets/icons/icon-star-half.svg"
              className="max-w-[20px] 2xl:max-w-[28px]"
              alt="Half Star"
            />
          )}
          {/* Empty stars */}
          {[...Array(emptyStars)].map((_, index) => (
            <img
              key={`empty-${index}`}
              src="/assets/icons/icon-star-empty.svg"
              className="max-w-[20px] 2xl:max-w-[28px]"
              alt="Empty Star"
            />
          ))}
        </div>
      </div>

      <h4 className="text-lg font-semibold 2xl:text-xl my-4">{name}</h4>
      <p className="text-xs 2xl:text-sm text-[#636363] font-medium leading-[1.6]">
        {description}
      </p>
    </div>
  );
};

export default CardReview;
