import { AboutUsPageData, NavbarLinks, SocialMediaLinks } from "@/types";
import { FaFacebook, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import assets from "./assets";

const navLinks: NavbarLinks[] = [
    { title: "Home", link: "/", bgImage: assets.HomeHeroImage },
    { title: "About Us", link: "/about", bgImage: assets.aboutHero },
    { title: "Services", link: "/services", bgImage: assets.servicesHero },
    { title: "Gallery", link: "/gallery", bgImage: assets.galleryHero },
    { title: "Blogs", link: "/blogs", bgImage: assets.blogsHeroImage },
    { title: "Contact", link: "/contact", bgImage: assets.contactHero1 },
];

const socialMedia: SocialMediaLinks[] = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
    { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];




const aboutUsPageData: AboutUsPageData[] = [
    {
        title: "Our Mission",
        content: "Redefining interior spaces through innovative design solutions that embody beauty, functionality, and timeless sophistication."
    },
    {
        title: "Tailored Design Solutions",
        content: "Your unique style and needs are at the heart of our process, delivering personalized spaces that feel authentically yours."
    },
    {
        title: "Core Values",
        content: "Creativity, precision, and collaboration are the pillars of our work, ensuring every space we design is both functional and inspiring."
    },
    {
        title: "Expert Craftsmanship",
        content: "Every detail reflects our dedication to precision and creativity, ensuring exceptional quality in every project."
    },
    {
        title: "Our Vision",
        content: "To be a leader in interior innovation, crafting environments that inspire creativity, comfort, and harmony in everyday life."
    },
    {
        title: "Innovative Techniques",
        content: "We embrace cutting-edge technology and design trends, ensuring your space feels fresh, modern, and timeless."
    }
];

const contactUsEmail: string = "Riyaz@spacesculpt.ae";
const contactUsPhoneNumber: string = "+971 508 89 2829";
const contactUsAddress: string = "177, Red Avenue, Al Garhoud, Dubai-UAE";
const contactUsAddressLink:string="https://maps.app.goo.gl/NFFgWUMxdULSk4Pa6";



export { navLinks, socialMedia, aboutUsPageData, contactUsAddress, contactUsEmail,contactUsAddressLink, contactUsPhoneNumber }