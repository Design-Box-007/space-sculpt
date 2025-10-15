"use client";

import React, { useState } from "react";
import {
  serviceCardGroups,
  ServiceCardGroupsType,
  services,
} from "@/data/services";
import { Service } from "@/types";
import { motion } from "framer-motion";
import GalleryGroupCard from "./GalleryGroupCard";

const GalleryMainSection = () => {
  const [selectedService, setSelectedService] = useState("all");

  // Filter gallery items based on selected service
  const filteredGallery =
    selectedService === "all"
      ? serviceCardGroups
      : serviceCardGroups.filter((item) => item.serviceId === selectedService);

  return (
    <section className="px-4 pt-10">
      {/* Responsive Heading */}

      <motion.h1
        className="text-3xl md:text-5xl font-medium text-secondary text-center my-8 font-cinzel"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {"Explore the"}{" "}
        <span className="text-primary">
          Art of <br className="hidden md:block" /> Space
        </span>{" "}
        Transformation
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 md:gap-4 justify-start mt-6 mb-10 overflow-x-auto whitespace-nowrap no-scrollbar pl-4">
        <button
          className={`px-4 py-2 border rounded-lg transition min-w-max font-cinzel ${
            selectedService === "all"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedService("all")}
        >
          All Projects
        </button>

        {services.map((service: Service, index: number) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-lg font-cinzel transition min-w-max ${
              selectedService === service.id
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedService(service.id)}
          >
            {service.cardTitle}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredGallery.map((item: ServiceCardGroupsType, index: number) => (
          <GalleryGroupCard card={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default GalleryMainSection;
