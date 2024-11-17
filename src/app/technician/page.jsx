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
      <Reliavet
        whyText="ReliaVet equips veterinary technicians with essential resources, a supportive community, and career growth tools to help you thrive. Whether you’re building your skills or advancing in your role, we’re here to support your success in veterinary care."
        features={[
          "Tailored Educational Resources",
          "Community and Support",
          "Career Growth Opportunities",
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

export default Technician;
