'use client'

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  heading: string;
  content: string;
  ctaName?: string;
  ctaLink?: string;
  ctaStatus?: boolean;
  bgImage: string;
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC<HeroProps> = ({ heading, content, ctaName, ctaLink, ctaStatus = false, bgImage }) => {
  return (
    <section className="text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden min-h-screen max-[500px]:pt-[100px] p-8 sm:p-6 md:p-10 lg:p-12">
      <Image
        loading="eager"
        src={bgImage}
        width={1153}
        height={641}
        alt="background"
        className="-z-10 h-full rounded-3xl absolute w-full brightness-[0.6] top-0 right-0 left-0 object-cover"
      />

      <div className="text-left flex flex-col gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-medium capitalize"
          dangerouslySetInnerHTML={{ __html: heading }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-sm sm:text-base md:text-lg font-medium text-white"
          dangerouslySetInnerHTML={{ __html: content }}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Conditionally render CTA button */}
        {ctaStatus && ctaName && ctaLink && (
          <a
            href={ctaLink}
            className="flex gap-2 mt-8 sm:mt-6 md:mt-8 lg:mt-12 w-fit bg-white flex-row-reverse items-center text-white p-2 sm:p-3 md:p-4 rounded-full"
          >
            <span className="bg-primary rounded-full p-1 sm:p-2">
              <ArrowRight size={16} className="text-white" />
            </span>
            <span className="text-secondary text-lg sm:text-xl md:text-2xl font-medium">
              {ctaName}
            </span>
          </a>
        )}
      </div>

      {/* <div className="hidden md:block sm:text-base md:text-lg sm:w-[250px] md:w-[300px] lg:w-[331px] text-left font-medium text-white border-b-primary border-b-2 border-solid absolute bottom-4 right-3">
        Commercial Interior
      </div> */}
    </section>
  );
};

export default Hero;
