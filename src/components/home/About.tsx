'use client'

import assets from '@/data/assets'
import { ArrowRight, InfoIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const aboutUsVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const headingVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const paragraphVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const learnMoreVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section className="space-y-4 py-5 px-4 sm:py-6 sm:px-6 md:py-8 md:px-10 lg:py-10 lg:px-12">
      <motion.div
        className="text-lg sm:text-xl font-medium text-secondary w-full flex flex-row justify-between"
        variants={aboutUsVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p>About us</p>
        <InfoIcon size={20} color="#D72638" />
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-2">
        <motion.h1
          className="font-medium text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[50px] sm:leading-[65px] md:leading-[80px] lg:leading-[94.1px] flex-1"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Turning Vision into Reality with Expert Craftsmanship
        </motion.h1>
        <div className="flex flex-col gap-2 justify-around flex-1">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-normal text-secondary"
            variants={paragraphVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {"We blend creativity with functionality to craft interiors that reflect elegance and comfort. Whether it's a dream home, a luxury office, or a stylish commercial space, our expert designers bring your vision to life with precision and artistry."}
          </motion.p>
          <motion.div
            className="flex flex-row justify-between p-3 sm:p-4 border-primary border-solid border rounded-full"
            variants={learnMoreVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-sm sm:text-base md:text-lg">Learn More</p>
            <span className="bg-primary rounded-full p-1 sm:p-2">
              <ArrowRight size={14} className="text-white" />
            </span>
          </motion.div>
        </div>
      </div>
      {/* Image Reveal Animation using an overlay */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        <Image 
          loading="lazy" 
          src={assets.HomeAboutImage} 
          alt="about" 
          width={961} 
          height={641} 
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-full bg-white"
          initial={{ width: "100%" }}
          whileInView={{ width: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </section>
  )
}

export default About
