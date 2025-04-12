'use client'

import assets from '@/data/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const BlurrySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { label: "Commercial", src: assets.slider_commercial },
        { label: "Residential", src: assets.slider_residential },
        { label: "Concept Design", src: assets.slider_concept },
        { label: "Renovation & Remodeling", src: assets.slider_rennovation },
        { label: "Laser Cutting", src: assets.slider_laser },
    ];

    return (
        <section className="px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col justify-center min-h-[50vh]">

            <motion.h4
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 sm:mb-8 text-center capitalize md:text-left"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >

                Explore Our <span className="text-primary">Interior </span> Fit Out Projects – Inspiring Designs Across Dubai
            </motion.h4>


            {/* Image Container */}
            <section className="flex w-full h-full justify-center border border-solid border-primary items-center relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
                <div className="border-white flex justify-center items-center p-6 sm:p-10 md:p-12 lg:p-16 border-[3px] border-solid relative w-full h-full">

                    {/* Blurred Background Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.6, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute z-10 w-full h-full"
                        >
                            <Image
                                src={images[currentIndex].src}
                                alt="gallery-image"
                                width={1360}
                                height={500}
                                className="w-full h-full object-cover blur-lg"
                                loading='lazy'
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Clear Centered Image */}
                    <div className="relative w-full h-full z-20 rounded-xl sm:rounded-2xl md:rounded-3xl border-white border-[3px] border-solid">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.6, scale: 0.9 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={images[currentIndex].src}
                                    alt="gallery-image"
                                    width={1360}
                                    height={500}
                                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                                    loading='lazy'
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Image Labels as Buttons */}
                        <div className="bg-white py-2 px-3 sm:px-5 w-full max-w-[90%] absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 rounded-full justify-start overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
                            {images.map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-3 sm:px-4 py-1 sm:py-2 border text-xs sm:text-sm flex flex-row items-center gap-1 sm:gap-2 font-medium rounded-full transition-all duration-300 ${currentIndex === index ? 'text-primary' : 'text-black'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <FaHome />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default BlurrySlider;
