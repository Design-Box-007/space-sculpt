'use client'

import assets from '@/data/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BlurrySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { label: "Commercial", src: assets.conceptDesign },
        { label: "Residential", src: assets.residentialInteriors },
        { label: "Custom Furniture & Décor", src: assets.commerceSpace },
        { label: "Concept Design", src: assets.sinage },
        { label: "Renovation & Remodeling", src: assets.lasercutting }
    ];

    return (
        <section className="px-4 overflow-hidden flex flex-col justify-center min-h-[70vh]">
            <h4 className="text-7xl font-medium mb-8">
                Our <span className="text-primary">Creations</span> Speak for Themselves
            </h4>

            {/* Image Container */}
            <section className="flex justify-center items-center relative overflow-hidden rounded-3xl">
                <div className="border-white flex justify-center items-center p-16 border-[3px] border-solid relative w-full h-full">

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
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Clear Centered Image */}
                    <div className="relative w-full h-full z-20 rounded-3xl border-white border-[3px] border-solid">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.6, scale: 0.9 }} // ✅ Scales down instead of up
                                transition={{ duration: 0.6 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={images[currentIndex].src}
                                    alt="gallery-image"
                                    width={1360}
                                    height={500}
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Image Labels as Buttons */}
                        <div className="bg-white py-2 px-5 w-fit absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-[40px] justify-center overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
                            {images.map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 border text-sm flex flex-row items-center gap-2 font-medium rounded-full transition-all duration-300 ${currentIndex === index
                                        ? 'text-primary'
                                        : 'text-black'
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
