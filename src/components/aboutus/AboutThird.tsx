"use client";

import { aboutUsPageData } from "@/data/comman";
import { AboutUsPageData } from "@/types";
import React from "react";
import { motion } from "framer-motion";

const gridVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const CardGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Adjusted for mobile
    >
      {aboutUsPageData.map((data: AboutUsPageData, index: number) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className={`p-5 min-h-[200px] rounded-lg border flex flex-col gap-10 ${
            index % 2 === 0
              ? "bg-transparent border-[#E1E1E1]"
              : "bg-primary border-primary"
          }`}
        >
          <h4
            className={`text-3xl font-medium font-cinzel ${
              index % 2 === 0 ? "text-secondary" : "text-white"
            }`}
          >
            {data.title}
          </h4>
          <p
            className={`text-lg font-normal font-montserrat ${
              index % 2 === 0 ? "text-secondary" : "text-white"
            }`}
          >
            {data.content}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const AboutThird = () => {
  return (
    <section className="px-6 space-y-3">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl text-center text-secondary font-medium font-cinzel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Our
        </motion.span>{" "}
        <motion.span
          className="inline-block text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Purpose
        </motion.span>{" "}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          and
        </motion.span>{" "}
        <motion.span
          className="inline-block text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Promise
        </motion.span>
      </motion.h1>

      {/* Description Paragraph */}
      <motion.p
        className="text-lg md:text-xl lg:text-2xl font-normal text-center font-montserrat"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {
          "Driven by creativity, guided by precision our mission, vision, and values shape every space we design, while our commitment to excellence sets us apart."
        }
      </motion.p>

      {/* Card Grid */}
      <CardGrid />
    </section>
  );
};

export default AboutThird;
