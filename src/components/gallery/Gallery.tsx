import React from 'react'
import Contact from '../comman/Contact'
import Testimonials from '../home/Testimonials'
import GalleryHero from './GalleryHero'
import GalleryMainSection from './GalleryMainSection'

const Gallery = () => {
    return (
        <section className='p-[10px] md:p-3 lg:p-5'>
            <GalleryHero />
            <GalleryMainSection />
            <Testimonials />
            <Contact />
        </section>
    )
}

export default Gallery