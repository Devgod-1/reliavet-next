"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Hero() {
  const router = useRouter();
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {

    const fetchFeaturedBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=1&page=1&orderby=date&categories=${process.env.NEXT_PUBLIC_FEATURED_CATEGORY}`, {});

        setFeaturedBlogs(response.data);
      } catch (err) {
        console.error("Error fetching popular blogs:", err);
      }
    };

    fetchFeaturedBlogs();

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
    <div
      className="flex flex-col items-center gap-y-8 bg-[#ECEDF0] h-[100vh] justify-center relative py-14 mb-60 max-lg:px-[2em]"
      style={{
        background: "url('/assets/images/bg-newsroom.png')",
        backgroundSize: "cover",
        backgroundColor: "#ECEDF0",
        marginBottom: "135px",
        paddingBottom: "0px"
      }}
    >
      <h1 className="font-bold leading-[1.1] text-[27px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[68px] mt-[-35vh] lg:mt-[-20vh]">
        Our Newsroom
      </h1>
      <div
        className="w-full flex items-center bg-white relative shadow-xl max-w-[800px] p-2 rounded-lg pl-4"
      >
        <img
          src="/assets/icons/icon-search.svg"
          alt="search_icon"
          className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] mr-3"
        />
        <input
          type="text"
          placeholder="Search Article"
          className="w-full outline-none !text-xs 2xl:!text-sm"
        />
        <button className="text-xs 2xl:text-sm bg-red-primary text-white whitespace-nowrap p-3 px-6 rounded-lg font-semibold">
          Search
        </button>
      </div>

      <div className="overflow-hidden rounded-xl shadow-[0px_12px_40px_#0002] bg-white lg:w-4/6 w-[90%] -bottom-[15%]">
        {featuredBlogs.length > 0 ? (
          featuredBlogs.map((blog, idx) => (
              <Link key={idx} href={"/blog/" + blog.slug}>
                <div className="grid md:grid-cols-2">
                  <div className="relative md:aspect-auto">
                    <Image
                        src={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                        alt="pet"
                        width={650}
                        height={435}
                        className="md:h-96"
                    />
                  </div>
                  <div className="p-6 max-md:pt-0 flex flex-col justify-between">
                    <div className="space-y-4">
                                <span className="inline-block px-3 py-1 text-xs font-bold text-[#243A8E] bg-[#243A8E]/5  rounded-full">
                                  FEATURED
                                </span>
                      <h2
                          className="text-base lg:text-xl 2xl:text-2xl font-bold leading-tight tracking-tight text-gray-900 cursor-pointer"
                          onClick={() => router.push("/blog/123")}
                      >
                        {blog.title.rendered}
                      </h2>
                      <p className="md:h-48 h-24 text-ellipsis overflow-hidden text-xs lg:text-sm 2xl:text-base text-gray-600" dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}></p>
                    </div>
                    <div className="flex justify-between items-end gap-3 mt-6">
                      <div className="relative flex items-center space-x-3">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center italic">
                            <svg
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[18px] h-[18px]"
                            >
                              <g id="Icon ">
                                <path
                                    id="Oval"
                                    opacity="0.15"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.7008 27.8381C21.2675 27.8381 27.4016 21.704 27.4016 14.1373C27.4016 6.57057 21.2675 0.436523 13.7008 0.436523C6.13405 0.436523 0 6.57057 0 14.1373C0 21.704 6.13405 27.8381 13.7008 27.8381Z"
                                    fill="#243A8E"
                                />
                                <path
                                    id="Icon"
                                    d="M11.8723 18.5031L8.14828 14.8014C8.04422 14.6973 7.99219 14.5635 7.99219 14.4C7.99219 14.2364 8.04422 14.1026 8.14828 13.9986L8.97336 13.1958C9.07743 13.0769 9.2075 13.0174 9.3636 13.0174C9.5197 13.0174 9.65721 13.0769 9.77614 13.1958L12.2737 15.6933L17.6255 10.3415C17.7445 10.2226 17.882 10.1631 18.0381 10.1631C18.1942 10.1631 18.3242 10.2226 18.4283 10.3415L19.2534 11.1443C19.3575 11.2483 19.4095 11.3821 19.4095 11.5456C19.4095 11.7092 19.3575 11.843 19.2534 11.947L12.6751 18.5031C12.571 18.622 12.4372 18.6815 12.2737 18.6815C12.1101 18.6815 11.9763 18.622 11.8723 18.5031Z"
                                    fill="#243A8E"
                                />
                              </g>
                            </svg>

                            <span className="text-gray-600 text-xs 2xl:text-sm ml-2">
                                        {blog.yoast_head_json.author}
                                      </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col text-[#636363] text-xs 2xl:text-sm">
                        {formatDate(blog.date)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
          ))
        ): (
            <div></div>
        )}
      </div>
    </div>
  );
}
