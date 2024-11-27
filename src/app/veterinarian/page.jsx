import React from "react";
import Hero from "./contents/hero";
import Blog from "@/components/Blog";
import Telemedicine from "./contents/Telemedicine";
import Reliavet from "@/components/Reliavet";
import SignInUp from "../../components/Signin_up";
import Learn from "../hospital/contents/Learn";

const Veterinarian = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Telemedicine />
      <Reliavet
        whyText="ReliaVet is more than a platform—it’s a partner in your mission to provide outstanding veterinary care. We equip veterinarians with cutting-edge tools, support, and resources to meet the evolving needs of your practice and clients."
        features={[
          "Comprehensive Telemedicine Integration",
          "Education and Professional Growth",
          "Dedicated Support",
        ]}
        isBook={false}
      />
      <SignInUp
        reg="Easy Registration"
        note="Add your Details"
        video="Start Connecting With Clients"
      />
      <Learn />
      <div className="relative">
        <img
          src="/assets/images/bg-promo-2.png"
          className="absolute top-[-21rem] 2xl:top-[-24rem] pointer-events-none hidden lg:block"
        />
        <Blog type="veterinarian"/>
      </div>
    </div>
  );
};

export default Veterinarian;
