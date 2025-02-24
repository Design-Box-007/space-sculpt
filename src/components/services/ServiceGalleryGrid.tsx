import { Gallery } from '@/types'
import React from 'react'
import GalleryCard from '../comman/GalleryCard'
import gallery from '@/data/gallery'

const ServiceGalleryGrid = () => {
    return (
        <section className='px-4 py-20 space-y-5'>
            <h1 className='text-[120px] leading-[162px] text-secondary font-medium'>
                {"Where Design Meets "} <br />
                <span className='text-primary'>Distinction</span>
            </h1>
            <p className='text-[32px] leading-[43px] font-medium'>
                We create thoughtful, personalized designs that reflect your vision while maximizing style and comfort.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    gallery.map((item: Gallery, index: number) => (
                        <GalleryCard data={item} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default ServiceGalleryGrid

