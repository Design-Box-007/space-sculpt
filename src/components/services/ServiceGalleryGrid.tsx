import { Gallery } from '@/types'
import React from 'react'
import GalleryCard from '../comman/GalleryCard'
import gallery from '@/data/gallery'

const ServiceGalleryGrid = () => {
    return (
        <section className="px-4 py-16 sm:py-20 space-y-6 sm:space-y-8 lg:space-y-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight sm:leading-[1.2] text-secondary font-medium">
                {"Where Design Meets"} <br />
                <span className="text-primary">Distinction</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-[1.4] font-medium">
                We create thoughtful, personalized designs that reflect your vision while maximizing style and comfort.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {gallery.map((item: Gallery, index: number) => (
                    <GalleryCard data={item} key={index} />
                ))}
            </div>
        </section>

    )
}

export default ServiceGalleryGrid

