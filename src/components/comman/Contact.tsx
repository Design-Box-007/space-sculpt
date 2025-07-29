'use client'


import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <section id='contact' className='px-4 py-5 space-y-[56px]'>

            <motion.h1
                className="text-6xl text-secondary font-medium"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                Get in Touch {"with Dubai’s Leading"} <br />
                <span className="text-primary">Interior</span> Fit Out Company
            </motion.h1>

            <ContactForm />
        </section>
    )
}

export default Contact