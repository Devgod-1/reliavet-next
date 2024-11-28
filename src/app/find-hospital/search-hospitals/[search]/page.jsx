"use client";
import Hospital from "../../contents/Hospital";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, Suspense } from "react";  // Import Suspense from React
import { useSearchParams } from "next/navigation";
import axios from "axios";

// Create the Page component
const PageContent = () => {
  const searchParams = useSearchParams();

  const state = searchParams.get("state");
  const hospitalName = searchParams.get("hospital_name");
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        // Ensure the page scrolls to the top when mounted
        window.scrollTo(0, 0);

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hospitals`, {
          params: {
            state: state,
            name: hospitalName
          }
        });

        setHospitals(response.data.data);
      } catch (err) {
        console.error("Error fetching hospitals:", err);
      }
    };

    fetchHospitals();
  }, [state, hospitalName]);

  return (
    <div className="max-lg:pt-[16rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {
          hospitals.map((hospital) => (
            <Hospital
              key={hospital.id}
              id={hospital.id}
              name={hospital.name}
              states={hospital.states}
              address={hospital.street_address}
              profile_image={hospital.profile_img || "/assets/images/hospital.png"}
            />
          ))
        }
      </div>
    </div>
  );
}

// Wrap PageContent with Suspense for client-side rendering
export default function Page() {
  return (
    <Suspense fallback={<div>Loading hospitals...</div>}>
      <PageContent />
    </Suspense>
  );
}
