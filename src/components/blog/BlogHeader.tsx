import React from "react";
import { Blog } from '@/types'
import Image from "next/image";

type BlogHeaderProps = Pick<Blog, "imgSrc" | "title">; // Only includes imgSrc and title

const BlogHeader: React.FC<{ blog: BlogHeaderProps }> = ({ blog }) => {
    return (
        <div className="flex items-center gap-4 p-4 border-b">
            <h1 className="text-4xl font-medium">{blog.title}</h1>
            <Image src={blog.imgSrc} width={1360} height={683} alt={blog.title} />
        </div>
    );
};

export default BlogHeader;
