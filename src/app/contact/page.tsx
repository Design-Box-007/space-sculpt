import ContactPage from '@/components/contact/ContactPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Space Sculpt | Get in Touch',
    description: 'Reach out to Space Sculpt for inquiries, consultations, and collaborations. We’d love to hear from you!',
    robots: 'index, follow',
    alternates: {
        canonical: 'http://spacesculpt.ae/contact',
    },
};

const Page = () => {
    return <ContactPage />;
};

export default Page;
