import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[80vh] justify-center relative py-14 mb-60">
            <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]">Our Newsroom</h1>
            <div className="w-fill lg:w-4/12 relative shadow-xl">
                <input type="text" placeholder="Search Article" className="w-full pl-12 py-4 rounded-lg outline-none" />
                <Image src="/assets/icons/icon-search.svg" width={20} height={20} alt="search_icon" className="absolute top-5 left-4" />
                <button className="px-3 py-2 rounded-lg bg-[#DE1E33] text-white absolute right-2 top-2">Search</button>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg bg-white w-4/6 absolute -bottom-[30%]">
                <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image
                            src="/assets/images/news_pet.png"
                            alt="pet"
                            width={650}
                            height={435}
                        />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                                FEATURED
                            </span>
                            <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                                How to Maximize your Pet Hospital&apos;s Success with Virtual Vet Appointments
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="relative w-10 h-10">
                                <Image
                                    alt="Author avatar"
                                    src="/assets/images/news_pet.png"
                                    width={650}
                                    height={435}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-900">Viola Manisa</span>
                                    <svg
                                        className="w-4 h-4 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-600 text-sm">Verified writer</span>
                                </div>
                                <span className="text-sm text-gray-500">02 May-2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
