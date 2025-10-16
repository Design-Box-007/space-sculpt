'use client'


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/types";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <motion.div
      className="rounded-2xl flex flex-col gap-[14px] justify-between overflow-hidden shadow-md bg-white border border-gray-200 p-5"
      variants={cardVariants}
    >
      <div className="relative w-full h-60">
        <Image
          src={blog.imgSrc}
          alt={blog.title}
          layout="fill"
          className="object-cover rounded-2xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 font-cinzel">{blog.title}</h3>
        <p className="text-gray-500 text-sm mt-2 font-montserrat">{blog.description}</p>
      </div>

      <Link href={`/blogs/${formatToHyphenated(blog.title)}`} className="w-full mt-4">
        <button className="w-full bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md">
          Read More
        </button>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
