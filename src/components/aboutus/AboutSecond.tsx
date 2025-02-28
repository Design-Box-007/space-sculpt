import assets from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const AboutSecond = () => {
    return (
        <section className="px-4 py-10 md:py-20 space-y-5 md:space-y-7">
            <h2 className="font-bold text-4xl md:text-6xl leading-tight text-center md:text-left">
                Crafting <span className="text-primary">Spaces</span>, Shaping <span className="text-primary">Experiences</span>
            </h2>
            <p className="font-normal text-xl md:text-2xl text-center md:text-left">
                {"At Space Sculpt, we blend creativity with precision to transform your spaces into timeless works of art. Every detail reflects our passion for design and commitment to excellence."}
            </p>

            {/* Divider */}
            <Image
                loading="lazy"
                src={assets.divider}
                alt="divider"
                width={1360}
                height={1}
                className="w-full"
            />

            {/* About Section */}
            <div className="relative rounded-lg overflow-hidden min-h-[250px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-end p-5">
                {/* Background Image */}
                <Image
                    loading="lazy"
                    src={assets.about2}
                    alt="about2"
                    width={1360}
                    height={796}
                    className="w-full h-full absolute top-0 left-0 right-0 z-10 object-cover"
                />

                {/* Content Box */}
                <div className="relative z-20 bg-white p-4 md:p-[18px] rounded-lg md:rounded-[18px] space-y-3 md:space-y-5 lg:min-h-[280px] w-full max-w-4xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center md:text-left">
                        Crafting <span className="text-primary">Spaces</span>, Shaping <span className="text-primary">Experiences</span>
                    </h2>
                    <p className="font-normal text-lg md:text-[22px] md:leading-[29px] italic text-center md:text-left">
                        {"Founded on the belief that every space has a story to tell, Space Sculpt brings visionary design concepts to life with precision and creativity. Our mission is to create environments that inspire, captivate, and enhance everyday living. With years of experience in interior innovation, we craft spaces that blend functionality with aesthetic brilliance."}
                    </p>
                    <p className="font-normal text-xl md:text-3xl text-primary italic text-center md:text-left">
                        {"“Our approach is always client-centered—your vision is our blueprint”"}
                    </p>
                </div>
            </div>
        </section>

    )
}

export default AboutSecond