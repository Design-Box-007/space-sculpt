import React from "react";
import Hero from "../comman/Hero";
import assets from "@/data/assets";
import BlogCardGrid from "./BlogCardGrid";
import { blogListData } from "@/data/blogs";

const Blogs = () => {
  return (
    <section className="p-[10px] md:p-3 lg:p-5 space-y-10">
      <Hero
        heading="Interior Design and Fit Out Insights – Expert Tips & Ideas"
        content="Explore a range of knowledge, innovative services that merge <br/>creativity, precision, and craftsmanship to transform your space."
        bgImage={assets.blogsHeroImage}
      />
      <h4 className="text-[32px] leading-[48px] font-medium font-cinzel px-5">
        Recent Blogs
      </h4>
      <BlogCardGrid blogs={blogListData} />
    </section>
  );
};

export default Blogs;

//
