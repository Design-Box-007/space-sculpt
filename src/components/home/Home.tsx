import React from 'react'
import About from './About'
import WhatWeOffer from './WhatWeOffer'
import Contact from '../comman/Contact'
import Testimonials from './Testimonials'
import BlurrySlider from './BlurrySlider'
import Hero from '../comman/Hero'
import assets from '@/data/assets'
import TextMarquee from './TextMarquee'

const Home = () => {
  return (
    <section className='p-[10px] md:p-3 lg:p-5 overflow-hidden'>
      <Hero
        heading="Reimagine Your Space <br /> with <span class='text-primary'>Timeless</span> Elegance"
        content="From concept to creation, we craft interiors that seamlessly blend <br />
      sophistication, functionality, and your unique style—transforming <br />
      every space into a masterpiece of timeless elegance."
        // ctaName="Get Free Consultation"
        ctaLink="/contact"
        bgImage={assets.HomeHeroImage}
        ctaStatus={true}
      />

      <About />
      <WhatWeOffer />
      <TextMarquee />
      <BlurrySlider />
      <Testimonials />
      <Contact />
    </section>
  )
}

export default Home