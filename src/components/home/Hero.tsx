import React from 'react'
import assets from '@/data/assets'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='text-bold text-white w-full flex flex-col justify-end relative rounded-xl overflow-hidden h-screen p-8'>
      <Image loading='eager' src={assets.HomeHeroImage} width={1153} height={641} alt="bg" className="-z-10 h-full rounded-3xl absolute w-full brightness-[0.7] top-0 right-0 left-0 object-cover" />

      <div className='text-left flex flex-col gap-4'>
        <h1 className='text-8xl text-white font-medium capitalize'>
          Dubai’s top <br />
          with <span className='text-primary'>interior designers</span>complete project solutions
        </h1>
        <p className='text-base font-medium text-white px-8'>
          From concept to creation, we craft interiors that seamlessly blend <br />
          sophistication, functionality, and your unique style—transforming <br />
          every space into a masterpiece of timeless elegance.
        </p>
        <button className="flex gap-2 mt-12 w-fit bg-white flex-row-reverse items-center text-white p-[10px] md:p-3 lg:p-5 rounded-full">
          <span className='bg-primary rounded-full p-1'>
            <ArrowRight size={16} className='text-white' />
          </span>

          <span className="text-secondary text-2xl font-medium">Get Free Consultation</span>
        </button>
      </div>

      <div className='text-lg w-[331px] text-left font-medium text-white border-b-primary border-b-2 border-solid absolute bottom-4 right-3'>
        Commercial Interior
      </div>

    </section>
  )
}

export default Hero