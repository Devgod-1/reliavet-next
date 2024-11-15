import Image from "next/image";

const SignInUp = ({reg, note, video}) => {
  return (
    <section>
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="w-full flex flex-col justify-center items-center space-y-8 bg-[linear-gradient(213.61deg,#243A8E_10.73%,#5774CD_38.22%,#B13A66_72.38%,#DE1E33_89.27%)] p-20 max-xl:px-10">
          <div className="w-11/12 mx-auto">
            <div
              className="text-[35px] font-bold leading-[50px] w-full
              sm:text-[30px] sm:leading-[56px]
              md:text-[40px] md:leading-[60px]
              lg:text-[55px] lg:leading-[64px]
              text-white py-20 max-md:py-10
              "
            >
              Signing Up is easy
            </div>
            <div className="flex items-center justify-between ">
              <div className="w-[25%] flex gap-5 flex-col">
                <Image
                  alt=""
                  src={"/assets/images/registration.png"}
                  width={80}
                  height={80}
                />
                <div
                  className="text-[17px] font-semibold
                  tracking-[-0.04em] text-left text-white relative
                  sm:text-[20px]
                  md:text-[22px] 
                  lg:text-[25px]
                  w-[200px] h-[142px] 
                  max-md:w-[100px] max-md:h-[71px]
                  bg-[url(/assets/images/01.png)] bg-contain bg-no-repeat
                  "
                >
                  {reg}
                </div>
              </div>
              <div className="w-[25%] flex gap-5 flex-col">
                <Image
                  alt=""
                  src={"/assets/images/note.png"}
                  width={80}
                  height={80}
                />
                <div
                  className="text-[17px] font-semibold
                  tracking-[-0.04em] text-left text-white relative
                  sm:text-[20px]
                  md:text-[22px] 
                  lg:text-[25px]
                  w-[200px] h-[142px] 
                  max-md:w-[100px] max-md:h-[71px]
                  bg-[url(/assets/images/02.png)] bg-contain bg-no-repeat
                  "
                >
                  {note}
                </div>
              </div>
              <div className="w-[25%] flex gap-5 flex-col">
                <Image
                  alt=""
                  src={"/assets/images/registration.png"}
                  width={80}
                  height={80}
                />
                <div
                  className="text-[17px] font-semibold
                  tracking-[-0.04em] text-left text-white relative
                  sm:text-[20px]
                  md:text-[22px] 
                  lg:text-[25px]
                  w-[200px] h-[142px] 
                  max-md:w-[100px] max-md:h-[71px]
                  bg-[url(/assets/images/03.png)] bg-contain bg-no-repeat
                  "
                >
                  {video}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full xl:max-w-[50%] relative">
          <Image
            src="/assets/images/easy.png"
            alt="practice"
            className="object-cover"
            layout="responsive"
            width={700}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SignInUp;
