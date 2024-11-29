"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import oauth from '@/utils/oauth';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const pathname = usePathname();

  // References for animation elements
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const subscribeTitleRef = useRef(null);
  const newsletterRef = useRef(null);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultSubscribeMessage, setResultSubscribeMessage] = useState('');
  const [resultContactMessage, setResultContactMessage] = useState('');

  useEffect(() => {
    // GSAP animations without using timeline
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out", // Add ease for smoother transition
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { scale: 0, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      subscribeTitleRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      newsletterRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubscribeSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const requestUrl = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${process.env.NEXT_PUBLIC_WP_SUBSCRIBE_FORM_ID}/submissions`;
      const requestData = {
          url: requestUrl,
          method: 'POST',
          body: {
              input_1: email
          },
      };

      const headers = {
          ...oauth.toHeader(oauth.authorize(requestData)),
          'Content-Type': 'application/json',
      };

      const response = await fetch(requestUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
              input_1: email,
          }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.is_valid) {
          setResultSubscribeMessage('Subscription successful!');
      } else {
          setResultSubscribeMessage('There was an error submitting the form.');
      }
  };

  const handleContactSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const requestUrl = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${process.env.NEXT_PUBLIC_WP_CONTACT_FORM_ID}/submissions`;
        const requestData = {
            url: requestUrl,
            method: 'POST',
            body: {
                input_1: name,
                input_2: phone,
                input_3: email,
                input_4: message
            },
        };

        const headers = {
            ...oauth.toHeader(oauth.authorize(requestData)),
            'Content-Type': 'application/json',
        };

        const response = await fetch(requestUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                input_1: name,
                input_2: phone,
                input_3: email,
                input_4: message
            }),
        });

        const data = await response.json();
        setLoading(false);

        if (data.is_valid) {
            setResultContactMessage(data.confirmation_message);
        } else {
            setResultContactMessage('There was an error submitting the form.');
        }
    };


  return (
    <section className="w-full" ref={sectionRef}>
      <div
        className={`bg-[linear-gradient(215.82deg,#243A8E_18.23%,#496FFF_81.77%)] ${
          pathname === "/contact-us" && "hidden"
        }`}
      >
        <div className="container mx-auto text-white py-14 flex max-md:flex-col max-md:px-5 gap-20">
          <div className="w-full lg:mt-12">
            <div>
              <h4
                className="text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px] font-bold"
                ref={titleRef}
              >
                Contact us
              </h4>
              <span
                className="text-xs lg:text-base 2xl:text-lg block"
                ref={descriptionRef}
              >
                Have questions or need assistance? Our dedicated support team is
                here to help you make the most of ReliaVet.
              </span>
            </div>
            <div className="space-y-2 mt-6 lg:mt-12" ref={contactRef}>
              <div className="flex items-center text-sm lg:text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-email.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-[16px] lg:max-w-[18px] 2xl:max-w-[24px] mr-3 2xl:mr-3"
                />{" "}
                contact@reliavet.com
              </div>
              <div className="flex items-center text-sm lg:text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-email.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-[16px] lg:max-w-[18px] 2xl:max-w-[24px] mr-3 2xl:mr-3"
                />{" "}
                support@reliavet.com
              </div>
              {/* <div className="flex items-center text-sm lg:text-lg 2xl:text-xl">
                <Image
                  src="/assets/icons/icon-phone.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="max-w-[30px] lg:max-w-[32px] 2xl:max-w-[40px] mr-1 2xl:mr-1 -ml-2"
                />{" "}
                +34 123 456 789
              </div> */}
            </div>
          </div>
          <div
            className="w-full bg-white/5 border border-white/50 rounded-3xl p-7 2xl:p-10"
            ref={formRef}
          >
            <h4 className="text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] leading-[1.3] font-bold">
              Have a question?{" "}
              <span className="block font-semibold">Get in touch.</span>
            </h4>

            <div className="space-y-8 mt-8">
              <input required
                placeholder="Name"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
                onChange={(e) => setName(e.target.value)}
              />
              <input required
                placeholder="Email address"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input required
                placeholder="Phone number"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input required
                placeholder="Message"
                className="outline-none focus:outline-none borde-none !text-sm 2xl:text-base bg-transparent  placeholder:text-white w-full border-b border-b-white pb-2"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button className="transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold bg-black w-full py-4 rounded-xl mt-10"
                    onClick={handleContactSubmit}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
          {resultContactMessage && <div class="text-center text-red-600"><p dangerouslySetInnerHTML={{ __html: resultContactMessage }}></p></div>}
      </div>
      <div className="bg-[#243A8E33]">
        <div className="py-6 2xl:py-10 container mx-auto flex max-md:flex-col max-md:px-5 items-center justify-between">
          <h4
            className="max-sm:text-[22px] text-[30px] 2xl:text-[40px] leading-[1.3] font-bold max-lg:mb-5"
            ref={subscribeTitleRef}
          >
            Subscribe to Newsletter
          </h4>

          <div
            className="w-full bg-white max-w-[500px] 2xl:max-w-[600px] flex items-center rounded-2xl overflow-hidden"
            ref={newsletterRef}
          >
            <input className="w-full px-4 h-[50px] lg:h-[80px] 2xl:h-[90px] outline-none" required onChange={(e) => setEmail(e.target.value)} />
            <button disabled={loading} className="bg-red-primary rounded-2xl shadow-[-4px_0px_20px_#D9D9D9aa] w-fit text-xs lg:text-lg 2xl:text-xl font-bold text-white h-[60px]  lg:h-[80px] 2xl:h-[90px] px-6 lg:px-10"
                onClick={handleSubscribeSubmit}>
                {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
        </div>
        {resultSubscribeMessage && <p class="text-center text-red-600">{resultSubscribeMessage}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
