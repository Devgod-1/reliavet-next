import Veterinarian from "../contents/Veterinarian";


export default function page() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-[2rem] md:p-0">
                {
                    [...Array(12).keys()].map((i) => <div key={i} className="border py-6 rounded-xl bg-[#ECEEF2]">
                        <Veterinarian />
                    </div>)
                }
            </div>
        </div>
    );
}
