import React from "react";
import Hero from "./contents/hero";
import Blog from "@/components/Blog";
import Telemedicine from "./contents/Telemedicine";
import Reliavet from "@/components/Reliavet";
import SignInUp from "../../components/Signin_up";

const Veterinarian = () => {
  return (
    <div>
      <Hero />
      <Telemedicine />
      <Reliavet />
      <SignInUp reg='Easy Registration' note="Add your Details" video="Start Connecting With Clients" />
      <Blog />
    </div>
  );
};

export default Veterinarian;
