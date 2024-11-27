"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CardBlog from "@/components/cards/CardBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const Blog = ({type}) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [blogs, setBlogs] = useState([]);
  const [totalSlides, setTotalSlides] = useState(0);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let response;

        const url = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=100&page=1&orderby=date&order=desc`;
        if (type == 'veterinarian')
          response = await axios.get(`${url}&categories=${process.env.NEXT_PUBLIC_VETERINARIAN_CATEGORY}`, {});
        else if (type == 'technician')
          response = await axios.get(`${url}&categories=${process.env.NEXT_PUBLIC_TECHNICIAN_CATEGORY}`, {});
        else if (type == 'pet owner')
          response = await axios.get(`${url}&categories=${process.env.NEXT_PUBLIC_PET_OWNER_CATEGORY}`, {});
        else if (type == 'hospital')
          response = await axios.get(`${url}&categories=${process.env.NEXT_PUBLIC_HOSPITAL_CATEGORY}`, {});
        else
          response = await axios.get(url, {});

        setBlogs(response.data);
        setTotalSlides(Math.ceil(response.data.length / 4));
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
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


  const formatDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      const result = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });
      return result;
    }
    else
      return '';
  };

  return (
    <section
      className="relative z-[20] container mx-auto py-8 sm:py-16 md:py-24 lg:py-32 max-sm:px-7"
      ref={sectionRef}
    >
      <div>
        <h2
          ref={titleRef}
          className="font-semibold leading-[48px] text-[28px] md:text-[35px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]"
        >
          Our Blogs
        </h2>
        <p
          ref={descriptionRef}
          className="text-xs lg:text-sm 2xl:text-base !leading-[1.8] mt-5 text-[#636363]"
        >
          Stay informed and empowered with our educational blog, designed to
          help pet owners like you <br className="hidden lg:block" />
          take the best care of your furry companions.
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        className="mt-8"
        spaceBetween={24}
        slidesPerGroupAuto
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) =>
          setActiveIndex(Math.floor(swiper.activeIndex / 4))
        }
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {blogs.length > 0 ? (
            blogs.map((blog, idx) => (
                <SwiperSlide key={idx}>
                  <div ref={(el) => (cardsRef.current[idx] = el)}>
                    <CardBlog
                        id={blog.id}
                        imageSrc={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                        title={blog.title.rendered}
                        description={blog.content.rendered.split('.')[0].trim()}
                        date={formatDate(blog.date)}
                        actionClassName={(idx + 1) % 2 === 0 ? "!mt-16" : ""}
                    />
                  </div>
                </SwiperSlide>
            ))
        ) : (
            <div></div>
        )}
      </Swiper>

      <div className="flex items-center gap-2 mx-auto w-fit mt-12">
        {[...Array(totalSlides)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/icon-star-rounded.svg"
            onClick={() => {
              swiperInstance.slideTo(index * 4);
              setActiveIndex(index);
            }}
            alt=""
            width={370}
            height={500}
            className={`max-w-[14px] cursor-pointer ${
              index === activeIndex ? "opacity-100" : "opacity-20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
