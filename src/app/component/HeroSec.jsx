"use client"
import Link from "next/link";
import React from 'react';
import Image from "next/image";
import HomeIcon from "../../../public/home-1-svgrepo-com.svg";
import CalendarIcon from "../../../public/calendar-days-svgrepo-com.svg";
import PhoneIcon from "../../../public/phone-svgrepo-com.svg";
import { TypeAnimation } from 'react-type-animation'


const HeroSec = () => {
  return (
    <section class="mr-0" id="home">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">
                        Hi, I&apos;m {""}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        'Kartika',
                        1000, 
                        'Software Engineering Student',
                        1000,
                        'UI Design',
                        1000,
                         ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    I&apos;m Kartika Sari Kinasih. I am currently pursuing education at SMKN 1 Denpasar, majoring in Software Engineering.
                </p>
                <div>
                    <div className='mb-6'>
                    <div className='socials flex flex-col gap-2'>
                        <div className="flex items-center gap-2">
                        <Image src={HomeIcon} alt='Home Icon' width={30} height={30} className='filter brightness-0 invert'/>
                            <span className="text-s text-[#ADB7BE]">Jl. Taman Magendra, No. 88, Angantaka, Abiansemal</span> 
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={CalendarIcon} alt='Calendar Icon' width={30} height={30} className='filter brightness-0 invert'/>   
                            <span className="text-[#ADB7BE]">January, 14th 2008</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={PhoneIcon} alt='Phone Icon' width={30} height={30} className='filter brightness-0 invert'/>   
                            <span className="text-[#ADB7BE]">081936396823</span>
                        </div>
                    </div>
                    </div>

                </div>
                <div>
                    <a href="/assets/CV 1_20231027_123035_0000.pdf" download={"CV 1_20231027_123035_0000.pdf"} >
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-600 via-teal-500  to-emerald-400 hover:bg-slate-800 text-white mt-3 ">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                    </a>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] lg: relative">
                <Image
                    src="/assets/ka-removebg-preview.png"
                    alt="Kartika"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSec
