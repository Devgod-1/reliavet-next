import Image from "next/image";

export default function Learn() {
    return (
        <div style={{
            background: "url('/assets/images/learn_bg.png')",
            backgroundSize: "cover",
        }}>
            <div className="flex flex-col md:flex-row items-center text-white mb-20">
                <div className="p-20 w-3/4 mx-auto flex flex-col gap-y-10">

                    <div>
                        <h1 className="text-3xl font-bold">You learn everyday</h1>
                        <p>Access a wide range of educational materials, from telemedicine guides to clinical resources, designed to help you grow your practice and stay informed about the latest advancements in veterinary care.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
                        <div className="flex flex-col gap-y-3">
                            <Image src={'/assets/icons/icon-learn.svg'} width={60} height={60} alt="icon" />
                            <div>
                                <h1 className="text-2xl font-semibold">Patient Care Guides</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit imperdiet consequat eget vel metus suspendisse lorem arcu turpis.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <Image src={'/assets/icons/icon-learn.svg'} width={60} height={60} alt="icon" />
                            <div>
                                <h1 className="text-2xl font-semibold">Patient Care Guides</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit imperdiet consequat eget vel metus suspendisse lorem arcu turpis.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <Image src={'/assets/icons/icon-learn.svg'} width={60} height={60} alt="icon" />
                            <div>
                                <h1 className="text-2xl font-semibold">Patient Care Guides</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit imperdiet consequat eget vel metus suspendisse lorem arcu turpis.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <Image src={'/assets/icons/icon-learn.svg'} width={60} height={60} alt="icon" />
                            <div>
                                <h1 className="text-2xl font-semibold">Patient Care Guides</h1>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit imperdiet consequat eget vel metus suspendisse lorem arcu turpis.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Image src='/assets/images/hospital_learn_pet.png' width={786} height={1024} alt="pet" />
                </div>
            </div>
        </div>
    );
}
