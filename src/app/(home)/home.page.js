"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./contents/Hero";
import FindVet from "./contents/FindVet";
import JoinVet from "./contents/JoinVet";
import Streamline from "./contents/Streamline";
import Blog from "./contents/Blog";
import Stories from "./contents/Stories";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FindVet />
      <JoinVet />
      <Streamline />
      <Blog />
      <Stories />
    </div>
  );
};

export default HomePage;
