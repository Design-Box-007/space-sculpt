import GalleryImages from '@/components/gallery/GalleryImages/GalleryImages'
import assets from '@/data/assets';
import { serviceCardGroups, ServiceCardGroupsType } from '@/data/services';
import formatToHyphenated from '@/utils/formatPathName';
import React from 'react'

export const generateMetadata = async ({ params }: { params: Promise<{ galleryName: string }> }) => {
    // Awaiting the params to resolve the Promise
    const { galleryName } = await params;

    const galleryData = serviceCardGroups.find((cardGroup: ServiceCardGroupsType) => galleryName === formatToHyphenated(cardGroup.title));


    if (!galleryData) {
        return {
            title: "gallery Not Found | Space Sculpt gallery",
            description: "We couldn't find the gallery you're looking for.",
            metadataBase: new URL("https://spacesculpt.ae"),  // Set metadataBase for external URLs
        };
    }

    return {
        title: `${galleryData.title} | Space Sculpt gallery`,
        description: galleryData.title,
        alternates: {
            canonical: `https://spacesculpt.ae/gallery/${galleryName}`,
        },
        openGraph: {
            title: galleryData.title,
            description: galleryData.description,
            url: `https://spacesculpt.ae/gallery/${galleryName}`,
            images: [
                {
                    url: assets.galleryHeroImage2 || 'https://spacesculpt.ae/default-og-image.jpg',
                    alt: galleryData.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: galleryData.title,
            description: galleryData.description,
            images: [assets.galleryHeroImage2 || 'https://spacesculpt.ae/default-og-image.jpg'],
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
        <GalleryImages />
    )
}

export default page