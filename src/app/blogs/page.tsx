import Blogs from '@/components/blogs/Blogs'
import React from 'react'
import Head from 'next/head'

const page = () => {
    return (
        <>
            <Head>
                <title>Interior Design Blog | Space Sculpt</title>
                <meta name="description" content="Read expert interior design tips, trends, and ideas from Space Sculpt. Stay updated with the latest in home decor!" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://spacesculpt.ae/blogs" />
            </Head>
            <Blogs />
        </>
    )
}

export default page