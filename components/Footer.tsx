'use client'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import { sendEmail } from '../lib/serverAction' 
import SubmitButton from './ui/submit-btn'
import toast from 'react-hot-toast';

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-blue-800'>your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.</p>
                <a href="mailto:afaqibrar468@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className='flex flex-col items-center w-full mb-20 sm:-28  mt-2'>
                <form action={async (formData) => {
                    const data = await sendEmail(formData);
                    if(data?.error) {
                        toast.error(data?.error as string)
                        return;
                    }
                    toast.success("Email Sent Successfully!")
                }} className='mt-10 flex flex-col w-1/2'>
                    <input type="email" name='senderEmail' required maxLength={500} className='h-14 rounded-lg border borderWhite p-4 bg-black-100' placeholder='Your Email' />
                    <textarea required name='message' maxLength={500}  className='borderWhite  h-52 my-3 rounded-lg p-4 bg-black-100' placeholder='Your Message'/>
                    <SubmitButton />
                </form>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className=" md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Afaq Ibrar
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.href} target='_blank'>
                            <div
                                className="mt-5 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer