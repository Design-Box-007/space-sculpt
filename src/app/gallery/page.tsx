import Gallery from '@/components/gallery/Gallery'
import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                <title>Gallery | Space Sculpt Interior Designs</title>
                <meta name="description" content="Explore our portfolio of beautifully designed interiors, from modern homes to elegant office spaces." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://spacesculpt.ae/gallery" />
            </Head>
            <Gallery />
        </>
    )
}

export default page