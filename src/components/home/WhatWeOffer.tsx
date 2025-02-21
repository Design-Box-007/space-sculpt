import projects from '@/data/projects';
import { Project } from '@/types';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard: React.FC<Project> = ({ imgSrc, title, link = '/', icon }) => {
    return (
        <div className="h-[445px] rounded-2xl overflow-hidden bg-white flex flex-col justify-between relative">
            <Image src={imgSrc} width={445} height={445} alt={title} className="rounded-xl object-cover w-full h-full" />

            <Link href={link} passHref>
                <div className="bg-white w-[95%] mx-auto rounded-full px-4 py-3 z-20 flex justify-between items-center mt-4 absolute bottom-3 left-0 right-0">
                    <div className="flex items-center gap-2">
                        <Image src={icon} width={20} height={20} alt={title} />
                        <span className="font-semibold text-lg">{title}</span>
                    </div>
                    <ArrowRightCircle className="text-primary w-6 h-6" />
                </div>
            </Link>
        </div>
    );
};

const WhatWeOffer = () => {
    return (
        <section className="py-10 px-4">
            <h1 className="text-[180px] leading-[243px] font-medium text-left">What We Offer</h1>
            <h5 className="text-[40px] leading-[54px] text-gray-600 text-left mt-2">
                Comprehensive Interior Solutions for <span className='text-primary'>Every Space.</span>
            </h5>
            <div className="grid grid-cols-3 gap-6 mt-8">
                {projects.map((project: Project, index: number) => (
                    <ProjectCard
                        icon={project.icon}
                        imgSrc={project.imgSrc}
                        key={index}
                        link={project.link}
                        title={project.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhatWeOffer;
