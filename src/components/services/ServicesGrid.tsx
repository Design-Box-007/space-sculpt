import React from 'react'
import services from '@/data/services'
import { Service } from '@/types'
import ServiceBox from './ServiceBox'


const ServicesGrid = () => {
    return (
        <section className="px-4 py-16 sm:py-20 space-y-10 sm:space-y-14">
        <div className="space-y-4 sm:space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
                Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed sm:leading-[43px] font-medium">
                From bespoke interiors to precision-cut designs, our comprehensive services are tailored to elevate every space with style, function, and innovation.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service: Service, index: number) => (
                <ServiceBox key={index} service={service} />
            ))}
        </div>
    </section>
    
    )
}

export default ServicesGrid