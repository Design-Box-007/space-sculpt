'use client'

import GalleryCard from '@/components/comman/GalleryCard';
import gallery from '@/data/gallery';
import { serviceCardGroups, ServiceCardGroupsType } from '@/data/services';
import { Gallery } from '@/types';
import formatToHyphenated from '@/utils/formatPathName';
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import GalleryHero from '../GalleryHero';

const GalleryImages = () => {

    const params = useParams();
    const router = useRouter();


    const { galleryName } = params;

    const galleryGroup = serviceCardGroups.find((cardGroup: ServiceCardGroupsType) => galleryName === formatToHyphenated(cardGroup.title));

    console.log(galleryGroup)

    if (!galleryGroup) return <>Gallery Group Not Found</>

    const galleryImages: Gallery[] = gallery.filter((item: Gallery) => item.serviceGroupId == galleryGroup?.id)

    console.log(galleryImages)

    if (!galleryImages) return <>Gallery Group Contains 0 Images</>

    console.log(galleryImages);

    return (
        <main className='p-[10px] md:p-3 lg:p-5'>
            <GalleryHero />
            <section className='space-y-4 mt-5'>
                <button onClick={() => router.back()} className='bg-primary text-white px-4 py-2 rounded-xl flex justify-between items-center gap-2'>
                    <FaArrowLeft />
                    <span>Go Back</span>
                </button>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {galleryImages.map((item: Gallery, index: number) => (
                        <GalleryCard data={item} key={index} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default GalleryImages