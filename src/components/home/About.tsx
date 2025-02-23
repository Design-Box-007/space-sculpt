import assets from '@/data/assets'
import { ArrowRight, InfoIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className="space-y-4 py-5 px-4">
            <div className='text-xl font-medium text-secondary w-full flex flex-row justify-between'>
                <p>About us</p>
                <InfoIcon size={24} color='#D72638' />
            </div>
            <div className='flex flex-col lg:flex-row gap-2'>
                <h1 className='font-medium text-[70px] leading-[94.1px] flex-1' >
                    Turning Vision into Reality with Expert Craftsmanship
                </h1>
                <div className='flex flex-col gap-2 justify-around flex-1'>
                    <p className='text-2xl font-normal text-secondary'>{"We blend creativity with functionality to craft interiors that reflect elegance and comfort. Whether it's a dream home, a luxury office, or a stylish commercial space, our expert designers bring your vision to life with precision and artistry."}</p>
                    <div className='flex flex-row justify-between p-4 border-primary border-solid border rounded-full'>
                        <p>Learn More</p>
                        <span className='bg-primary rounded-full p-1'>
                            <ArrowRight size={16} className='text-white' />
                        </span>
                    </div>
                </div>
            </div>
            <Image src={assets.HomeAboutImage} alt='about' width={961} height={641} className='w-full h-[500px] rounded-2xl object-cover' />
        </section>
    )
}

export default About