"use client";

import { Service } from '@/types';
import formatToHyphenated from '@/utils/formatPathName';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ServiceBox: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="h-[520px] rounded-2xl overflow-hidden bg-white flex flex-col justify-between relative">
      <Image
        loading="lazy"
        src={service.imgSrc}
        width={445}
        height={445}
        alt={service.title}
        className="rounded-xl object-cover w-full h-full"
      />
        <motion.div
          className="bg-white w-[95%] mx-auto rounded-md p-5 z-20 flex flex-col justify-between gap-5 mt-4 absolute bottom-3 left-0 right-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Image
              src={service.icon}
              width={20}
              height={20}
              alt={service.title}
            />
            <span className="font-semibold text-lg font-cinzel">{service.cardTitle}</span>
          </div>

          <p className="italic font-normal text-xl font-montserrat">
            {service.description}<Link href={`/services/${formatToHyphenated(service.title)}`} className='font-bold' passHref>...Read More</Link>
          </p>
        </motion.div>
    </div>
  );
};

export default ServiceBox;
