// app/services/[serviceName]/page.tsx

import Service from '@/components/service/Service';
import { getServiceSchemaMarkup } from '@/utils/serviceSchema';
import React from 'react';

interface PageProps {
    params: {
        serviceName: string;
    };
}

const page: React.FC<PageProps> = async ({ params }) => {
    const { serviceName } = await params;

    const schemaMarkup = getServiceSchemaMarkup(serviceName);

    return (
        <>
            <Service />
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: schemaMarkup }}
                />
            )}
        </>
    );
};

export default page;


