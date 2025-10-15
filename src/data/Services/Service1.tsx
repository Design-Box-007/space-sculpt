import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service1() {
  return (
    <Services
      heading={services[0].heading}
      sections={services[0].sections}
      section2={services[0].section2}
    />
  );
}
