"use client";
import { FindVeterinarianCard } from "@/app/pet-owner/contents/FindVeterinarian";
import Veterinarian from "../contents/Veterinarian";
import DialogViewVet from "@/components/dialogs/DialogViewVet";

export default function page() {
  return (
    <div className="max-lg:pt-[16rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-[2rem] md:p-0">
        {[...Array(12).keys()].map((i) => (
          <FindVeterinarianCard
            name={"By Mark B."}
            key={i}
            state={"Alaska"}
            hospital={"Northeast animal clinic"}
            role={"Technician"}
            rating={4}
            profileImage={"/assets/images/vet.png"}
            className="bg-[#243A8E]/20"
            buttonClassName="!text-[#243A8E] hover:!bg-[#243A8E] hover:!text-white !bg-transparent !border-[#243A8E] !py-3"
          />
        ))}
      </div>
    </div>
  );
}
