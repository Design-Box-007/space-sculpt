import Gallery from '@/components/gallery/Gallery';
import { metadata_gallery } from '@/data/siteMetadata';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = metadata_gallery

const Page = () => {
    return <Gallery />;
};

export default Page;
