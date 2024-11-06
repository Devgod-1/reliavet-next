import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="bg-[#ECEDF0] h-[90vh] overflow-hidden">
      <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
        <div className="flex flex-col items-center p-10 text-center">
          <h1 className="font-bold leading-[1.1] text-[54px] 2xl:text-[68px]">
            Your Trusted Partner in Pet Care <br />
            Tailored Solutions for Every Role
          </h1>

          <ul className="flex items-center gap-6 mt-6">
            {[
              { link: "pet-owner", name: "Pet Owner" },
              { link: "veterinarian", name: "Veterinarian" },
              { link: "technician", name: "Technician" },
              { link: "hospital", name: "Hospital" },
            ].map((tab) => (
              <li
                key={tab.name}
                onClick={() => router.push(`/${tab.link}`)}
                className="text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2 px-6 py-3 relative w-fit hover:text-[#D8003E]"
              >
                <span className="before:content-[''] before:block before:h-[1.5px] before:bg-gradient-to-r before:from-[#D8003E] before:to-[#3F8EFF] before:absolute before:left-0 before:bottom-0 before:scale-x-0 hover:before:scale-x-100 transition-transform duration-200 ease-out">
                  {tab.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-12 relative after:absolute after:content-[''] after:w-[800px] after:h-[800px] after:rounded-full after:bg-primary after:blur-[300px] after:top-[calc(100%-18rem)] after:left-[-10rem] after:opacity-70 after:z-[1]">
          <Image
            src="/assets/images/hero_section_1.png"
            className="w-full  relative z-[2]"
            alt="hero"
  					layout="responsive"
            width={400}
            height={384}
          />
          <div className="w-full flex flex-col items-end max-w-[500px] relative z-[2]">
            <h4 className="font-bold text-[26px] 2xl:text-[32px] text-right">
              Find the Best Care for Your Pet <br /> with Trusted Veterinarians
            </h4>
            <button className="bg-gradient-to-r from-[#D8003E] to-[#3F8EFF] p-4 py-6 2xl:p-6 2xl:py-8 w-full text-white max-w-[200px] 2xl:max-w-[250px] text-sm font-bold rounded-lg mt-8">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
