import Home from '@/components/home/Home'
import { metadata_home } from '@/data/siteMetadata'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = metadata_home

const page = () => {

  return (
    <Home />
  )
}

export default page