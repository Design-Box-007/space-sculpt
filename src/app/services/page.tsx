import Services from '@/components/services/Services';
import { metadata_services } from '@/data/siteMetadata';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = metadata_services

const Page = () => {
    return <Services />;
};

export default Page;
