'use client'

import { services } from "@/data/services";
import { Service as ServiceType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BLogHeader from "@/components/blog/BlogHeader";
import { getServiceSchemaMarkup } from "@/utils/serviceSchema";
import ServiceCTA from "../services/ServiceCTA";

const componentMap = {
  Service1: dynamic(() => import("@/data/Services/Service1")),
  Service2: dynamic(() => import("@/data/Services/Service2")),
  Service3: dynamic(() => import("@/data/Services/Service3")),
  Service4: dynamic(() => import("@/data/Services/Service4")),
  Service5: dynamic(() => import("@/data/Services/Service5")),
  Service6: dynamic(() => import("@/data/Services/Service6")),
};


const Service = () => {
  const { serviceName } = useParams();

  const ServiceData = services.find(
    (Service: ServiceType) => serviceName === formatToHyphenated(Service.title)
  );

  if (!ServiceData) return <>Service NOT FOUND</>;

  const { metatags, title, imgSrc } = ServiceData;

  const ServiceComponent = componentMap[ServiceData.component as keyof typeof componentMap];

  if (!ServiceComponent) return <>Service NOT FOUND</>;

  const schemaMarkup = getServiceSchemaMarkup(serviceName as string);

  return (
    <section className="p-[10px] md:p-3 lg:p-5 font-poppins mt-[100px] space-y-10">
      <BLogHeader title={title} imgAlt={metatags.imageAlts[0]} imgSrc={imgSrc} />
      <Suspense fallback={<p>Loading Service...</p>}>
        <ServiceComponent />
      </Suspense>
      <ServiceCTA/>
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      )}
    </section>
  );
};

export default Service;
