import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import PetOwnerPage from "./pet-owner.page";

const PetOwner = () => {
  return (
    <div>
      <Navbar />
      <PetOwnerPage />
      <Footer />
    </div>
  );
};

export default PetOwner;
