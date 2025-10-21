"use client";

import assets from "@/data/assets";
import Image from "next/image";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BlurrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Each item can have either an image or a video
  const media = [
    {
      label: "Aluminium Works",
      src: "/videos/aluminium-works.mp4",
      type: "video",
    },
    {
      label: "Build and Design",
      src: "/videos/build-and-design.mp4",
      type: "video",
    },
    { label: "Glass works", src: "/videos/glassworks.mp4", type: "video" },
    {
      label: "Wood Working",
      src: "/videos/woodworking.mp4",
      type: "video",
    },
  ];

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col justify-center min-h-[50vh]">
        {/* Title */}
        <motion.h4 className="heading capitalize mb-5 text-center">
          Explore Our <span className="text-primary">Interior </span> Fit Out
          Projects – Inspiring Designs Across Dubai
        </motion.h4>

        {/* Image/Video Container */}
        <section className="flex w-full h-full justify-center border border-solid items-center relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
          <div className="border-white flex justify-center items-center p-6 sm:p-10 md:p-12 lg:p-16 border-[3px] border-solid relative w-full h-full">
            {/* Blurred Background (image or video) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute z-10 w-full h-full"
              >
                {media[currentIndex].type === "video" ? (
                  <video
                    src={media[currentIndex].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover blur-lg"
                  />
                ) : (
                  <Image
                    src={media[currentIndex].src}
                    alt="gallery-image"
                    width={1360}
                    height={500}
                    className="w-full h-full object-cover blur-lg"
                    loading="lazy"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Main Foreground Media */}
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
                  {media[currentIndex].type === "video" ? (
                    <video
                      src={media[currentIndex].src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full md:h-[400px] h-[300px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                    />
                  ) : (
                    <Image
                      src={media[currentIndex].src}
                      alt="gallery-image"
                      width={500}
                      height={500}
                      className="w-full md:h-[400px] h-[300px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                      loading="lazy"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Buttons (Categories) */}
              <div className="bg-white py-2 px-3 sm:px-5 w-full max-w-[90%] absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 rounded-full justify-center overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
                {media.map((item, index) => (
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
    </>
  );
};

export default BlurrySlider;
