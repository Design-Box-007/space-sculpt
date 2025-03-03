'use client'


import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <section id='contact' className='px-4 py-5 space-y-[56px]'>

            <motion.h1
                className="text-[48px] leading-[64px] sm:text-[64px] sm:leading-[84px] md:text-[80px] md:leading-[108px] lg:text-[96px] lg:leading-[130px] xl:text-[120px] xl:leading-[162px] text-secondary font-medium"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                {"Let's Design Your"} <br />
                <span className="text-primary">Dream Space</span> Today
            </motion.h1>

            <ContactForm />
        </section>
    )
}

export default Contact