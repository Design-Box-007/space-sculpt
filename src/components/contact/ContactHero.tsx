import assets from '@/data/assets';
import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';
import { contactUsAddress, contactUsAddressLink, contactUsEmail, contactUsPhoneNumber } from '@/data/comman';

const ContactHero = () => {
  return (
    <section className="relative text-white w-full flex flex-col justify-end rounded-xl overflow-hidden min-h-screen px-2 sm:px-4 md:px-8 lg:px-12 py-12 pt-[120px]">
      {/* Background Image */}
      <Image
        loading="eager"
        src={assets.contactHero1}
        width={1153}
        height={641}
        alt="bg"
        className="-z-10 absolute inset-0 w-full h-full object-cover brightness-[0.7]"
      />

      {/* Content Wrapper */}
      <div className="relative w-full overflow-hidden h-auto rounded-3xl p-2 lg:p-5">
        {/* Overlay Image */}
        <Image
          loading="eager"
          src={assets.contactHero2}
          width={1153}
          height={641}
          alt="bg"
          className="-z-10 absolute inset-0 w-full h-full object-cover brightness-[0.7]"
        />

        {/* Contact Content */}
        <div className="relative rounded-3xl text-white w-full px-5 sm:px-6 md:px-10 lg:px-14 py-10 bg-[#F1F1F11A] backdrop-blur-sm">
          {/* Heading */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
            <p className="text-base md:text-lg mt-3">
              Have questions, need a quote, or just want to say hello? Get in touch with us today.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t-[2px] border-primary my-6"></div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-base md:text-lg mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Email</h3>
              <a href={`mailto:${contactUsEmail.toLowerCase()}`} target="_blank" className="mt-2 block">
                {contactUsEmail}
              </a>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Mobile</h3>
              <a href={`tel:${contactUsPhoneNumber.replace(/\s+/g, '')}`} target="_blank" className="mt-2 block">
                {contactUsPhoneNumber}
              </a>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Address</h3>
              <a href={contactUsAddressLink} target="_blank" className="mt-2 block">
                {contactUsAddress}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
