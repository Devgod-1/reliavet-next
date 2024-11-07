import React from "react";
import Hero from "./contents/hero";
import Blog from "@/components/Blog";
import Telemedicine from "./contents/Telemedicine";
import Reliavet from "./contents/Reliavet";
import SignInUp from "./contents/Signin_up";

const Veterinarian = () => {
  return (
    <div>
      <Hero />
      <Telemedicine />
      <Reliavet />
      <SignInUp />
      <Blog />
    </div>
  );
};

export default Veterinarian;
