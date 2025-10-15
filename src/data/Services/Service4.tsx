import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service4() {
  return (
    <Services
      heading={services[3].heading}
      sections={services[3].sections}
      section2={services[3].section2}
    />
  );
}
