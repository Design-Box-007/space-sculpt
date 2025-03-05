'use client'

import testimonials from '@/data/testimonials'
import { Testimonial } from '@/types';
import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialGrid: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
    return (
        <div className="h-auto lg:min-h-[700px] grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 w-full mt-8 mx-auto">
            {testimonials.map((item: Testimonial, index: number) => (
                <div
                    key={index}
                    className={`p-3 rounded-[28px] row-span-1 flex flex-col items-center ${
                        index === 0 ? "lg:row-span-2 lg:justify-end"
                        : index === 1 ? "lg:row-span-1 lg:justify-start"
                        : index === 2 ? "lg:row-span-2 lg:justify-start"
                        : "lg:row-span-1 lg:justify-end"
                    }`}
                    style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Backdrop blur box fades in */}
                    <motion.div
                        className="bg-[#D8D8D833] backdrop-blur-[30px] p-[18px] rounded-[18px] flex flex-col gap-4 justify-between lg:min-h-[280px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="space-y-4">
                            <FaQuoteRight
                                size={24}
                                className="fill-none stroke-red-500 stroke-[30]"
                            />
                            <p className="text-white text-base md:text-xl lg:text-2xl font-medium italic">
                                {item.testimonial}
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 justify-start items-center">
                            <h4 className="text-white text-[22px] leading-[29px] font-bold">
                                - {item.testimonee}
                            </h4>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="px-4 py-20">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-3/4 flex flex-col justify-between">
                    {/* "What Our Clients" animates from left to right */}
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-medium"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                    >
                        What <span className="text-primary">Our Clients</span>
                    </motion.h1>
                    {/* "Say About Us" animates from left to right with a slight delay */}
                    <motion.h3
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-8 lg:leading-[108px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Say About Us
                    </motion.h3>
                </div>
                <div className="w-full lg:w-1/4 flex items-end">
                    {/* Paragraph animates from right to left */}
                    <motion.p
                        className="text-xl font-normal"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Hear from our satisfied clients who turned their spaces into stunning works of art with Space Sculpt’s expert touch
                    </motion.p>
                </div>
            </div>
            <TestimonialGrid testimonials={testimonials} />
        </section>
    );
};

export default Testimonials;
