import { Service } from "@/types";
import assets from "./assets";

const services: Service[] = [
    {
        id: "service1",
        title: "Residential Interiors",
        imgSrc: assets.residentialInteriors,
        icon: assets.home,
        description:
            "Transform your living spaces into a reflection of your lifestyle and taste. From cozy, intimate designs to luxurious aesthetics, we craft personalized interiors that turn houses into homes.",
    },
    {
        id: "service2",
        title: "Commercial Spaces",
        imgSrc: assets.commerceSpace,
        icon: assets.building,
        description:
            "Create impactful environments that inspire productivity and reflect your brand identity. Our designs blend functionality and style, tailored for offices, retail, and business spaces.",
    },
    {
        id: "service3",
        title: "Renovation & Remodeling",
        imgSrc: assets.renovationRemodeling,
        icon: assets.factory,
        description:
            "Breathe new life into your spaces with our expert renovation solutions. We revamp outdated interiors with modern aesthetics, innovative design, and meticulous craftsmanship.",
    },
    {
        id: "service4",
        title: "Concept Design",
        imgSrc: assets.conceptDesign,
        icon: assets.sofa,
        description:
            "Bring your ideas to life with visually compelling concepts. We transform your vision into sketches and 3D renders that set the foundation for stunning, functional spaces.",
    },
    {
        id: "service5",
        title: "Signage",
        imgSrc: assets.sinage,
        icon: assets.signboard,
        description:
            "Make a lasting impression with custom signage solutions. We blend design and strategy to create signs that are both functional and visually striking—perfect for any space.",
    },
    {
        id: "service6",
        title: "Laser & CNC Cutting",
        imgSrc: assets.lasercutting,
        icon: assets.laser,
        description:
            "Precision meets creativity with our laser and CNC cutting services. From intricate patterns to bold statements, we bring your designs to life with exceptional accuracy.",
    },
];

export default services;
