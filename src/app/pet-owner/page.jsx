import React from "react";
import Hero from "./contents/Hero";
import SignInUp from "@/components/Signin_up";
import Blog from "@/components/Blog";
import FindVeterinarian from "./contents/FindVeterinarian";
import FindHospital from "./contents/FindHospital";
import Services from "./contents/Services";
import Reliavet from "@/components/Reliavet";

const PetOwner = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <section>
        <FindVeterinarian />
        <div className="h-[2px] w-11/12 mx-auto bg-gradient-to-r from-[#a7a7a733] via-[#a7a7a7] to-[#a7a7a733] my-16 max-md:my-10"></div>
        <FindHospital />
        <div className="h-[2px] w-11/12 mx-auto bg-gradient-to-r from-[#a7a7a733] via-[#a7a7a7] to-[#a7a7a733] my-16 max-md:my-10"></div>
        <Services />
      </section>
      <Reliavet />
      <SignInUp
        reg="Easy Registration"
        note="Add your pet history"
        video="Schedule video call"
      />
      <Blog />
    </div>
  );
};

export default PetOwner;
