import Service from '@/components/service/Service'
import { services }  from '@/data/services';
import formatToHyphenated from '@/utils/formatPathName';
import React from 'react'

export const generateMetadata = async ({ params }: { params: Promise<{ serviceName: string }> }) => {
    // Awaiting the params to resolve the Promise
    const { serviceName } = await params;

    const serviceData = services.find(service =>
        serviceName === formatToHyphenated(service.title)
    );

    if (!serviceData) {
        return {
            title: "service Not Found | Space Sculpt service",
            description: "We couldn't find the service you're looking for.",
            metadataBase: new URL("https://spacesculpt.ae"),  // Set metadataBase for external URLs
        };
    }

    return {
        title: `${serviceData.metatags.title} | Space Sculpt service`,
        description: serviceData.metatags.description,
        alternates: {
            canonical: `https://spacesculpt.ae/services/${serviceName}`,
        },
        openGraph: {
            title: serviceData.title,
            description: serviceData.description,
            url: `https://spacesculpt.ae/services/${serviceName}`,
            images: [
                {
                    url: serviceData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg',
                    alt: serviceData.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: serviceData.metatags.title,
            description: serviceData.metatags.description,
            images: [serviceData.imgSrc || 'https://spacesculpt.ae/default-og-image.jpg'],
        },
        robots: {
            index: true,
            follow: true,
        },
        metadataBase: new URL("https://spacesculpt.ae"),  // Set metadataBase for external URLs
    };
};


const page = () => {

    return (
        <Service />
    )
}

export default page