"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import assets from "@/data/assets";
import { NavbarLinks } from "@/types";
import Link from "next/link";
import { navLinks } from "@/data/comman";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const NavbarBackgroundImage = navLinks.find((link) => link.link === pathname)?.bgImage as string;

    // Function to close the mobile menu
    const onLinkClicked = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`absolute top-0 left-1/2 border-[10px] border-solid rounded-b-3xl bg-white border-white transform -translate-x-1/2 max-[767px]:w-4/5 max-[990px]:w-full w-4/5 z-50 ${NavbarBackgroundImage ? "absolute" : 'static w-full'}`}>
            <section className="flex items-center justify-between p-[10px] md:p-3 lg:p-5 rounded-full relative overflow-hidden">
                {NavbarBackgroundImage && <Image
                    loading="eager"
                    src={NavbarBackgroundImage}
                    width={1153}
                    height={641}
                    alt="bg"
                    className="-z-10 w-full absolute brightness-[0.7] top-0 right-0 left-0 object-cover"
                />}

                {/* Logo (Closes Menu on Click) */}
                <div className="text-xl font-bold text-white flex flex-row items-center gap-2"
                    onClick={onLinkClicked}>
                    <Image
                        src={assets.Logo}
                        alt="logo"
                        width={200}
                        height={83}
                        className=""
                    />
                    {/* <span>
                        <span className="text-primary">S</span>pace <span className="text-primary">S</span>culp<span className="text-primary">t</span>
                    </span> */}
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden rounded-[20px] md:flex text-white">
                    {navLinks.map((navlink: NavbarLinks, index: number) => (
                        <Link
                            href={navlink.link}
                            passHref
                            key={index}
                            className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "border-r-primary border-r-[1px]" : ""} ${NavbarBackgroundImage ? "text-white" : "text-black"}`}
                            onClick={onLinkClicked} // Closes menu on link click
                        >
                            <li className="hover:text-white cursor-pointer">{navlink.title}</li>
                        </Link>
                    ))}
                </ul>

                {/* CTA Button (Hidden on Mobile) - Closes Menu on Click */}
                <Link href={`${pathname}/#contact`}>
                    <button
                        className={`hidden md:flex gap-2 bg-white flex-row items-center text-white px-5 py-1 rounded-full ${NavbarBackgroundImage ? "border-none" : "border-primary border-[2px]"}`}
                        onClick={onLinkClicked}
                    >
                        <Image
                            src={assets.PhoneIcon}
                            alt="phone"
                            width={24}
                            height={24}
                            loading={'eager'}
                        />
                        <span className="text-primary text-base font-medium">Get a Consult</span>
                    </button>
                </Link>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </section>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 right-0 w-fit bg-white shadow-lg rounded-lg md:hidden flex flex-col gap-8 items-center py-4 px-2">
                    <ul className="flex flex-col gap-8 text-black">
                        {navLinks.map((navlink: NavbarLinks, index: number) => (
                            <Link
                                href={navlink.link}
                                passHref
                                key={index}
                                onClick={onLinkClicked} // Closes menu on link click
                            >
                                <li className="hover:text-white cursor-pointer">{navlink.title}</li>
                            </Link>
                        ))}
                    </ul>

                    {/* Mobile CTA Button - Closes Menu on Click */}
                    <Link href={`${pathname}/#contact`}>

                        <button
                            className="flex gap-2 bg-primary flex-row items-center text-white px-5 py-1 rounded-full"
                            onClick={onLinkClicked}
                        >
                            <Image
                                src={assets.PhoneIcon}
                                alt="phone"
                                width={24}
                                height={24}
                                loading="eager"
                                className="bg-white rounded-full"
                            />
                            <span className="text-white text-base font-medium">Get a Consult</span>
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
