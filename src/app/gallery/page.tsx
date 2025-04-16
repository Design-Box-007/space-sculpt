import Gallery from '@/components/gallery/Gallery';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Gallery | Space Sculpt Interior Designs',
    description: 'Explore our portfolio of beautifully designed interiors, from modern homes to elegant office spaces.',
    robots: 'index, follow',
    alternates: {
        canonical: 'http://spacesculpt.ae/gallery',
    },
};

const Page = () => {
    return <Gallery />;
};

export default Page;
