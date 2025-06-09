"use client";

import React from 'react';
import { services }  from '@/data/services';
import { Service } from '@/types';
import ServiceBox from './ServiceBox';
import { motion } from 'framer-motion';

const ServicesGrid = () => {
  return (
    <section className="px-4 py-16 sm:py-20 space-y-10 sm:space-y-14">
      <div className="space-y-4 sm:space-y-5">
        <motion.h2
          className="text-5xl sm:text-6xl font-medium"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Interior Fit Out Services by Dubai’s Best Interior Design Company
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-[43px] font-normal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Space Sculpt, we provide expert interior fit out services in Dubai, delivering creative, functional, and high-quality design solutions. Recognized as one of the <b>best interior design companies in Dubai</b>, we specialize in <b>residential interiors, commercial interior design, renovation and remodeling, concept development, custom signage,</b> and <b>laser & CNC cutting</b>. Our work blends innovation with craftsmanship to transform spaces that reflect your lifestyle or brand identity
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service: Service, index: number) => (
          <ServiceBox key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
