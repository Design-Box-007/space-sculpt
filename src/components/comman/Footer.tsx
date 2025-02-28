import assets from '@/data/assets'
import { contactUsEmail, navLinks, socialMedia } from '@/data/comman'
import { NavbarLinks, SocialMediaLinks } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-black-gradient h-[732px] overflow-hidden'>
      <div className='h-[305px] p-4 flex flex-col justify-between'>
        {/* top */}
        <div>
          <nav className="flex items-center justify-between">
            {/* logo */}
            <div className="text-xl font-bold text-white rounded-full overflow-hidden p-1 bg-white">
                    <Image
                        src={assets.Logo}
                        alt="logo"
                        width={50}
                        height={50}
                        loading="eager"
                    />
                    {/* <span>
                        Space Sculpt
                    </span> */}
                </div>
            {/* Desktop Navigation Links */}
            <ul className="rounded-[20px] md:flex  text-white">
              {navLinks.map((navlink: NavbarLinks, index: number) => (
                <Link
                  href={navlink.link}
                  key={index}
                  className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "border-r-white border-r-[1px]" : ""}`}
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
        <div className='w-full flex flex-row justify-between capitalize'>
          <p className='text-sm font-normal text-white capitalize'>terms & conditions</p>


          <p className='text-sm font-normal text-white'>For inquiries, email us at <a href={`mailto:${contactUsEmail.toLowerCase()}`} target='_blank' className="mt-2 lowercase font-bold">{contactUsEmail}</a>
          </p>

          <div className='space-x-4'>
            <span className='text-sm font-normal text-white capitalize'>services</span>
            <span className='text-sm font-normal text-white capitalize'>Privacy policy</span>
          </div>
        </div>
      </div>

      <div className='h-[451px] max-h-[451px] relative overflow-hidden rounded-t-3xl flex flex-col items-center justify-center'>
        <Image src={assets.FooterImage} loading='lazy' alt='footer-image' width={1366} height={614} className='h-full w-full absolute top-0 right-0 left-0 z-10 object-cover brightness-[.8]' />
        <h1 className='font-medium text-[16vw] leading-[300px] relative z-20 text-white text-center'>Space Sculpt</h1>
      </div>

      {/* bottom */}
    </footer>
  )
}

export default Footer