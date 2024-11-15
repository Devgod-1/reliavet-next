import React from "react";

const Button = ({fromColor, toColor, text}) => {
  return (
    <button className="bg-gradient-to-r from-[#D8003E] to-[#3F8EFF] p-4 py-6 2xl:p-6 2xl:py-8 w-full text-white max-w-[200px] 2xl:max-w-[250px] text-sm font-bold rounded-lg mt-8 mx-auto hover:from-[#3F8EFF] hover:to-[#D8003E] transition-all hover:shadow-lg">
        Get Started
    </button>
  );
};

export default Button;
