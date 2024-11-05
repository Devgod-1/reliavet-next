import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#ECEDF0] h-[90vh] overflow-hidden">
        <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
          <div className="flex flex-col  items-center p-10">
            <h1 className="font-bold leading-[1.1] text-[54px] 2xl:text-[68px] text-center">
              Your Trusted Partner in Pet Care <br />
              Tailored Solutions for Every Role
            </h1>

            <ul className="flex items-center gap-6 mt-6">
              <li className="text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2 relative  w-fit px-6 py-3 before:contet-[''] before:w-full before:h-[1.5px] before:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] before:absolute before:left-0 before:bottom-0 after:contet-[''] after:w-full after:h-[5px] after:bg-[linear-gradient(89.98deg,#D8003E_0.02%,#3F8EFF_99.98%)] after:absolute after:left-0 after:bottom-0 after:blur-[10px]">
                Pet Owner
              </li>
              <li className="text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2  w-fit px-6 py-3">
                Veterinarian
              </li>
              <li className="text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2  w-fit px-6 py-3">
                Technician
              </li>
              <li className="text-[13px] 2xl:text-[15px] font-bold cursor-pointer border-b-2  w-fit px-6 py-3">
                Hospital
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-12 relative after:absolute after:content-[''] after:w-[800px] after:h-[800px] after:rounded-full after:bg-primary after:blur-[300px] after:top-[calc(100%-18rem)] after:left-[-10rem]  after:opacity-70 after:z-[1]">
            <img
              src="/assets/images/hero_section_1.png"
              className="w-full max-w-[350px] 2xl:max-w-[400px] relative z-[2]"
            />
            <div className="w-full flex flex-col items-end max-w-[500px] relative z-[2]">
              <h4 className="font-bold text-[26px] 2xl:text-[32px] text-right">
                Find the Best Care for Your Pet <br /> with Trusted
                Veterinarians
              </h4>
              <button className="bg-bgPrimaryGradientRed p-4 py-6 2xl:p-6 2xl:py-8 w-full text-white max-w-[200px] 2xl:max-w-[250px] text-sm 2xl:text-sm font-bold rounded-lg mt-8">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex  justify-between mx-auto py-32 relative">
        <img
          src="/assets/images/paw.svg"
          className="absolute top-[30%] translate-y-[-30%] right-[calc(100%+1rem)] 2xl:right-[calc(100%+4rem)]"
        />
        <div className="w-full max-w-[600px] flex flex-col justify-between">
          <h2 className="text-[32px] 2xl:text-[36px] font-bold leading-[1.1]">
            Find the Best Care for Your <br />
            Pet with Trusted Veterinarians
          </h2>
          <p className="text-sm 2xl:text-base !leading-[2] block text-[#636363]">
            ReliaVet connects pet owners with a network of trusted veterinarians
            dedicated to providing top-quality care for pets. Our platform makes
            it easy to find a nearby veterinarian or hospital, with features
            like location-based searches, profiles of qualified vets, and
            telemedicine options for added convenience. With ReliaVet, you can
            feel confident that your pet is in good hands, whether they need a
            routine checkup, a specialist, or emergency care.
          </p>
          <button className="bg-bgPrimaryGradient p-6 py-8 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
            Get Started
          </button>
        </div>

        <img
          src="/assets/images/best_care_1.png"
          className="w-full  max-w-[450px] 2xl:max-w-[550px] mr-10 2xl:mr-14"
        />
      </div>

      <div>
        <div className="flex">
          <img
            src="/assets/images/image_practice_1.png"
            alt="practice"
            className="w-full max-w-[50%]"
          />
          {/* <div></div> */}
          <div className="w-full flex flex-col  justify-center space-y-8 bg-[linear-gradient(213.61deg,#243A8E_10.73%,#5774CD_38.22%,#B13A66_72.38%,#DE1E33_89.27%)]  p-20">
            <span className="bg-red-primary rounded-full w-fit p-2 px-3 flex items-center text-white text-xs 2xl:text-sm pr-8">
              <img
                src="/assets/icons/icon-wave.svg"
                className="max-w-[18px] 2xl:max-w-[24px] mr-2 "
              />{" "}
              Hey Veterinarians
            </span>
            <h2 className="text-[32px] 2xl:text-[36px] font-bold leading-[1.1] text-white !mt-4">
              Grow Your Practice with <br />
              Easy-to-Use Tools
            </h2>
            <p className="text-sm 2xl:text-base !leading-[2] block text-white !mt-8">
              ReliaVet connects pet owners with a network of trusted
              veterinarians dedicated to providing top-quality care for pets.
              Our platform makes it easy to find a nearby veterinarian or
              hospital, with features like location-based searches, profiles of
              qualified vets, and telemedicine options for added convenience.
              With ReliaVet, you can feel confident that your pet is in good
              hands, whether they need a routine checkup, a specialist, or
              emergency care.
            </p>
            <button className="bg-transparet p-6 py-4 2xl:p-7 2xl:py-5 w-fit text-white max-w-[300px] !mt-12 text-sm 2xl:text-base border border-white font-bold rounded-lg">
              Join as vet
            </button>
          </div>
        </div>
      </div>
      {/* veterians */}

      {/* streamlne */}
      <div className="mt-28  relative">
        <img
          src="/assets/images/paw.svg"
          className="absolute left-[45%] top-[-8.5rem] z-[-1]"
        />
        <div className="container relative py-32 mx-auto before:content-[''] before:absolute before:right-[100%] before:w-[600px] before:h-[500px] before:bg-red-primary before:rounded-full before:blur-[250px] before:z-[-1] before:opacity-60 after:content-[''] after:absolute after:left-[100%] after:w-[600px] after:h-[500px] after:bg-primary after:rounded-full after:blur-[250px] after:z-[-1] after:top-[50%] after:translate-y-[-50%] after:opacity-60">
          <div className="w-full flex rounded-[5rem] overflow-hidden bg-black text-white">
            <div className="w-full p-20">
              <h2 className="text-[32px] 2xl:text-[36px] font-bold leading-[1.1] text-white !mt-4">
                Streamline Operations <br />
                and Enhance Patient Care
              </h2>
              <p className="text-sm 2xl:text-base !leading-[2] block text-white !mt-8">
                Manage appointments, staff, and telemedicine services
                seamlessly. Connect with pet owners and improve care delivery
                with tools designed for veterinary hospitals
              </p>
              <button className="bg-transparet p-8 py-4 2xl:p-9 2xl:py-5 w-fit text-white max-w-[300px] !mt-12 text-sm 2xl:text-base border border-white font-bold rounded-lg">
                Learn More
              </button>
            </div>

            <img
              src="/assets/images/image_streamline_1.png"
              alt="practice"
              className="w-full max-w-[50%] object-cover"
            />
          </div>
        </div>
      </div>
      {/* end streamline */}

      {/* blogs */}
      <div className="container mx-auto pb-32">
        <div>
          {" "}
          <h2 className="text-[32px] 2xl:text-[36px] font-semibold leading-[1.1] !mt-4">
            Our Blogs
          </h2>
          <p className="text-sm 2xl:text-base !leading-[1.8] block !mt-5 text-[#636363]">
            Stay informed and empowered with our educational blog, designed to
            help pet owners like you <br />
            take the best care of your furry companions.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="overflow-hidden rounded-2xl w-full relative">
            <img
              src="/assets/images/image_blog_1.png"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
              <h6 className="text-[22px] 2xl:text-[26px] font-bold">
                How Vets Can Keep...
              </h6>
              <p className="text-sm 2xl:text-base leading-[1.8] mt-1">
                Do you know the average length of a relationship between a pet
                owner and a vet?
              </p>

              <div className="w-full flex items-center justify-between mt-10">
                <button>Read More</button>
                <span>02 May-2024</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl w-full relative">
            <img
              src="/assets/images/image_blog_2.png"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
              <h6 className="text-[22px] 2xl:text-[26px] font-bold">
                How Vets Can Keep...
              </h6>
              <p className="text-sm 2xl:text-base leading-[1.8] mt-1">
                Do you know the average length of a relationship between a pet
                owner.
              </p>

              <div className="w-full flex items-center justify-between mt-16">
                <button>Read More</button>
                <span>02 May-2024</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl w-full relative">
            <img
              src="/assets/images/image_blog_3.png"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
              <h6 className="text-[22px] 2xl:text-[26px] font-bold">
                How Vets Can Keep...
              </h6>
              <p className="text-sm 2xl:text-base leading-[1.8] mt-1">
                Do you know the average length of a relationship between a pet
                owner and a vet?
              </p>

              <div className="w-full flex items-center justify-between mt-10">
                <button>Read More</button>
                <span>02 May-2024</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl w-full relative">
            <img
              src="/assets/images/image_blog_4.png"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(24,59,86,0.0001)_0%,#282828_100%)] flex flex-col justify-end p-5 2xl:p-8 text-white">
              <h6 className="text-[22px] 2xl:text-[26px] font-bold">
                How Vets Can Keep...
              </h6>
              <p className="text-sm 2xl:text-base leading-[1.8] mt-1">
                Do you know the average length of a relationship between a pet
                owner.
              </p>

              <div className="w-full flex items-center justify-between mt-16">
                <button>Read More</button>
                <span>02 May-2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 2xl:gap-3 mx-auto w-fit mt-12">
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
        </div>
      </div>
      {/* end blogs */}

      {/* success stories */}
      <div className="container mx-auto pb-32">
        <div className="w-full flex items-center justify-between  !mt-4">
          {" "}
          <h2 className="text-[32px] 2xl:text-[36px] font-semibold leading-[1.1]">
            Users success stories
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md  opacity-50">
              <img
                src="/assets/icons/icon-arrow-right-red.svg"
                className="max-w-[20px] 2xl:max-w-[24px] mr-1 rotate-180"
              />{" "}
              Previous
            </button>
            <button className="px-3 p-1 font-semibold text-base 2xl:text-lg flex items-center border-[1.5px] border-[#282828] rounded-md ">
              Next
              <img
                src="/assets/icons/icon-arrow-right-red.svg"
                className="max-w-[20px] 2xl:max-w-[24px] mr-1"
              />{" "}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="w-full border-[1.25px] border-[#243A8E26] rounded-xl p-6 2xl:p-10">
            <div className="flex items-start justify-between">
              <img
                src="/assets/avatars/avatar_1.png"
                className="max-w-[55px] 2xl:max-w-[70px] rounded-xl"
              />
              <div className="flex items-center 2xl:gap-1 w-fit">
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star-half.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star-empty.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
              </div>
            </div>

            <h4 className="text-lg font-semibold 2xl:text-xl my-4">
              Floyd Miles
            </h4>
            <p className="text-xs 2xl:text-sm text-[#636363] font-medium leading-[1.6]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              <br />
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
          <div className="w-full border-[1.25px] border-[#243A8E26] rounded-xl p-6 2xl:p-10">
            <div className="flex items-start justify-between">
              <img
                src="/assets/avatars/avatar_2.png"
                className="max-w-[55px] 2xl:max-w-[70px] rounded-xl"
              />
              <div className="flex items-center 2xl:gap-1 w-fit">
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star-empty.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
              </div>
            </div>

            <h4 className="text-lg font-semibold 2xl:text-xl my-4">
              Ronald Richards
            </h4>
            <p className="text-xs 2xl:text-sm text-[#636363] font-medium leading-[1.6]">
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
          <div className="w-full border-[1.25px] border-[#243A8E26] rounded-xl p-6 2xl:p-10">
            <div className="flex items-start justify-between">
              <img
                src="/assets/avatars/avatar_3.png"
                className="max-w-[55px] 2xl:max-w-[70px] rounded-xl"
              />
              <div className="flex items-center 2xl:gap-1 w-fit">
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star-half.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
                <img
                  src="/assets/icons/icon-star-empty.svg"
                  className="max-w-[20px] 2xl:max-w-[28px]"
                />
              </div>
            </div>

            <h4 className="text-lg font-semibold 2xl:text-xl my-4">
              Savannah Nguyen
            </h4>
            <p className="text-xs 2xl:text-sm text-[#636363] font-medium leading-[1.6]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              <br />
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 2xl:gap-3 mx-auto w-fit mt-12">
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
          <img
            src="/assets/icons/icon-star-rounded.svg"
            className="max-w-[14px] 2xl:max-w-[28px] cursor-default opacity-20"
          />
        </div>
      </div>
      {/* end success stories */}

      {/* contact us */}
      <div className="bg-[linear-gradient(215.82deg,#243A8E_18.23%,#496FFF_81.77%)]">
        <div className="container mx-auto text-white py-14 flex gap-20">
          <div className="w-full mt-12">
            <div>
              <h4 className="text-[54px] 2xl:text-[68px] font-bold">
                Contact us{" "}
              </h4>
              <span className="text-base 2xl:text-lg">
                Have questions or need assistance? Our dedicated support <br />{" "}
                team is here to help you make the most of ReliaVet.
              </span>
            </div>
            <div className="space-y-2 mt-12">
              <div className="flex items-center text-lg 2xl:text-xl">
                <img
                  src="/assets/icons/icon-email.svg"
                  className="max-w-[18px] 2xl:max-w-[24px] mr-3 2xl:mr-3"
                />{" "}
                Contact@reliavet.com
              </div>
              <div className="flex items-center text-lg 2xl:text-xl">
                <img
                  src="/assets/icons/icon-phone.svg"
                  className="max-w-[32px] 2xl:max-w-[40px] mr-1 2xl:mr-1 -ml-2"
                />{" "}
                +34 123 456 789
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full bg-white/5 border border-white/50 rounded-3xl p-7  2xl:p-10">
            <h4 className="text-[32px] 2xl:text-[40px] leading-[1.3] font-bold">
              Have a question?{" "}
              <span className="block font-semibold">Get in touch.</span>
            </h4>

            <div className="space-y-8 mt-8">
              <input
                placeholder="Name"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Email address"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Phone number"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
              <input
                placeholder="Message"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
              />
            </div>

            <button className="text-[28px] 2xl:text-[36px] font-bold bg-black w-full py-4 rounded-xl mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* end cntact us */}

      {/* newsletter */}
      <div className="bg-[#243A8E33]">
        <div className="py-6 2xl:py-10 container mx-auto flex items-center justify-between">
          <h4 className="text-[32px] 2xl:text-[40px] leading-[1.3] font-bold">
            Subscribe to Newsletter
          </h4>

          <div className="w-full bg-white max-w-[500px] 2xl:max-w-[600px] flex items-center rounded-2xl overflow-hidden">
            <input className="w-full  h-[80px] 2xl:h-[90px]" />
            <button className="bg-red-primary rounded-2xl shadow-[-4px_0px_20px_#D9D9D9aa] w-fit text-lg 2xl:text-xl font-bold text-white   h-[80px] 2xl:h-[90px] px-10">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* end newsletter */}
    </div>
  );
};

export default HomePage;
