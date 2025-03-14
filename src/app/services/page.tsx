import Services from '@/components/services/Services'
import Head from 'next/head'
import React from 'react'


const page = () => {
    return (
        <>
            <Head>
                <title>Our Services | Space Sculpt</title>
                <meta name="description" content="Discover our professional interior design services, including space planning, custom decor, and renovation solutions." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://spacesculpt.ae/services" />
            </Head>
            <Services />
        </>
    )
}

export default page