import React from 'react'
import Hero from '../comman/Hero'
import assets from '@/data/assets'
import ServicesGrid from './ServicesGrid'
import ServiceGalleryGrid from './ServiceGalleryGrid'
import ServiceCTA from './ServiceCTA'


const Services = () => {
    return (
        <section className='p-[10px] md:p-3 lg:p-5'>
            <Hero
                heading='Transforming Dubai Interiors with <span class="text-primary">Design Excellence</span>'
                content='Discover bespoke interior fit out solutions that blend creativity, precision, and expert craftsmanship. From residential designs to commercial interiors, we bring your vision to life with style and functionality.'
                ctaLink='/contact'
                // ctaName='Get Free Consultations'
                bgImage={assets.servicesHero}
                ctaStatus={true}
            />
            <ServicesGrid />
            <ServiceGalleryGrid />
            <ServiceCTA />
        </section>
    )
}

export default Services

