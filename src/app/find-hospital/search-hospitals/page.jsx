"use client";
import DialogViewHospital from "@/components/dialogs/DialogViewHospital";
import Hospital from "../contents/Hospital";

export default function page() {
  return (
    <div className="max-lg:pt-[16rem]">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[...Array(12).keys()].map((i) => (
          <Hospital key={i} />
        ))}
      </div>
    </div>
  );
}
