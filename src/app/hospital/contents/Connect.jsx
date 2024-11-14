import Image from "next/image";

export default function Connect() {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-[36px] font-semibold leading-[36.36px] text-left sm:text-[32px] sm:leading-[34px] md:text-[36px]md:leading-[36.36px] lg:text-[40px] lg:leading-[42px] py-5">
                    Connect and Communicate with Pet Owners
                </h1>
                <p className="w-full py-5 md:w-3/5">ReliaVet helps you build strong relationships with pet owners, providing easy access to telemedicine services, follow-up tools, and a portal for client communication. Offer clients convenient ways to stay connected to their pet’s health and care.</p>
            </div>
            <div className="flex flex-col md:flex-row relative">
                <div>
                    <Image src='/assets/images/connect_dog.png' width={830} height={620} alt="dog_playing" />
                </div>
                <div className="flex flex-col justify-center mx-auto">
                    <div className="border px-28 py-20 rounded-3xl bg-[#ECEDF0]">
                        <div className="absolute -top-[60%] -right-[20%]">
                            <Image src='/assets/images/hospital_blob.png' width={1500} height={954} alt="dog_playing" />
                        </div>
                        <h1 className="text-3xl font-bold mb-5">Engagement Features:</h1>
                        <ul className="list-disc w-full">
                            <li>Telemedicine Options: &quot;Provide remote consultations for added convenience and accessibility.&quot;</li>
                            <li>Follow-Up Tools: &quot;Engage clients post-visit to ensure pets continue receiving quality care at home.&quot;</li>
                            <li>Secure Messaging: &quot;Keep communication private and protected with secure messaging options.&quot;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
