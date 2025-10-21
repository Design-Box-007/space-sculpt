"use client";

import assets from "@/data/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GalleryHero = () => {
  return (
    <section className="relative w-full h-screen p-6 sm:p-8 text-white rounded-xl overflow-hidden flex flex-col">
      {/* Background Image */}
      <Image
        loading="eager"
        src={assets.galleryHero}
        width={1153}
        height={641}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9] -z-10"
      />
      <div className="flex flex-col flex-1 justify-center items-start gap-4">
        {/* Heading centered */}

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-medium  px-4 sm:px-8 font-cinzel"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore Our Crafted Creations
        </motion.h1>

        {/* Paragraph at bottom */}
        <motion.p
          className="md:text-2xl font-medium text-left mb-8 px-4 sm:px-8 font-montserrat"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A showcase of inspired spaces where design meets craftsmanship.
          Discover how we bring ideas to life, one detail at a time.
        </motion.p>
      </div>
    </section>
  );
};

export default GalleryHero;
