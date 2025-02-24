import { IconType } from "react-icons";

interface Assets {
    [key: string]: string;
}

interface NavbarLinks {
    title: string;
    link: string;
    bgImage: string;
}

interface SocialMediaLinks {
    link: string;
    icon: IconType;
}

interface AboutUsPageData {
    title: string;
    content: string;
}

interface Service {
    id: string;
    imgSrc: string;
    title: string;
    icon: string;
    description: string
}

interface Testimonial {
    testimonial: string;
    testimonee: string;
    imgSrc: string;
    bgImage: string;
};

interface Gallery {
    title: string;
    imgSrc: string;
    icon: string;
    contentTitle: string;
    content: string;
    serviceId: string;
}



interface Blog {
    title: string;
    description: string;
    imgSrc: string;
    // component: React.FC;
}


export type {
    Assets,
    NavbarLinks,
    Service,
    SocialMediaLinks,
    Testimonial,
    AboutUsPageData,
    Gallery,
    Blog,
}
