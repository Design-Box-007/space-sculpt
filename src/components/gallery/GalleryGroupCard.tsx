import { ServiceCardGroupsType } from '@/data/services'
import formatToHyphenated from '@/utils/formatPathName'
import Link from 'next/link'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const GalleryGroupCard: React.FC<{ card: ServiceCardGroupsType }> = ({ card }) => {
    return (
        <div className='space-y-5 rounded-lg shadow-xl px-4 py-6 border-primary border-solid border'>
            <div className='flex justify-between items-center'>
                <FaQuoteLeft />
                <Link href={`/gallery/${formatToHyphenated(card.title)}`}>
                    <button className='text-sm md:text-base px-3 py-1 md:px-4 md:py-2 bg-primary border text-white rounded-md hover:bg-white hover:text-primary hover:border-primary transition font-cinzel'>
                        View Images
                    </button>
                </Link>
            </div>
            <div>
                <h4 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 font-cinzel'>
                    {card.title}
                </h4>
                <p className='text-sm md:text-base text-gray-600 mt-1 font-montserrat'>
                    {card.description}
                </p>
            </div>
        </div>
    )
}

export default GalleryGroupCard