import DialogViewHospital from "@/components/dialogs/DialogViewHospital";
import { useState } from "react";

const { default: Image } = require("next/image");

export default function Hospital({
     name,
     states,
     address,
     profile_image,
 }) {
  const [openDialog, setOpenDialog] = useState(null);
  return (
    <div className="bg-[#EDF3FF] flex-1 rounded-2xl p-5 py-8 relative ">
      <DialogViewHospital
        open={openDialog === "view"}
        onClose={() => setOpenDialog(null)}
      />
      <button
        className="absolute top-5 right-4 bg-[#EDF3FF] p-5 rounded-bl-xl"
        onClick={() => setOpenDialog("view")}
      >
        <img
          src="/assets/icons/icon-arrow-top-right.svg"
          className="max-w-[12px] 2xl:max-w-[14px]"
        />
      </button>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-no-repeat  w-full h-[200px] bg-center" style={{
            backgroundImage: `url(${profile_image})`,
        }}></div>
        <div className="mt-5 text-center">
          <b>{name}</b>
          <br />
          <small className="text-[#636363]">{states}</small>
            <br />
            <small className="text-[#636363]">{address}</small>
        </div>
        <button
          className="w-full bg-white font-bold text-xs 2xl:text-sm text-[#243a82] p-5 border border-[#ACACAC] rounded-[9px] !mt-6 !text-[#243A8E] hover:!bg-[#243A8E] hover:!text-white !bg-transparent !border-[#243A8E] !py-3"
          onClick={() => setOpenDialog("view")}
        >
          View Vets,Techs
        </button>
      </div>
    </div>
  );
}
