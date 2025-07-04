import assets from '@/data/assets'
import { contactUsEmail, navLinks, socialMedia } from '@/data/comman'
import { NavbarLinks, SocialMediaLinks } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-black-gradient h-full lg:h-[732px] overflow-hidden'>
      <div className='p-4 flex flex-col justify-between h-2/4 gap-4'>
        {/* top */}
        <div>
          <nav className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
            {/* logo */}
            <div className="text-xl font-bold text-white flex flex-row items-center gap-2">
              <Image
                src={assets.Logo}
                alt="logo"
                width={200}
                height={83}
                className=""
              />
              {/* <span>
                        <span className="text-primary">S</span>pace <span className="text-primary">S</span>culp<span className="text-primary">t</span>
                    </span> */}
            </div>
            {/* Desktop Navigation Links */}
            <ul className="rounded-[20px] flex flex-col lg:flex-row gap-2 text-white">
              {navLinks.map((navlink: NavbarLinks, index: number) => (
                <Link
                  href={navlink.link}
                  key={index}
                  className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "lg:border-r-white lg:border-r-[1px]" : ""}`}
                  passHref
                >
                  <li className="hover:text-white cursor-pointer">{navlink.title}</li>
                </Link>
              ))}
            </ul>

            <ul className="rounded-[20px] flex gap-5 text-white">
              {socialMedia.map(({ link, icon: Icon }: SocialMediaLinks, index: number) => (
                <a
                  href={link}
                  key={index}
                >
                  <Icon size={20} className='text-white' />
                </a>
              ))}
            </ul>
          </nav>
        </div>
        {/* middle */}
        <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 capitalize'>


          <p className='text-sm font-normal text-white'>For inquiries, email us at <a href={`mailto:${contactUsEmail.toLowerCase()}`} target='_blank' className="mt-2 lowercase font-bold">{contactUsEmail}</a></p>

          <p className='text-sm font-normal text-white'><a href='https://www.pixelpanda.ae/'>This website is Designed and Developed by The <b>Pixel Panda Technology</b></a></p>

          <div className='space-y-4 lg:space-x-4'>
            <span className='text-sm block lg:inline font-normal text-white capitalize'>Privacy policy</span>
            <span className='text-sm block lg:inline font-normal text-white capitalize'>Terms & conditions</span>
          </div>
        </div>
      </div>

      <div className='h-2/4 relative overflow-hidden rounded-t-3xl flex flex-col items-center justify-center'>
        <Image src={assets.FooterImage} loading='lazy' alt='footer-image' width={1366} height={614} className='h-full w-full absolute top-0 right-0 left-0 z-10 object-cover brightness-[.8]' />
        <h1 className='font-medium text-[7vw] leading-[300px] relative z-20 text-white text-center'>Space Sculpt</h1>
      </div>

      {/* bottom */}
    </footer>
  )
}

export default Footer