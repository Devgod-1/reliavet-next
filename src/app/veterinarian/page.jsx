import React from "react";
import Hero from "./contents/hero";
import Blog from "@/components/Blog";
import Telemedicine from "./contents/Telemedicine";

const Veterinarian = () => {
  return (
    <div>
      <Hero />
      <Telemedicine />
      <Blog />
    </div>
  );
};

export default Veterinarian;
