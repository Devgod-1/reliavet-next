"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts/${id}`, {});

        setBlog(response.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=5&page=1&orderby=date&order=desc`, {});

        setRecentBlogs(response.data);
      } catch (err) {
        console.error("Error fetching recent blogs:", err);
      }
    };

    fetchBlog();
    fetchRecentBlogs();

  }, [id]);

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
    <div className="container mx-auto lg:mt-20">
      <div>
        <Image
          src={blog.yoast_head_json?.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
          width={1000}
          height={580}
          alt="pet"
          className="w-full object-cover max-h-96"
        />
      </div>
      <div className="flex flex-col lg:flex-row  gap-8">
        <main className="lg:w-2/3 bg-[#F5F5F5] px-10 p-14">
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">
            {blog?.title?.rendered}
          </h1>
          <div className="py-2 border-t border-b border-gray-300 my-5 text-[#676A6D] text-xs lg:text-sm">
            <span>{formatDate(blog?.date)}</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}></p>

        </main>

        <aside className="lg:w-1/3 lg:pt-14  lg:px-10">
          <div className="pl-6">
            <h3 className="text-lg font-semibold mb-4">THE LATEST</h3>
            <div className="space-y-4">
              {recentBlogs.length > 0 ? (
                  recentBlogs.map((blog, idx) => (
                      <Link key={idx} href={"/blog/" + blog.id}
                            className="flex gap-4 w-full"
                      >
                        <img
                            src={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image.length > 0 ? blog.yoast_head_json.og_image[0].url : "/assets/images/blog_image3.png"}
                            alt="blog image"
                            className="rounded w-full max-w-[125px] h-[110px] object-cover"
                        />
                        <div className="flex flex-col">
                          <h4 className="text-sm lg:text-base text-[#282828] font-bold">
                            {blog.title.rendered}
                          </h4>
                          <p className="text-[10px] lg:text-xs text-[#636363] mt-1">
                            {formatDate(blog.date)}
                          </p>
                        </div>
                      </Link>
                  ))
              ) : (
                  <div></div>
              )}

            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
