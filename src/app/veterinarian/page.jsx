import React from "react";
import Hero from "./contents/hero";
import Blog from "@/components/Blog";
import Telemedicine from "./contents/Telemedicine";
import Reliavet from "@/components/Reliavet";
import SignInUp from "../../components/Signin_up";

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
      />
      <SignInUp
        reg="Easy Registration"
        note="Add your Details"
        video="Start Connecting With Clients"
      />
      <Blog />
    </div>
  );
};

export default Veterinarian;
