import React from "react";
import AboutHero from "./AboutHero";
import Contact from "../comman/Contact";
import AboutSecond from "./AboutSecond";
import AboutThird from "./AboutThird";

const AboutUs = () => {
  return (
    <section className="p-[10px] md:p-3 lg:p-5 space-y-12">
      <AboutHero />
      <AboutSecond />
      <AboutThird />
      <Contact />
    </section>
  );
};

export default AboutUs;
