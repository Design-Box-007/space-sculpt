'use client'

import { blogListData } from "@/data/blogs";
import { Blog as BlogType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BlogHeader from "./BlogHeader";
import Head from "next/head";

const componentMap = {
    Blog1: dynamic(() => import("@/data/Blogs/Blog1")),
    // Add other blog components here...
};

const Blog = () => {
    const params = useParams();
    const { blogName } = params;

    const blogData = blogListData.find((blog: BlogType) =>
        blogName === formatToHyphenated(blog.title)
    );

    if (!blogData) return <>BLOG NOT FOUND</>;

    const BlogComponent = componentMap[blogData.component as keyof typeof componentMap];

    if (!BlogComponent) return <>BLOG NOT FOUND</>;

    return (
        <section className='p-[10px] md:p-3 lg:p-5 font-poppins space-y-10'>
            <Head>
                <Head>
                    <title>{blogData.title} | Space Sculpt Blog</title>
                    <meta name="description" content={blogData.description} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={`http://spacesculpt.ae/blogs/${formatToHyphenated(blogData.title)}`} />
                </Head>
            </Head>
            <BlogHeader blog={blogData} />
            <Suspense fallback={<p>Loading blog...</p>}>
                <BlogComponent />
            </Suspense>
        </section>
    );
}

export default Blog;
