import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconX,
  IconYoutube,
} from "@/assets";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="container mx-auto lg:mt-20">
      <div>
        <Image
          src="/assets/images/blog_image.png"
          width={1000}
          height={580}
          alt="pet"
          className="w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row  gap-8">
        <main className="lg:w-2/3 bg-[#F5F5F5] px-10 p-14">
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">
            How to Make Sure Your Online Vet Appointment Goes Smoothly
          </h1>
          <div className="py-2 border-t border-b border-gray-300 my-5 text-[#676A6D] text-xs lg:text-sm">
            <span>25 JUNE, 2024 </span> | <span>Written by Soreny Salazar</span>
          </div>
          <p className="mb-5 text-xl lg:text-2xl 2xl:text-3xl font-semibold">
            To ensure a smooth online vet appointment, professionals can follow
            these tips:
          </p>

          <div className="mb-6">
            <p className="text-xs lg:text-sm text-[#636363] !leading-[1.8] mb-5">
              The caveat: Virtual visits can be a great thing for your business,
              but only if the appointments go smoothly and your clients are
              satisfied. Without a proactive effort to make sure the appointment
              results are satisfactory to the client, they are unlikely to book
              another one. Make sure you understand the best ways to use the
              online platform for appointments. Test the video and audio
              capabilities, familiarize yourself with the features, and ensure a
              stable internet connection. Type up any instructions that you
              might want to include in appointment reminders to help your
              clients. Before the appointment, go through the client’s files to
              refresh your memory about the pet’s medical history, previous
              treatments, and any specific concerns or requests mentioned by the
              client. Since you can’t touch and feel the animal, the other
              information you have will be even more crucial. Be prepared to
              speak to issues and answer questions on specific pets prior to any
              appointment.
            </p>
            <div className="flex max-lg:flex-col items-center justify-between">
              <Image
                src="/assets/images/blog_image2.png"
                alt="Veterinarian examining a small animal"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <div className="lg:p-6 max-lg:mt-6">
                <p className="lg:text-center text-xs lg:text-sm text-[#636363] !leading-[1.8]">
                  Send a reminder to clients before the appointment, informing
                  them about the upcoming online consultation. Include
                  instructions on how to join the virtual appointment and any
                  necessary preparations they need to make. Using a platform
                  like ReliaVet, you can easily send reminders to your clients
                  as well as a link to access and join their The veterinary
                  profession definitely has its challenges, but there are
                  certainly things you can do to make your job a bit simpler.
                  The veterinary landscape of the future is rapidly moving
                  online, and vets who adopt.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs lg:text-sm text-[#636363] !leading-[1.8]">
                &quot;He says I&apos;m the worst person in the world and
                I&apos;m an ungrateful daughter. You stole 18 years of my life
                because you made me work since I was six years old. Obviously,
                I&apos;m going to dedicate myself to what you taught me, but
                I&apos;m not going to work for anyone, I work for myself and now
                he&apos;s defaming me,&quot; she said.
              </p>
            </div>
          </div>

          <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mb-5">
            Create a Calm and Quiet Environment
          </h2>
          <p className="mb-4 text-xs lg:text-sm text-[#636363] !leading-[1.8]">
            Find a neutral and well-lit space for the appointment. Minimize
            background noise and distractions to ensure clear communication with
            the client and to focus on the pet’s condition. Ideally these
            appointments would take place from your usual office that looks
            familiar to your clients, but if you’re unable to do that try to
            find an equally peaceful place. This is always a good practice for
            practitioners, but it becomes crucial in virtual appointments. Speak
            clearly and explain the diagnosis, treatment options, and any
            necessary follow-up instructions in a way that is easy for the
            client to understand. Use visual aids or diagrams if needed and
            leave time for questions.
          </p>

          <div className="flex max-lg:flex-col items-center justify-between mt-6">
            <Image
              src="/assets/images/blog_image3.png"
              alt="Veterinarian examining a small animal"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <div className="lg:p-6 max-lg:mt-6">
              <p className="lg:text-center text-xs lg:text-sm text-[#636363] !leading-[1.8]">
                Send a reminder to clients before the appointment, informing
                them about the upcoming online consultation. Include
                instructions on how to join the virtual appointment and any
                necessary preparations they need to make. Using a platform like
                ReliaVet, you can easily send reminders to your clients as well
                as a link to access and join their The veterinary
                profession definitely has its challenges, but there are
                certainly things you can do to make your job a bit simpler. The
                veterinary landscape of the future is rapidly moving online, and
                vets who adopt.
              </p>
            </div>
          </div>
        </main>

        <aside className="lg:w-1/3 lg:pt-14  lg:px-10">
          <div className="p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">STAY CONNECTED</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Facebook", "Twitter", "Instagram", "Linkedin", "Youtube"].map(
                (social) => (
                  <button
                    key={social}
                    className="group bg-[#ECEEF2] border border-[#c9c9c9] hover:bg-[#243A8E] text-white p-2 py-5 rounded flex flex-col items-center justify-center"
                  >
                    {social === "Facebook" && (
                      <div className="flex flex-col items-center">
                        <IconFacebook className="w-[20px] h-[20px] group-hover:text-white text-[#243A8E]" />
                        <span className="text-center text-[#636363] text-xs lg:text-sm font-medium block mt-2 group-hover:text-white">
                          1280 Fans
                        </span>
                      </div>
                    )}
                    {social === "Twitter" && (
                      <div className="flex flex-col items-center">
                        <IconX className="w-[20px] h-[20px] group-hover:text-white text-[#243A8E]" />
                        <span className="text-center text-[#636363] text-xs lg:text-sm font-medium block mt-2 group-hover:text-white">
                          200 Followers
                        </span>
                      </div>
                    )}
                    {social === "Instagram" && (
                      <div className="flex flex-col items-center">
                        <IconInstagram className="w-[20px] h-[20px] group-hover:text-white text-[#243A8E]" />
                        <span className="text-center text-[#636363] text-xs lg:text-sm font-medium block mt-2 group-hover:text-white">
                          88 Followers
                        </span>
                      </div>
                    )}
                    {social === "Linkedin" && (
                      <div className="flex flex-col items-center">
                        <IconLinkedin className="w-[20px] h-[20px] group-hover:text-white text-[#243A8E]" />
                        <span className="text-center text-[#636363] text-xs lg:text-sm font-medium block mt-2 group-hover:text-white">
                          109 Followers
                        </span>
                      </div>
                    )}
                    {social === "Youtube" && (
                      <div className="flex flex-col items-center">
                        <IconYoutube className="w-[20px] h-[20px] group-hover:text-white text-[#243A8E]" />
                        <span className="text-center text-[#636363] text-xs lg:text-sm font-medium block mt-2 group-hover:text-white">
                          200 Followers
                        </span>
                      </div>
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="pl-6">
            <h3 className="text-lg font-semibold mb-4">THE LATEST</h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title:
                    "How to Increase Your Veterinary Practice’s Appointments",
                  img: "/assets/images/blog_image3.png",
                },
                {
                  id: 2,
                  title:
                    "How to Increase Your Veterinary Practice’s Appointments",
                  img: "/assets/images/blog_image.png",
                },
                {
                  id: 3,
                  title:
                    "How to Increase Your Veterinary Practice’s Appointments",
                  img: "/assets/images/blog_image2.png",
                },
              ].map((item, id) => (
                <div key={item.id} className="flex gap-4 w-full">
                  <img
                    src={item.img}
                    alt="Article thumbnail"
                    className="rounded w-full max-w-[125px] h-[110px] object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-sm lg:text-base text-[#282828] font-bold">
                      {item.title}
                    </h4>
                    <p className="text-[10px] lg:text-xs text-[#636363] mt-1">
                      Feb. 4, 2023
                    </p>
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
