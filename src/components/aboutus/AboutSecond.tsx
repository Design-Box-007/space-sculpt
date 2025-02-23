import assets from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const AboutSecond = () => {
    return (
        <section className='px-4 py-20 space-y-7'>
            <h2 className='font-bold text-6xl'>Crafting <span className="text-primary">Spaces</span>, Shaping <span className="text-primary"></span>Experiences</h2>
            <p className='font-normal text-2xl'>{"At Space Sculpt, we blend creativity with precision to transform your spaces into timeless works of art. Every detail reflects our passion for design and commitment to excellence."}</p>
            <Image loading='lazy' src={assets.divider} alt='divider' width={1360} height={1} className='w-full' />
            <div className='relative rounded-lg overflow-hidden h-screen p-5 flex items-end'>
                <Image loading='lazy' src={assets.about2} alt='about2' width={1360} height={796}
                    className='w-full h-full absolute top-0 left-0 right-0 z-10 object-cover' />

                <div className=' relative z-20 bg-white p-[18px] rounded-[18px] space-y-5 lg:min-h-[280px]'>
                    <h2 className='font-bold text-6xl'>Crafting <span className="text-primary">Spaces</span>, Shaping <span className="text-primary"></span>Experiences</h2>
                    <p className='font-normal text-[22px] leading-[29px] italic'>{"Founded on the belief that every space has a story to tell, Space Sculpt brings visionary design concepts to life with precision and creativity. Our mission is to create environments that inspire, captivate, and enhance everyday living. With years of experience in interior innovation, we craft spaces that blend functionality with aesthetic brilliance."}</p>
                    <p className='font-normal text-3xl text-primary italic'>{"“Our approach is always client-centered—your vision is our blueprint”"}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSecond