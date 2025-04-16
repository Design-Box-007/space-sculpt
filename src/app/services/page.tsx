import Services from '@/components/services/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Our Services | Space Sculpt',
    description: 'Discover our professional interior design services, including space planning, custom decor, and renovation solutions.',
    robots: 'index, follow',
    alternates: {
        canonical: 'http://spacesculpt.ae/services',
    },
};

const Page = () => {
    return <Services />;
};

export default Page;
