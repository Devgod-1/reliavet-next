
export default function Hero() {
    return (
        <div>
            <div
                className="bg-[#ECEDF0] h-[70vh] md:h-[90vh] overflow-hidden "
                style={{
                    background: "url('/assets/images/bg-hero.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="container flex flex-col items-center mx-auto pt-8 2xl:pt-12 justify-between h-full">
                    <div className="flex flex-col items-center p-10 pb-0">
                        <h1 className="font-bold leading-[1.1] text-[54px] 2xl:text-[68px] text-center capitalize">
                            Transform Hospital <br /> Operations with ReliaVet
                        </h1>

                        <span className="text-base 2xl:text-lg text-[#636363] text-center mt-6">
                            Join leading veterinary hospitals using ReliaVet to improve
                            workflows, manage <br /> appointments, and enhance client
                            relationships.
                        </span>

                        <button className="bg-bgPrimaryGradient mt-6 2xl:mt-10 p-6 py-8 2xl:p-8 2xl:py-10 w-full text-white max-w-[300px] 2xl:max-w-[350px] text-xl 2xl:text-2xl font-bold rounded-lg">
                            Learn More
                        </button>
                    </div>

                    <div className="flex items-center gap-12 relative">
                        <img
                            src="/assets/images/hero_hospital.png"
                            className="w-full max-w-[500px] 2xl:max-w-[550px] relative z-[2]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
