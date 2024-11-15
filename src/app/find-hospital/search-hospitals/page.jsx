import Hospital from "../contents/Hospital";


export default function page() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {
                    [...Array(12).keys()].map((i) => <div key={i} className="border py-6 rounded-xl bg-[#ECEEF2]">
                        <Hospital />
                    </div>)
                }
            </div>
        </div>
    );
}