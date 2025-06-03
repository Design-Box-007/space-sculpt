import { Service as ServiceType } from "@/types";
import formatToHyphenated from "./formatPathName";
import services from "@/data/services";

export const getServiceSchemaMarkup = (serviceName: string) => {
  const ServiceData = services.find(
    (Service: ServiceType) => serviceName === formatToHyphenated(Service.title)
  );
  if (!ServiceData) return null;

  const { metatags, imgSrc } = ServiceData;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metatags.title,
    description: metatags.description,
    image: `https://spacesculpt.ae${imgSrc}` || "https://spacesculpt.ae/default-service-image.jpg",
    url: `https://spacesculpt.ae/services/${formatToHyphenated(ServiceData.title)}`,
    provider: {
      "@type": "Organization",
      name: "Space Sculpt",
      logo: {
        "@type": "ImageObject",
        url: "https://spacesculpt.ae/logo.svg",
      },
    },
  };

  return JSON.stringify(structuredData);
};