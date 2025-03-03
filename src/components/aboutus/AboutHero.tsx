'use client'

import React from 'react'
import assets from '@/data/assets'
import Image from 'next/image'
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (

        <section className='text-white w-full flex flex-col justify-end items-center relative rounded-xl overflow-hidden h-screen'>
            <Image
                loading='eager'
                src={assets.aboutHero}
                width={1153}
                height={641}
                alt="bg"
                className="-z-10 h-full rounded-3xl absolute w-full brightness-[0.7] top-0 right-0 left-0 object-cover"
            />
            <motion.h1
                className='font-bold text-[22vw] leading-[.7] text-center'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                About Us
            </motion.h1>
        </section>

    )
}

export default AboutHero
