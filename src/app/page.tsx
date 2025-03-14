import Home from '@/components/home/Home'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
     <Head>
        <title>Space Sculpt | Elevate Your Interior Design</title>
        <meta name="description" content="Space Sculpt transforms spaces with modern, stylish, and functional interior designs. Explore our work and get inspired!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://spacesculpt.ae/" />
      </Head>
    <Home />
    </>
  )
}

export default page