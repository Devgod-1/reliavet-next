import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
    return (
        <div className='container mx-auto'>
            <div>
                <Image src='/assets/images/blog_image.png' width={1000} height={580} alt='pet' className='w-full' />
            </div>
            <div className="flex flex-col lg:flex-row  gap-8">
                <main className="lg:w-2/3 bg-[#F5F5F5] px-10 p-20">
                    <h1 className="text-3xl font-bold mb-4">How to Make Sure Your Online Vet Appointment Goes Smoothly</h1>
                    <div className='py-2 border-t border-b border-gray-300 my-5'>
                        <span>25 JUNE, 2024 </span> | <span>Written by Soreny Salazar</span>
                    </div>
                    <p className="mb-4 text-3xl font-bold">To ensure a smooth online vet appointment, professionals can follow these tips:</p>

                    <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-5">The caveat: Virtual visits can be a great thing for your business, but only if the appointments go smoothly and your clients are satisfied. Without a proactive effort to make sure the appointment results are satisfactory to the client, they are unlikely to book another one.
                            Make sure you understand the best ways to use the online platform for appointments. Test the video and audio capabilities, familiarize yourself with the features, and ensure a stable internet connection. Type up any instructions that you might want to include in appointment reminders to help your clients.
                            Before the appointment, go through the client’s files to refresh your memory about the pet’s medical history, previous treatments, and any specific concerns or requests mentioned by the client. Since you can’t touch and feel the animal, the other information you have will be even more crucial. Be prepared to speak to issues and answer questions on specific pets prior to any appointment.</p>
                        <div className='flex items-center justify-between'>
                            <Image
                                src="/assets/images/blog_image2.png"
                                alt="Veterinarian examining a small animal"
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <div className='p-6'>
                                <p className='text-center'>
                                    Send a reminder to clients before the appointment, informing them about the upcoming online consultation. Include instructions on how to join the virtual appointment and any necessary preparations they need to make. Using a platform like ReliaVet, you can easily send reminders to your clients as well as a link to access and join their The veterinary profession definitely has its challenges, but there are certainly things you can do to make your job a bit simpler. The veterinary landscape of the future is rapidly moving online, and vets who adopt.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>&quot;He says I&apos;m the worst person in the world and I&apos;m an ungrateful daughter. You stole 18 years of my life because you made me work since I was six years old. Obviously, I&apos;m going to dedicate myself to what you taught me, but I&apos;m not going to work for anyone, I work for myself and now he&apos;s defaming me,&quot; she said.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3">Create a Calm and Quiet Environment</h2>
                    <p className="mb-4">Find a neutral and well-lit space for the appointment. Minimize background noise and distractions to ensure clear communication with the client and to focus on the pet’s condition. Ideally these appointments would take place from your usual office that looks familiar to your clients, but if you’re unable to do that try to find an equally peaceful place.
                        This is always a good practice for practitioners, but it becomes crucial in virtual appointments. Speak clearly and explain the diagnosis, treatment options, and any necessary follow-up instructions in a way that is easy for the client to understand. Use visual aids or diagrams if needed and leave time for questions.</p>

                    <div className='flex items-center justify-between'>
                        <Image
                            src="/assets/images/blog_image2.png"
                            alt="Veterinarian examining a small animal"
                            width={400}
                            height={300}
                            className="rounded-lg mb-4"
                        />
                        <div className='p-6'>
                            <p className='text-center'>
                                Send a reminder to clients before the appointment, informing them about the upcoming online consultation. Include instructions on how to join the virtual appointment and any necessary preparations they need to make. Using a platform like ReliaVet, you can easily send reminders to your clients as well as a link to access and join their The veterinary profession definitely has its challenges, but there are certainly things you can do to make your job a bit simpler. The veterinary landscape of the future is rapidly moving online, and vets who adopt.
                            </p>
                        </div>
                    </div>
                </main>

                <aside className="lg:w-1/3  pt-24">
                    <div className="p-4 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold mb-4">STAY CONNECTED</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube'].map((social) => (
                                <button key={social} className="bg-blue-600 text-white p-2 rounded flex items-center justify-center">
                                    {social === 'Facebook' && <Facebook size={20} />}
                                    {social === 'Twitter' && <Twitter size={20} />}
                                    {social === 'Instagram' && <Instagram size={20} />}
                                    {social === 'Linkedin' && <Linkedin size={20} />}
                                    {social === 'Youtube' && <Youtube size={20} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">THE LATEST</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex gap-4">
                                    <Image
                                        src="/assets/images/blog_image2.png"
                                        alt="Article thumbnail"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Article Title {item}</h4>
                                        <p className="text-sm text-gray-600">Short description of the article...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}