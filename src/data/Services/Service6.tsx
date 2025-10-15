import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service6() {
  return (
    <Services
      heading={services[5].heading}
      sections={services[5].sections}
      section2={services[5].section2}
    />
  );
}
