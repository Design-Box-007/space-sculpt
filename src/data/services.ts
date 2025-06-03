import { Service } from "@/types";
import assets from "./assets";

const services: Service[] = [
    {
        id: "Service1",
        title: "Residential Interior Design in Dubai - Luxury Home Interiors by Space Sculpt",
        cardTitle: "Residential Interiors",
        imgSrc: assets.residentialInteriors,
        icon: assets.home,
        description:
            "Transform your living spaces into a reflection of your lifestyle and taste. From cozy, intimate designs to luxurious aesthetics, we craft personalized interiors that turn houses into homes.",
        metatags: {
            title: 'Residential Interior Design in Dubai | Home & Villa Interiors - Space Sculpt',
            description:
                'Looking for luxury residential interior design in Dubai? Space Sculpt transforms villas and apartments into stunning, functional living spaces. Book a free consultation.',
            imageAlts: ['Luxury villa interior design Dubai – Space Sculpt'],
        }
    },
    {
        id: "Service2",
        title: "Commercial Interior Design in Dubai – Elevate Your Business Environment",
        cardTitle: "Commercial Spaces",
        imgSrc: assets.commerceSpace,
        icon: assets.building,
        description:
            "Create impactful environments that inspire productivity and reflect your brand identity. Our designs blend functionality and style, tailored for offices, retail, and business spaces.",
        metatags: {
            title: 'Top Commercial Interior Design Company in Dubai | Space Sculpt',
            description:
                'Discover commercial interior design services in Dubai by Space Sculpt. We design offices, retail stores, restaurants & showrooms tailored to your brand & business goals.',
            imageAlts: ['Modern office interior design in Dubai'],
        }
    },
    {
        id: "Service3",
        title: "Renovation and Remodeling Services in Dubai – Reinvent Your Space with Expert Craftsmanship",
        cardTitle: "Renovation & Remodeling",
        imgSrc: assets.renovationRemodeling,
        icon: assets.factory,
        description:
            "Breathe new life into your spaces with our expert renovation solutions. We revamp outdated interiors with modern aesthetics, innovative design, and meticulous craftsmanship.",
        metatags: {
            title: 'Top Renovation and Remodeling Company in Dubai | Space Sculpt',
            description:
                'Explore expert renovation and remodeling services in Dubai. Space Sculpt transforms homes, villas, offices, and commercial spaces with precision and creativity.',
            imageAlts: ['Home renovation services Dubai'],
        }
    },
    {
        id: "Service4",
        title: "Concept Design Services in Dubai – Where Vision Meets Creative Precision",
        cardTitle: "Concept Design",
        imgSrc: assets.conceptDesign,
        icon: assets.sofa,
        description:
            "Bring your ideas to life with visually compelling concepts. We transform your vision into sketches and 3D renders that set the foundation for stunning, functional spaces.",
        metatags: {
            title: 'Top Concept Design Services in Dubai | Interior Planning by Space Sculpt',
            description:
                'Space Sculpt offers expert concept design services in Dubai. From 3D visualization to layout planning, we bring your ideas to life with creativity and precision.',
            imageAlts: [
                '3D interior concept design Dubai',
                'Mood board for modern villa design',
                'Office space layout planning Dubai',
            ],
        }
    },
    {
        id: "Service5",
        title: "Signage Solutions in Dubai – Where Interior Design Meets Visual Impact",
        cardTitle: "Signage",
        imgSrc: assets.sinage,
        icon: assets.signboard,
        description:
            "Make a lasting impression with custom signage solutions. We blend design and strategy to create signs that are both functional and visually striking—perfect for any space.",
        metatags: {
            title: 'Custom Signage Design in Dubai | Interior Branding & Directional Signs',
            description:
                'Discover high-quality interior signage solutions in Dubai with Space Sculpt. From custom branding signs to directional signage, we bring function and design together.',
            imageAlts: [
                'Custom office signage design Dubai',
                'Reception signage with company logo',
                'Directional signage for corporate interiors',
            ],
        }
    },
    {
        id: "Service6",
        title: "Laser and CNC Cutting Services in Dubai – Precision for Interior Excellence",
        cardTitle: "Laser & CNC Cutting",
        imgSrc: assets.lasercutting,
        icon: assets.laser,
        description:
            "Precision meets creativity with our laser and CNC cutting services. From intricate patterns to bold statements, we bring your designs to life with exceptional accuracy.",
        metatags: {
            title: 'Laser & CNC Cutting Dubai | Precision Interior Design Solutions',
            description:
                'Discover high-quality laser and CNC cutting services in Dubai for interiors. From decorative panels to custom signage, we deliver precise, creative solutions.',
            imageAlts: [
                'CNC cut wall panel Dubai',
                'Laser engraved signage for interior design',
                'Decorative jali panel for residential space',
            ],
        }
    },
];

export default services;
