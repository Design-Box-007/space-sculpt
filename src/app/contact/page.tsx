import ContactPage from '@/components/contact/ContactPage'
import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                <title>Contact Space Sculpt | Get in Touch</title>
                <meta name="description" content="Reach out to Space Sculpt for inquiries, consultations, and collaborations. We’d love to hear from you!" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="http://spacesculpt.ae/contact" />
            </Head>
            <ContactPage />
        </>
    )
}

export default page