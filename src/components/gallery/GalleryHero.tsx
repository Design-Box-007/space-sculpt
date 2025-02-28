import assets from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const GalleryHero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-end items-end p-6 sm:p-8 text-white rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
                loading="eager"
                src={assets.galleryHero}
                width={1153}
                height={641}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.7] -z-10"
            />

            {/* Content Container */}
            <div className="text-left flex flex-col items-start min-[1440px]:flex-row min-[1440px]:items-end gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight font-medium lg:flex-1">
                    Explore Our <br /> Crafted Creations
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-medium lg:px-4 sm:px-8 lg:flex-1">
                    A showcase of inspired spaces where design meets craftsmanship. Discover how we bring ideas to life, one detail at a time.
                </p>
            </div>
        </section>

    )
}

export default GalleryHero