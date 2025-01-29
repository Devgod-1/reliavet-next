"use client";
import { useState } from "react";
import AllArticles from "./contents/AllArticles";
import Hero from "./contents/Hero";
import PopularArticles from "./contents/PopularArticles";
import Promo from "./contents/Promo";
import RecentArticles from "./contents/RecentArticles";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log('searchQuery', searchQuery);
  return (
    <div className="overflow-x-hidden">
      <Hero setSearchQuery={setSearchQuery} />
      <PopularArticles />
      <RecentArticles />
      <AllArticles searchQuery={searchQuery} />
      <Promo />
    </div>
  );
}
