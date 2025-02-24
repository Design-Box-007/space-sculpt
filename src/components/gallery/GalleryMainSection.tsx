'use client'

import React, { useState } from 'react';
import gallery from '@/data/gallery';
import services from '@/data/services';
import GalleryCard from '../comman/GalleryCard';
import { Gallery, Service } from '@/types';

const GalleryMainSection = () => {
    const [selectedService, setSelectedService] = useState(services[0].id);

    // Filter gallery items based on selected service
    const filteredGallery = selectedService === 'all' ? gallery : gallery.filter(item => item.serviceId === selectedService);

    return (
        <section className='px-4'>
            <h1 className='text-[120px] leading-[162px] text-secondary font-medium text-center my-12'>
                {"Explore the"} <span className='text-primary '>Art of <br />Space</span> Transformation
            </h1>

            {/* Filter Component */}
            <div className='flex gap-4 justify-center mt-8 mb-8'>
                <button
                    className={`px-4 py-2 border rounded-lg ${selectedService === 'all' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedService('all')}
                >
                    All Projects
                </button>
                {services.map((service: Service, index: number) => (
                    <button
                        key={index}
                        className={`px-4 py-2 border rounded-lg ${selectedService === service.id ? 'bg-primary text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedService(service.id)}
                    >
                        {service.title}
                    </button>
                ))}
            </div>

            {/* Gallery Component */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {filteredGallery.map((item: Gallery, index: number) => (
                    <GalleryCard data={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default GalleryMainSection;