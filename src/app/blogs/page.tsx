import Blogs from '@/components/blogs/Blogs';
import { metadata_blog } from '@/data/siteMetadata';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = metadata_blog
const Page = () => {
    return <Blogs />;
};

export default Page;
