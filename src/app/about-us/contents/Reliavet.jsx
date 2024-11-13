import Image from 'next/image';

export default function Reliavet() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-1'>
                <Image src='/assets/images/reliavet_pet.png' alt='pet' width={853} height={799} />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-5 col-span-2 bg-bgPrimaryGradientRed2 text-white py-8 px-4'>
                <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px]">Reliavet</h1>
                <p className='w-full md:w-2/4 mx-auto text-center'>Reliable vets for you and your pets! When your pet is sick, every second counts and during these troubling times in-person appointments can sometimes take days or even weeks to become available. Instead of watching helplessly and waiting with concern, Reliavet gives you a reliable resource to have your pet quickly evaluated by a veterinarian and give you peace of mind.</p>
                <button className='w-[230px] h-[90px] border rounded-lg my-10'>Get Started</button>
            </div>
        </div>
    );
}
