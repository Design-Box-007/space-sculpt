import { Blog } from '@/types'
import React from 'react'
import BlogCard from './BlogCard'

const BlogCardGrid: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <section className='grid p-[14px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] font-poppins'>
            {blogs.map((blog: Blog, index: number) => (
                <BlogCard blog={blog} key={index} />
            ))}
        </section>
    )
}

export default BlogCardGrid