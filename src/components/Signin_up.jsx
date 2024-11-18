"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SignInUp = ({ reg, note, video }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const iconRefs = useRef([]);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  // Populate the refs for icons and text blocks
  iconRefs.current = [];
  textRefs.current = [];

  const addToRefs = (el, refs) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      // Animate the title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate icons and text blocks
      gsap.fromTo(
        iconRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        textRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the image on the right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="w-full flex flex-col justify-center items-center space-y-8 bg-[linear-gradient(213.61deg,#243A8E_10.73%,#5774CD_38.22%,#B13A66_72.38%,#DE1E33_89.27%)] p-20 max-xl:p-10">
          <div className="w-11/12 mx-auto">
            <div
              ref={titleRef}
              className="2xl:text-[55px] text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] leading-[1.4] lg:leading-[1.1] font-bold text-white py-20 max-md:py-10"
            >
              Signing Up is easy
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center max-lg:space-y-7 justify-between">
              {[
                {
                  iconSrc: "/assets/images/registration.png",
                  text: reg,
                  bgSrc: "/assets/images/01.png",
                },
                {
                  iconSrc: "/assets/images/note.png",
                  text: note,
                  bgSrc: "/assets/images/02.png",
                },
                {
                  iconSrc: "/assets/images/video-registration.png",
                  text: video,
                  bgSrc: "/assets/images/03.png",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full lg:w-[25%] flex gap-5 flex-col"
                >
                  <img
                    alt=""
                    src={item.iconSrc}
                    className="w-[64px] h-[64px] 2xl:w-[72px] 2xl:h-[72px]"
                    ref={(el) => addToRefs(el, iconRefs)}
                  />
                  <div
                    className="font-semibold tracking-[-0.04em] text-left text-white relative text-lg lg:text-xl 2xl:text-2xl w-full lg:w-[140px] 2xl:w-[170px] h-[142px] max-md:h-[71px] bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${item.bgSrc})` }}
                    ref={(el) => addToRefs(el, textRefs)}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full xl:max-w-[50%] relative">
          <img
            ref={imageRef}
            src="/assets/images/easy.png"
            alt="practice"
            className="object-cover w-full"
            layout="responsive"
            width={700}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SignInUp;
