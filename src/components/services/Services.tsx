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
                heading='Crafted for Those Who Value <span class="text-primary">Design Excellence</span>'
                content='Explore a range of innovative services that merge creativity, precision,<br/> and craftsmanship to transform your space.'
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

