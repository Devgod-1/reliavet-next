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
      <Reliavet
        whyText="ReliaVet uses telemedicine to be able to eliminate the hassle of long waits and have you speaking with a licensed veterinarian in just a few clicks."
        features={[
          "Does your pet get anxious going to the vet?",
          "Do you have to wait a week (or more) to be seen for an in-person appointment?",
          "Do you find information on the internet you’re not sure you can trust?",
        ]}
      />
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
