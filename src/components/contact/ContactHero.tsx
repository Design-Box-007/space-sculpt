import assets from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm'
import { contactUsAddress, contactUsAddressLink, contactUsEmail, contactUsPhoneNumber } from '@/data/comman'

const ContactHero = () => {
    return (
        <section className='relative text-bold text-white w-full flex flex-col justify-end rounded-xl overflow-hidden min-h-screen px-7 py-12 pt-20'>
            <Image
                loading='eager'
                src={assets.contactHero1}
                width={1153}
                height={641}
                alt="bg"
                className="-z-10 h-full w-full absolute top-0 left-0 right-0 object-cover brightness-[0.7]"
            />

            <div className='relative overflow-hidden w-full h-auto rounded-3xl p-5'>
                <Image
                    loading='eager'
                    src={assets.contactHero2}
                    width={1153}
                    height={641}
                    alt="bg"
                    className="-z-10 h-full w-full absolute top-0 left-0 right-0 object-cover brightness-[0.7]"
                />

                <div className="relative rounded-3xl text-white w-full px-7 py-12 pt-16 bg-[#F1F1F11A] backdrop-blur-sm">
                    {/* Heading */}
                    <div className="text-left">
                        <h1 className="text-6xl font-bold">Contact Us</h1>
                        <p className="text-lg mt-3">
                            Have questions, need a quote, or just want to say hello? Get in touch with us today
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full border-t-[2px] border-primary my-6"></div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-3 gap-6 text-left text-lg mb-8">
                        <div>
                            <h3 className="text-2xl font-semibold">Email</h3>
                            <a href={`mailto:${contactUsEmail.toLowerCase()}`} target='_blank' className="mt-2">{contactUsEmail}</a>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Mobile</h3>
                            <a href={`tel:${contactUsPhoneNumber.replace(/\s+/g, "")}`} target='_blank' className="mt-2">{contactUsPhoneNumber}</a>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Address</h3>
                            <a href={contactUsAddressLink} target='_blank' className="mt-2">{contactUsAddress}</a>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </section>
    )
}

export default ContactHero
