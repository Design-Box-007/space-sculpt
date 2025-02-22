import { IconType } from "react-icons";

interface Assets {
    [key: string]: string;
}

interface NavbarLinks {
    title: string;
    link: string;
}

interface SocialMediaLinks {
    link: string;
    icon: IconType;
}


interface Project {
    imgSrc: string;
    title: string;
    link: string;
    icon: string;
}

interface Testimonial {
    testimonial: string;
    testimonee: string;
    imgSrc: string;
    bgImage: string;
};


export type {
    Assets,
    NavbarLinks,
    Project,
    SocialMediaLinks,
    Testimonial,
}
