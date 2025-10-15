import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service7() {
  return (
    <Services
      heading={services[6].heading}
      sections={services[6].sections}
      section2={services[6].section2}
    />
  );
}
