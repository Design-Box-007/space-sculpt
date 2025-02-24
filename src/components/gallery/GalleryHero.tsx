import assets from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const GalleryHero = () => {
    return (
        <section className='text-bold text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden h-screen p-8'>
            <Image loading='eager' src={assets.galleryHero} width={1153} height={641} alt="bg" className="-z-10 h-full rounded-3xl absolute w-full brightness-[0.7] top-0 right-0 left-0 object-cover" />
            <div className='text-left flex flex-col lg:flex-row items-end gap-4 flex-1'>
                <h1 className='text-[100px] leading-[135px] text-white font-medium'>
                    Explore Our <br />Crafted Creations
                </h1>
                <p className='text-2xl font-medium text-white px-8 flex-1'>
                    A showcase of inspired spaces where design meets craftsmanship. Discover how we bring ideas to life, one detail at a time.
                </p>
            </div>

        </section>
    )
}

export default GalleryHero