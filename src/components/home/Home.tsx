import React from 'react'
import Hero from './Hero'
import About from './About'
import WhatWeOffer from './WhatWeOffer'
import Contact from '../comman/Contact'
import Testimonials from './Testimonials'
import BlurrySlider from './BlurrySlider'

const Home = () => {
  return (
    <section className='p-[10px]'>
      <Hero />
      <About />
      <WhatWeOffer />
      <BlurrySlider />
      <Testimonials />
      <Contact />
    </section>
  )
}

export default Home