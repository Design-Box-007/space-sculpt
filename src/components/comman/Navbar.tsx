"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import assets from "@/data/assets";
import { NavbarLinks } from "@/types";
import Link from "next/link";
import { navLinks } from "@/data/comman";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="absolute top-0 left-1/2 border-[10px] border-solid rounded-b-3xl bg-white border-white transform -translate-x-1/2 w-4/5 z-50">
            <section className="flex items-center justify-between p-[10px] rounded-full relative overflow-hidden">
                <Image src={assets.HomeHeroImage} width={1153} height={641} alt="bg" className="-z-10 w-full absolute brightness-[0.7] top-0 right-0 left-0 object-cover" />
                {/* Logo */}
                <div className="text-xl font-bold text-white flex flex-row items-center gap-2">
                    <Image
                        src={assets.Logo}
                        alt="logo"
                        width={33}
                        height={31}
                    />
                    <span>
                        Space Sculpt
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden rounded-[20px] md:flex  text-white">
                    {navLinks.map((navlink: NavbarLinks, index: number) => (
                        <Link
                            href={navlink.link}
                            passHref
                            key={index}
                            className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "border-r-primary border-r-[1px]" : ""}`}
                        >
                            <li className="hover:text-white cursor-pointer">{navlink.title}</li>
                        </Link>
                    ))}
                </ul>

                {/* CTA Button (Hidden on Mobile) */}
                <button className="hidden md:flex gap-2 bg-white flex-row items-center text-white px-5 py-1 rounded-full">
                    <Image
                        src={assets.PhoneIcon}
                        alt="phone"
                        width={24}
                        height={24}
                    />
                    <span className="text-primary text-base font-medium">Get a Consult</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-full md:hidden flex flex-col items-center py-4">
                        <ul className="space-y-4 text-white">
                            {navLinks.map((navlink: NavbarLinks, index: number) => (
                                <Link
                                    href={navlink.link}
                                    passHref
                                    key={index}
                                >
                                    <li className="hover:text-white cursor-pointer">{navlink.title}</li>
                                </Link>
                            ))}
                        </ul>
                        <button className="flex gap-2 bg-white flex-row items-center text-white px-5 py-1 rounded-full">
                            <Image
                                src={assets.PhoneIcon}
                                alt="phone"
                                width={24}
                                height={24}
                            />
                            <span className="text-primary text-base font-medium">Get a Consult</span>
                        </button>
                    </div>
                )}
            </section>
        </nav>
    );
};

export default Navbar;
