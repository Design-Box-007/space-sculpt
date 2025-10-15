"use client";

import React from "react";
import assets from "@/data/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="text-white w-full flex flex-col justify-end items-center relative rounded-xl overflow-hidden h-[500px]">
      <Image
        loading="eager"
        src={assets.aboutHero}
        width={1153}
        height={641}
        alt="Modern interior design featuring red and white color tones, with a red sofa, matching carpet, indoor plant in a pot, wall-mounted artwork, and contemporary steps leading to an upper level"
        className="absolute -z-10 object-cover object-center w-full h-full rounded-3xl  brightness-[0.7] top-0 right-0 left-0 "
      />
      <motion.h1
        className="font-semibold text-3xl md:text-4xl lg:text-7xl text-center mb-[150px] font-cinzel"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        From concept to creation — crafting spaces across the UAE.
      </motion.h1>
    </section>
  );
};

export default AboutHero;
