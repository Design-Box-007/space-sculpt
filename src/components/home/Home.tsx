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
        heading="Dubai’s top <span class='text-primary'>interior designers</span> complete project solutions"
        content="Interior Fit Out Company in Dubai with full Interior Decorations <br/>
         including styling and furnishing with full fit out renovation <br/>
         services in Dubai and all over UAE. "
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