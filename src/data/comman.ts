import { NavbarLinks, SocialMediaLinks } from "@/types";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks: NavbarLinks[] = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Gallery", link: "/gallery" },
    { title: "Contact", link: "/contact" },
];

const socialMedia: SocialMediaLinks[] = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://twitter.com" },
];


export { navLinks, socialMedia }