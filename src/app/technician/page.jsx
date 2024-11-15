import React from "react";
import Hero from "./contents/Hero";
import Blog from "@/components/Blog";
import SignInUp from "@/components/Signin_up";
import Reliavet from "@/components/Reliavet";
import Empowering from "./contents/Empowering";

const Technician = () => {
  return (
    <div>
      <Hero />
      <Empowering />
      <Reliavet />
      <SignInUp reg='Easy Registration' note='Add your Details' video="Start Connecting With Clients" />
      <Blog />
    </div>
  );
};

export default Technician;
