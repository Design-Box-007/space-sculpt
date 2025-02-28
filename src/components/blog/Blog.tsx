'use client'

import React from 'react'
import BlogHeader from './BlogHeader'
import { useParams } from 'next/navigation'
import { blogListData } from '@/data/blogs'
import { Blog as BlogType } from '@/types'
import formatToHyphenated from '@/utils/formatPathName'

const Blog = () => {
    const params = useParams();
    const { blogName } = params;

    const blogData = blogListData.find((blog: BlogType) => 
        blogName === formatToHyphenated(blog.title)
    );

    if (!blogData) return <>BLOG NOT FOUND</>;

    const BlogComponent = blogData.component; // Extract the dynamic component

    return (
        <section className='p-[10px] font-poppins space-y-10'>
            <BlogHeader blog={blogData} />
            <BlogComponent /> {/* Render the dynamic blog component */}
        </section>
    );
}

export default Blog;
