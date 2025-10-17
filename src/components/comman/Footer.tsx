import assets from "@/data/assets";
import { contactUsEmail, navLinks, socialMedia } from "@/data/comman";
import { NavbarLinks, SocialMediaLinks } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center text-[#171717]">
      {/* Background Image */}
      <Image
        src={assets.FooterImage}
        loading="lazy"
        alt="footer-image"
        width={1366}
        height={614}
        className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-90"
      />

      {/* Content Overlay */}
      <div className="relative z-20 w-full px-5 md:px-10 lg:px-20 py-10 flex flex-col justify-between">
        {/* Top Section */}
        <nav className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 items-start">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <Image
              src={assets.Logo}
              alt="logo"
              width={200}
              height={83}
              className="w-[120px] md:w-[160px] lg:w-[200px]"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col flex-wrap lg:flex-row lg:justify-center gap-4 md:gap-6 text-sm md:text-base font-medium">
            {navLinks.map((navlink: NavbarLinks, index: number) => (
              <Link
                href={navlink.link}
                key={index}
                passHref
                className={`${
                  index !== navLinks.length - 1
                    ? "lg:border-r lg:border-black/20 lg:pr-4"
                    : ""
                }`}
              >
                <li>{navlink.title}</li>
              </Link>
            ))}
          </ul>

          {/* Social Media */}
          <ul className="flex justify-center lg:justify-end gap-5 md:gap-6">
            {socialMedia.map(
              ({ link, icon: Icon }: SocialMediaLinks, index: number) => (
                <a
                  href={link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={22} />
                </a>
              )
            )}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 border-t border-black/10 pt-6 text-center lg:text-left">
          {/* Email */}
          <p className="text-sm md:text-base">
            For inquiries, email us at{" "}
            <a
              href={`mailto:${contactUsEmail.toLowerCase()}`}
              target="_blank"
              className="font-semibold underline underline-offset-2"
            >
              {contactUsEmail}
            </a>
          </p>

          {/* Developer Credit */}
          <p className="text-sm md:text-base">
            <a
              href="https://www.pixelpanda.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              This website is Designed & Developed by{" "}
              <b>Pixel Panda Technology</b>
            </a>
          </p>

          {/* Policy Links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <span className="text-sm cursor-default">Privacy Policy</span>
            <span className="text-sm cursor-default">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
