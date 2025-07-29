'use client'

// import { InfoIcon } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

const expandVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
}

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const previewText =
    "We believe a space is more than just a structure—it’s a reflection of personality and lifestyle. That’s why we offer comprehensive interior design services in Dubai, covering everything from concept development to execution and project management. Our experienced team works closely with clients to transform their vision into a space that reflects their unique style."
  const fullText =
    "For over years, we’ve delivered high-quality interior solutions across the UAE. Recognized as one of Dubai’s top interior design companies, we craft living spaces that are both functional and visually captivating. With a diverse design portfolio, we tailor every project to suit individual tastes, from minimalist to eclectic. Our approach includes premium materials, custom solutions, and transparent communication throughout the process. We are committed to achieving exceptional results—on time and within budget."

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
        <p className='text-5xl sm:text-6xl'>About us</p>
        {/* <InfoIcon size={20} color="#D72638" /> */}
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-2">
        <motion.h1
          className="font-medium text-[40px] sm:text-[50px] flex-1"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Top solutions for all Interior works for commercial and home spaces.
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
            {previewText}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="text-lg sm:text-xl md:text-2xl font-normal text-secondary overflow-hidden"
                variants={expandVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {fullText}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.span
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm sm:text-base underline cursor-pointer font-medium w-fit mt-2"
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'View Less' : 'View More'}
          </motion.span>
        </div>
      </div>
    </section>
  )
}

export default About
