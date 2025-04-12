import AboutUs from '@/components/aboutus/AboutUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About Space Sculpt | Expert Interior Designers',
    description: 'Learn about Space Sculpt - a team of professional interior designers dedicated to creating stunning, functional, and modern spaces.',
    robots: 'index, follow',
    alternates: {
        canonical: 'http://spacesculpt.ae/about',
    },
}

const page = () => {
    return (
        <>
            <AboutUs />
        </>
    )
}

export default page