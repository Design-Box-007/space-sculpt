"use client";

import assets from "@/data/assets";
import Image from "next/image";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BlurrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { label: "Commercial", src: assets.slider_commercial },
    { label: "Residential", src: assets.slider_residential },
    { label: "Concept Design", src: assets.slider_concept },
    { label: "Renovation & Remodeling", src: assets.slider_rennovation },
    { label: "Laser Cutting", src: assets.slider_laser },
  ];

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col justify-center min-h-[50vh]">
        {/* Title */}
        <motion.h4
          className="text-xl md:text-5xl font-medium mb-6 sm:mb-4 md:text-center capitalize font-cinzel"
          // initial={{ opacity: 1, y: -20 }}
          // // whileInView={{ opacity: 1, y: 0 }}
          // // viewport={{ once: true, amount: 0.5 }}
          // // transition={{ duration: 1 }}
        >
          Explore Our <span className="text-primary">Interior </span> Fit Out
          Projects – Inspiring Designs Across Dubai
        </motion.h4>

        {/* Clickable Content Below Title */}
        {/* <div className="mb-6 flex justify-center">
          <span
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer p-3 shadow-2xl rounded-2xl border-2 text-xl text-primary"
          >
            Click to View Content
          </span>
        </div> */}

        {/* Image Container */}
        <section className="flex w-full h-full justify-center border border-solid items-center relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
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
                  loading="lazy"
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
                    width={500}
                    height={500}
                    className="w-full md:aspect-[21/7] h-full object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Labels as Buttons */}
              <div className="bg-white py-2 px-3 sm:px-5 w-full max-w-[90%] absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 rounded-full justify-start overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
                {images.map((item, index) => (
                  <button
                    key={index}
                    className={`px-3 sm:px-4 py-1 sm:py-2 border text-xs sm:text-sm flex flex-row items-center gap-1 sm:gap-2 font-medium rounded-full transition-all duration-300 ${
                      currentIndex === index ? "text-primary" : "text-black"
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

      {/* Modal for Content / Video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-black text-xl font-bold"
            >
              ×
            </button>

            {/* Replace below with text, image, or video */}
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p className="text-lg mb-4">
              Here you can show project descriptions, images, or videos.
            </p>
            <video
              controls
              className="w-full rounded-md"
              src="/videos/sample.mp4"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BlurrySlider;
