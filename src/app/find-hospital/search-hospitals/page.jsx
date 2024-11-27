"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-10 px-[2rem] md:p-0 py-30 max-lg:pt-[13rem]">
      <img
        src="/assets/illustrations/find-hospital.svg"
        className="w-full max-w-[600px] mx-auto"
      />
    </div>
  );
}
