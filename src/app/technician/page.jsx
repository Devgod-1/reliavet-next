import React from "react";
import Hero from "./contents/Hero";
import Blog from "@/components/Blog";
import SignInUp from "@/components/Signin_up";
import Reliavet from "@/components/Reliavet";
import Empowering from "./contents/Empowering";
import Learn from "../hospital/contents/Learn";

const Technician = () => {
  return (
    <div>
      <Hero />
      <Empowering />
      <Reliavet
        whyText="ReliaVet equips veterinary technicians with essential resources, a supportive community, and career growth tools to help you thrive. Whether you’re building your skills or advancing in your role, we’re here to support your success in veterinary care."
        features={[
          "Tailored Educational Resources",
          "Community and Support",
          "Career Growth Opportunities",
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
        <Blog type="technician" />
      </div>
    </div>
  );
};

export default Technician;
