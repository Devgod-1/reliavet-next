"use client";
import Blog from "@/components/Blog";
import Connect from "./contents/Connect";
import Hero from "./contents/Hero";
import Learn from "./contents/Learn";
import React, { useEffect, useRef, useState } from "react";
import { dataBlogPosts } from "@/utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBlog from "@/components/cards/CardBlog";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hospital = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const totalSlides = Math.ceil(dataBlogPosts.length / 4); // Adjust based on default slides per view

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.5, ease: "power3.out" }, // Reduce duration for faster animation
    });

    // Faster GSAP animation for scaling
    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );

    // Faster GSAP animation for blog cards
    cardsRef.current.forEach((card) => {
      tl.fromTo(
        card,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "back.out(1.7)" } // Reduced to 0.2s
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Hero />
      <Connect />
      <Learn />
      <div className="relative">
        <img
          src="/assets/images/bg-promo-2.png"
          className="absolute top-[-21rem] 2xl:top-[-24rem] pointer-events-none hidden lg:block"
        />
        <Blog type="hospital" />
      </div>
    </div>
  );
};

export default Hospital;
