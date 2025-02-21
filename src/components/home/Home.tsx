import React from 'react'
import Hero from './Hero'
import About from './About'
import WhatWeOffer from './WhatWeOffer'
import Contact from '../comman/Contact'

const Home = () => {
  return (
    <section className='p-[10px]'>
      <Hero />
      <About />
      <WhatWeOffer />
      <Contact />
    </section>
  )
}

export default Home