import testimonials from '@/data/testimonials'
import { Testimonial } from '@/types';
import Image from 'next/image';
import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'


const TestimonialGrid: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {

    return (
        <div className="h-auto lg:min-h-[700px] grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 w-full mt-8 mx-auto">
            {testimonials.map((item: Testimonial, index: number) => (
                <div
                    key={index}
                    className={`p-3 rounded-[28px] row-span-1 flex flex-col items-center ${index === 0 ? "lg:row-span-2 lg:justify-end"
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

                    <div className='bg-white p-[18px] rounded-[18px] flex flex-col justify-between lg:min-h-[280px]'>
                        <div className='space-y-4'>
                            <FaQuoteRight
                                size={24}
                                className="fill-none stroke-red-500 stroke-[30]"
                            />

                            <p className="text-gray-700 text-2xl font-medium italic">{item.testimonial}</p>
                        </div>

                        <div className='flex flex-row gap-4 justify-start items-center'>
                            <Image
                                src={item.imgSrc}
                                alt={item.testimonee}
                                width={32}
                                height={32}
                                className="rounded-full object-cover"
                            />
                            <h4 className="text-primary text-[22px] leading-[29px] font-bold">{item.testimonee}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Testimonials = () => {

    return (
        <section className='px-4'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-3/4 flex flex-col justify-between'>
                    <h1 className='text-8xl text-black font-medium'>
                        What <span className='text-primary'>Our Clients</span>
                    </h1>

                    <h3 className='text-[80px] leading-[108px]'>
                        Say About Us
                    </h3>
                </div>
                <div className='w-full lg:w-1/4 flex items-end'>
                    <p className='text-xl font-normal'>
                        Hear from our satisfied clients who turned their spaces into stunning works of art with Space Sculpt’s expert touch
                    </p>
                </div>
            </div>
            <TestimonialGrid testimonials={testimonials} />
        </section>
    )
}

export default Testimonials

