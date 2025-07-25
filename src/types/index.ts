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
    component:string;
    imgSrc: string;
    cardTitle: string;
    title: string;
    icon: string;
    description: string;
    metatags: MetaTagType;
}

interface MetaTagType {
    title: string;
    description: string;
    imageAlts: string[];
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
    serviceGroupId: string;
}



interface Blog {
    title: string;
    description: string;
    imgSrc: string;
    component: string;
    date: string;
    updatedDate: string;
}

interface ContactForm {
    name: string;
    email: string;
    mobile: string;
    location: string;
    message: string;
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
    ContactForm,
}
