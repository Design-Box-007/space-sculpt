import Services from "@/components/service/service2";
import React from "react";
import { services } from "../services";

export default function Service2() {
  return (
    <Services
      heading={services[1].heading}
      sections={services[1].sections}
      section2={services[1].section2}
    />
  );
}
