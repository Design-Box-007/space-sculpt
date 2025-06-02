import ContactPage from '@/components/contact/ContactPage';
import { metadata_contact } from '@/data/siteMetadata';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = metadata_contact

const Page = () => {
    return <ContactPage />;
};

export default Page;
