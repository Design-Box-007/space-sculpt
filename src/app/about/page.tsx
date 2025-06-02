import AboutUs from '@/components/aboutus/AboutUs'
import { metadata_about } from '@/data/siteMetadata'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = metadata_about

const page = () => {
    return (
        <>
            <AboutUs />
        </>
    )
}

export default page