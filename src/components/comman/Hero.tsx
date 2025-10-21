"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

// ✅ Transparent WhatsApp Button with full box shadow
type WhatsappButtonProps = {
  number: string;
  message?: string;
};
const WHATSAPP_NUMBERS = ["+971508892829", "+971543811237"];
const WhatsappButton = ({ number, message }: WhatsappButtonProps) => {
  const baseNumber = number.replace(/\D/g, "");
  const waLink = `https://wa.me/${baseNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white text-white bg-transparent px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:bg-white/10 hover:scale-105 backdrop-blur-sm md:text-2xl font-montserrat"
    >
      <BsWhatsapp className="text-white text-xl" />
      {number}
    </a>
  );
};

interface HeroProps {
  heading: string;
  content: string;
  ctaName?: string;
  ctaLink?: string;
  ctaStatus?: boolean;
  bgImage: string;
  displayWhatsapp?: boolean; // ✅ New prop
}
// Framer Motion Variants
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC<HeroProps> = ({
  heading,
  content,
  ctaName,
  ctaLink,
  ctaStatus = false,
  bgImage,
  displayWhatsapp = false, // default false
}) => {
  return (
    <section className="text-white w-full flex flex-col justify-center relative rounded-xl overflow-hidden min-h-screen max-[500px]:pt-[100px] p-8 sm:p-6 md:p-10 lg:p-12">
      <Image
        loading="eager"
        src={bgImage}
        width={1153}
        height={641}
        alt="background"
        className="-z-10 h-full rounded-3xl absolute w-full brightness-[0.6] top-0 right-0 left-0 object-cover"
      />

      <div className="text-left flex flex-col gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl text-white font-mediu font-cinzel"
          dangerouslySetInnerHTML={{ __html: heading }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-sm sm:text-base md:text-lg font-medium text-white"
          dangerouslySetInnerHTML={{ __html: content }}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
        />

        {ctaStatus && ctaName && ctaLink && (
          <a
            href={ctaLink}
            className="flex gap-2 mt-8 sm:mt-6 md:mt-8 lg:mt-12 w-fit bg-white flex-row-reverse items-center text-white p-2 sm:p-3 md:p-4 rounded-full"
          >
            <span className="bg-primary rounded-full p-1 sm:p-2">
              <ArrowRight size={16} className="text-white" />
            </span>
            <span className="text-secondary text-lg sm:text-xl md:text-2xl font-medium">
              {ctaName}
            </span>
          </a>
        )}
      </div>

      {/* ✅ Conditional WhatsApp buttons */}
      {displayWhatsapp && (
        <div className="absolute bottom-10 left-0 w-full flex flex-wrap justify-center items-center gap-4 px-4 text-center z-20">
          {WHATSAPP_NUMBERS.map((number) => (
            <WhatsappButton
              key={number}
              number={number}
              message="Hi! I'm interested in your LED display solutions."
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
