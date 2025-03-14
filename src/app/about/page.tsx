import AboutUs from '@/components/aboutus/AboutUs'
import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                <title>About Space Sculpt | Expert Interior Designers</title>
                <meta name="description" content="Learn about Space Sculpt - a team of professional interior designers dedicated to creating stunning, functional, and modern spaces." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://spacesculpt.ae/about" />
            </Head>
            <AboutUs />
        </>
    )
}

export default page