import React from "react";
import About from "./About";
import WhatWeOffer from "./WhatWeOffer";
import Contact from "../comman/Contact";
import Testimonials from "./Testimonials";
import BlurrySlider from "./BlurrySlider";
import Hero from "../comman/Hero";
import assets from "@/data/assets";
import TextMarquee from "./TextMarquee";

const Home = () => {
  return (
    <section className="p-[10px] md:p-3 lg:p-5 overflow-hidden">
      <Hero
        heading="Experience UAE’s premium <span class='text-primary'>interior design</span> solutions with Spacesculpt Interiors & Sapnatech Interiors"
        ctaLink="/contact"
        bgImage={assets.HomeHeroImage}
        ctaStatus={true}
        content=""
        displayWhatsapp={true}
      />
      <About />
      <WhatWeOffer />
      <TextMarquee />
      <BlurrySlider />
      <Testimonials />
      <Contact />
    </section>
  );
};
// <span class='text-primary'>interior designers</span>

export default Home;
