'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { TextGenerateEffect } from './ui/TestGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaDownload, FaGithub, FaLinkedin, FaLinkedinIn, FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import CustomMagicButton from './ui/CustomMagicButton';
import Image from 'next/image';
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className='pb-20 pt-12'>
            <div>
                <Spotlight
                    className="-top-40 -left-20 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="blue"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="h-screen w-full rounded-md dark:bg-black-100 bg-white absolute top-0 left-0 flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                </div>
                <BackgroundBeams />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center' >
                    <div className='relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "tween",
                                duration: 0.3
                            }}>
                            <Image
                                src="/afaq-portrait.jpg"
                                alt="afaq-portaight"
                                width="220"
                                height="220"
                                quality="95"
                                priority={true}
                                className='h-38 w-38 rounded-full object-cover border-[0.35rem] border-white shadow-xl  '
                            />
                        </motion.div>
                        <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.5 }} className='text-4xl absolute bottom-0 right-0'>👋</motion.span>
                    </div>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mt-3'>
                        Full Stack Developer
                    </h2>
                    <TextGenerateEffect
                        words="Turning Concepts into Outstanding Interactions"
                        className="text-[30px] text-center md:text-5xl lg:text-6xl"
                    />
                    <p className='text-center md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>
                        Hi, I&apos;am <span className='text-purple uppercase'>Afaq Ibrar</span>, Software Engineer based in Pakistan with three years of professional experience. My expertise in developing web applications, particularly in MERN/PERN/LAMP stacks. I bring a comprehensive skill set to every project I undertake, ensuring high-quality and efficient solutions.
                    </p>
                    <a href='#projects'>
                        <ShimmerButton title='Show My Work' icon={<FaLocationArrow />} position='right' />
                    </a>

                    <div className='block mt-4 sm:flex sm:flex-col md:flex-row md:gap-1 sm:justify-center text-center items-center'>
                        <div className='mb-4 md:mb-0 md:mr-1'>
                            <a href="/Afaq_Ibrar.pdf"
                                download>
                                <MagicButton title='Download Resume' icon={<FaDownload />} position='right' />
                            </a>
                        </div>
                        <div className='mb-4 md:mb-0 md:mr-1'>
                            <a href='https://www.linkedin.com/in/afaq-ibrar/' target="_blank">
                                <CustomMagicButton title='' icon={<FaLinkedin />} position='right' />
                            </a>
                        </div>
                        <div className='mb-4 md:mb-0 md:mr-1'>
                            <a href='https://github.com/afaqibrar/' target="_blank">
                                <CustomMagicButton title='' icon={<FaGithub />} position='right' />
                            </a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Hero