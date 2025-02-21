import React from 'react'
import ContactForm from './ContactForm'


const Contact = () => {
    return (
        <section className='px-4 py-5 space-y-[56px]'>
            <h1 className='text-[120px] leading-[162px] text-secondary font-medium'>
                Let's Design Your <br />
                <span className='text-primary'>Dream Space</span> Today
            </h1>

            <ContactForm />
        </section>
    )
}

export default Contact