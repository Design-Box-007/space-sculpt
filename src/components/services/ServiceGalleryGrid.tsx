"use client";

import { Gallery } from "@/types";
import React from "react";
import GalleryCard from "../comman/GalleryCard";
import gallery from "@/data/gallery";
import { motion } from "framer-motion";

const ServiceGalleryGrid = () => {
  return (
    <section className="px-4 space-y-6 sm:space-y-8">
      <motion.h1
        className="text-2xl md:text-7xl leading-tight sm:leading-[1.2] text-secondary font-medium font-cinzel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="inline-block"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {"Where Design Meets"}
        </motion.span>
         {" "}
        <motion.span
          className="inline-block text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Distinction
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-[1.4] font-montserrat italic"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We create thoughtful, personalized designs that reflect your vision
        while maximizing style and comfort.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {gallery.map((item: Gallery, index: number) => (
          <GalleryCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ServiceGalleryGrid;
