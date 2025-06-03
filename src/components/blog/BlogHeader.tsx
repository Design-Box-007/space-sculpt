import React from "react";
import { Blog } from '@/types'
import Image from "next/image";

interface BlogHeaderProps {
    title: string;
    imgSrc: string;
    imgAlt: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, imgSrc, imgAlt }) => {
    return (
        <div className="flex flex-col gap-10 p-4 border-b mt-[100px]">
            <h1 className="text-4xl font-medium">{title}</h1>
            <Image src={imgSrc} width={1360} height={683} alt={imgAlt} className="rounded-lg object-cover object-center lg:h-[500px]" />
        </div>
    );
};

export default BlogHeader;
