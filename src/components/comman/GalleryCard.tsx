'use client'

import assets from '@/data/assets'
import { Gallery } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const GalleryCard: React.FC<{ data: Gallery }> = ({ data }) => {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent parent click event from triggering
        setShowContent(prev => prev = !prev);
    };

    return (
        <div
            className="h-[640px] p-4 rounded-2xl overflow-hidden bg-white flex flex-col justify-between relative cursor-pointer"
        // onClick={() => setShowContent(false)} // Clicking anywhere outside collapses
        >
            {/* Background Image */}
            <Image
                loading="lazy"
                src={data.imgSrc}
                width={638}
                height={640}
                alt={data.title}
                className="rounded-xl brightness-75 absolute top-0 right-0 left-0 z-10 object-cover w-full h-full"
            />

            {/* Title & Arrow */}
            <div className="relative z-20 w-full flex flex-row justify-between">
                <h6 className="text-white font-medium text-base">{data.title}</h6>
                <span className="bg-white rounded-full p-1">
                    <ArrowRight size={16} className="text-gray-600 -rotate-45" />
                </span>
            </div>

            {/* Animated Expand/Shrink Content */}
            <motion.div
                initial={{ height: 0, opacity: 0, transformOrigin: "bottom" }}
                animate={showContent ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{
                    height: { duration: 0.4, ease: "easeOut" },
                    opacity: { duration: 0.2, ease: "easeOut", delay: showContent ? 0 : 0.2 },
                }}
                className="z-30 overflow-hidden w-[95%] mx-auto absolute bottom-4 bg-white p-4 rounded-2xl mt-4 space-y-2"
                // Keeps content anchored at the bottom
                onClick={toggleContent}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex items-center gap-2 pb-2 border-b border-primary">
                        <Image src={assets.building} width={20} height={20} alt={data.contentTitle} />
                        <span className="font-semibold text-lg">{data.contentTitle}</span>
                    </div>
                    <p className="text-gray-800">{data.content}</p>
                </motion.div>
            </motion.div>




            {/* Expand Button */}
            {!showContent && (
                <button
                    className="relative z-20 w-full flex flex-row justify-end"
                    onClick={toggleContent}
                >
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white w-fit rounded-2xl px-4 py-3 flex justify-between items-center mt-4 shadow-md"
                    >
                        <div className="flex items-center gap-2">
                            <Image src={assets.building} width={20} height={20} alt={data.contentTitle} />
                            <span className="font-semibold text-lg">{data.contentTitle}</span>
                        </div>
                    </motion.div>
                </button>
            )}
        </div>
    );
};

export default GalleryCard;
