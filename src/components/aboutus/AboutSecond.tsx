"use client";

import assets from "@/data/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutSecond = () => {
  return (
    <section className="px-4 space-y-5 md:space-y-7">
      {/* Title */}
      {/* <motion.h2
        className="font-bold text-4xl md:text-6xl leading-tight text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Crafting <span className="text-primary">Spaces</span>, Shaping{" "}
        <span className="text-primary">Experiences</span>
      </motion.h2> */}

      {/* Description */}
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {
          "At Space Sculpt, we blend creativity with precision to transform spaces into timeless works of art. Every detail reflects our passion for design and commitment to excellence. We proudly offer full-service interior design solutions across all seven Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — delivering bespoke interiors tailored to your vision."
        }
      </motion.p>

      {/* Divider with left-to-right reveal */}
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Image
          loading="lazy"
          src={assets.divider}
          alt="divider"
          width={1360}
          height={1}
          className="w-full"
        />
      </motion.div>

      {/* About Section */}
      <div className="relative rounded-lg overflow-hidden min-h-[250px] sm:min-h-[400px] md:min-h-[500px] flex items-end p-5">
        {/* Background Image (no animation) */}
        <Image
          loading="lazy"
          src={assets.about2}
          alt="Rich and Modern red background that is used as background to place the text over it."
          width={1360}
          height={796}
          className="w-full h-full absolute top-0 left-0 right-0 z-10 object-cover object-center"
        />

        {/* Content Box */}
        <div className="relative z-20 bg-white p-4 md:p-[18px] rounded-lg md:rounded-[18px] space-y-3 md:space-y-5 lg:min-h-[280px] w-full">
          {/* "Our Journey of Design Excellence" (top to bottom) */}
          <motion.h2
            className="font-bold text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-cinzel"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Our Journey of Design Excellence
          </motion.h2>

          {/* Founded paragraph (fade in only) */}
          <motion.p
            className="font-normal text-lg md:text-[22px] md:leading-[29px] italic description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {
              "Founded on the belief that every space has a story to tell, Space Sculpt brings visionary design concepts to life with precision and creativity. Our mission is to create environments that inspire, captivate, and enhance everyday living. With years of experience in interior innovation, we craft spaces that blend functionality with aesthetic brilliance."
            }
          </motion.p>

          {/* Quote (bottom to top) */}
          <motion.p
            className="text-primary italic description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {
              "“Our approach is always client-centered—your vision is our blueprint”"
            }
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
