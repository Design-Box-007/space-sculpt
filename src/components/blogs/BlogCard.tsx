import React from "react";
import Image from "next/image";
import { Blog } from "@/types";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <div className="rounded-2xl flex flex-col gap-[14px] overflow-hidden shadow-md bg-white border border-gray-200 p-5">
            <div className="relative w-full h-60">
                <Image
                    src={blog.imgSrc}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{blog.description}</p>
            </div>

            <Link href={`/blogs/${formatToHyphenated(blog.title)}`} className="w-full mt-4">
                <button className="w-full bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md">
                    Read More
                </button>
            </Link>
        </div>
    );
};

export default BlogCard;
