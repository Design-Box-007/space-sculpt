import { ArrowRight } from 'lucide-react'
import React from 'react'

const ServiceCTA = () => {
    return (
        <section className='px-4 py-5 bg-prmary'>
            <div className="bg-primary text-white font-medium px-6 py-12 rounded-[40px] space-y-8">
                <h1 className='text-[90px] leading-[121px]'>Where Vision Becomes Reality</h1>
                <p className='text-[34px] leading-[45px]'>We bring creativity, precision, and craftsmanship together to transform your spaces into personalized works of art.</p>
                <button className="flex gap-2 mt-14 w-full bg-white flex-row-reverse items-center justify-between text-white py-6 px-[34px] rounded-full">
                    <span className='bg-primary rounded-full p-1'>
                        <ArrowRight size={113} className='text-white -rotate-45' />
                    </span>

                    <span className="text-primary text-[90px] leading-[121px] font-medium">Get Free Consultation</span>
                </button>
            </div>
        </section>
    )
}

export default ServiceCTA