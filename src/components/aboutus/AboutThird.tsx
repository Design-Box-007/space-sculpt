import { aboutUsPageData } from '@/data/comman'
import { AboutUsPageData } from '@/types'
import React from 'react'




const CardGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                aboutUsPageData.map((data: AboutUsPageData, index: number) => (
                    <div key={index} className={`p-5 min-h-[255px] rounded-lg border  flex flex-col justify-between ${(index % 2) == 0 ? 'bg-transparent border-[#E1E1E1]' : 'bg-primary border-primary'}`}>
                        <h4 className={`text-3xl font-medium ${(index % 2) == 0 ? 'text-secondary' : 'text-white'}`}>{data.title}</h4>
                        <p className={`text-lg font-normal ${(index % 2) == 0 ? 'text-secondary' : 'text-white'}`}>{data.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

const AboutThird = () => {
    return (
        <section className='px-6 py-20 space-y-8'>
            <h1 className='text-[106px] leading-[143px] text-center text-secondary font-medium'>Our <span className="text-primary">Purpose</span> and <span className="text-primary">Promise</span></h1>
            <p className='text-2xl font-normal text-center'>{"Driven by creativity, guided by precision—our mission, vision, and values shape every space we design, while our commitment to excellence sets us apart."}</p>
            <CardGrid />
        </section>
    )
}

export default AboutThird


