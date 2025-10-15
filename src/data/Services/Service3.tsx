import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service3() {
  return (
    <Services
      heading={services[2].heading}
      sections={services[2].sections}
      section2={services[2].section2}
    />
  );
}
