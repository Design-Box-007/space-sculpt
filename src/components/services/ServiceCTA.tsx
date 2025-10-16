"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ServiceCTA = () => {
  return (
    <section className="relative overflow-hidden px-4 bg-white">
      <div className="relative z-10 bg-primary text-white font-medium px-6 py-12 rounded-[40px] space-y-8">
        <h1 className="text-xl md:text-3xl lg:text-5xl leading-tight font-cinzel">
          Where Vision Becomes Reality
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-montserrat">
          We bring creativity, precision, and craftsmanship together to
          transform your spaces into personalized works of art.
        </p>
        <Link href="/contact" id="contact">
          <button className="flex gap-2 mt-10 w-full bg-white flex-row-reverse items-center justify-between py-4 sm:py-6 px-6 sm:px-10 rounded-full">
            <span className="bg-primary rounded-full p-2 sm:p-3">
              <ArrowRight size={40} className="text-white -rotate-45" />
            </span>
            <span className="text-primary  md:text-2xl lg:text-4xl font-medium font-montserrat">
              Get Free Consultation
            </span>
          </button>
        </Link>
      </div>
      <motion.div
        className="absolute top-0 right-0 h-full w-full bg-white z-20"
        initial={{ width: "100%" }}
        whileInView={{ width: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
};

export default ServiceCTA;
