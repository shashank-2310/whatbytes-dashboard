"use client"

import React from 'react'
import { SiTicktick } from 'react-icons/si'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const HomePage = () => {

    const placeholders = [
        "Kindly enter your email address",
        "example@gmail.com",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className='w-full h-full flex flex-col text-black gap-2 px-4 sm:px-20'>
            <h1 className='sm:text-4xl text-2xl py-2 sm:py-8 text-center font-semibold'>Welcome to WhatBytes!</h1>
            <p className='w-full text-left'>At WhatBytes, we merge creativity with technology to transform ideas into digital successes. Our journey is fueled by a passion for excellence and innovation.</p>
            <p className='w-full text-left'>Our mission is to drive digital transformation, making cutting-edge technology accessible and impactful for businesses of all sizes.</p>
            <div className='flex items-start flex-col gap-1 w-full text-justify'>
                <p className='flex-center flex-row gap-2'><SiTicktick className='text-lg' />Rapid, responsive, and efficient development cycles for dynamic market adaptation.</p>
                <p className='flex-center flex-row gap-2'><SiTicktick className='text-lg' />Tailored strategies that push the boundaries of digital potential.</p>
                <p className='flex-center flex-row gap-2'><SiTicktick className='text-lg' />Crafting intuitive experiences that delight and engage users.</p>
            </div>
            <div className="flex flex-col py-4 gap-3 text-left">
                <h1 className="text-2xl sm:text-3xl font-semibold">Get In Touch</h1>
                <p className='pl-1'>Enter your email address</p>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
                <div className="flex flex-col gap-3 py-5 text-left">
                    <p className='flex items-center flex-row gap-2'><FaLocationDot /> 357 Bay St., Toronto, ON M5H 4A6, Canada</p>
                    <p className='flex items-center flex-row gap-2'><FaLocationDot /> 235 Binnamangala 2nd floor
                        13th Cross Road 2nd Stage, Indiranagar
                        Bangalore Karnataka 560038</p>
                    <p className='flex items-center flex-row gap-2'><MdEmail /> swatantra@whatbytes.com</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage