"use client";

import { services } from "@/data/services";
import { Service } from "@/types";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import formatToHyphenated from "@/utils/formatPathName";

const ServiceCard: React.FC<
  Pick<Service, "imgSrc" | "title" | "icon" | "cardTitle">
> = ({ imgSrc, title, cardTitle, icon }) => {
  return (
    <div className="h-fit rounded-2xl overflow-hidden bg-white flex flex-col justify-between relative">
      <Image
        loading="lazy"
        src={imgSrc}
        width={445}
        height={445}
        alt={title}
        className="rounded-xl object-cover w-full aspect-[4/3]"
      />

      <Link href={`/services/${formatToHyphenated(cardTitle)}`} passHref>
        <motion.div
          className="bg-white w-[95%] mx-auto rounded-full px-4 py-3 z-20 flex justify-between items-center mt-4 absolute bottom-3 left-0 right-0"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-2">
            <Image src={icon} width={20} height={20} alt={title} />
            <span className="font-semibold text-lg">{title}</span>
          </div>
          <ArrowRightCircle className="text-primary w-6 h-6" />
        </motion.div>
      </Link>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <section className="px-4">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        What We Offer
      </motion.h1>
      <motion.h5
        className="text-xl md:text-2xl lg:text-[30px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] text-gray-600 text-left mt-2 font-cinzel italic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Interior Fit Out & Design Services in Dubai –{" "}
        <span className="text-primary">Customized Solutions</span>
      </motion.h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {services.map((project: Service, index: number) => (
          <ServiceCard
            icon={project.icon}
            imgSrc={project.imgSrc}
            key={index}
            title={project.cardTitle}
            cardTitle={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
