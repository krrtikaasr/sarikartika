"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButtons from "./TabButtons";


const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>General Design</li>
        <li>English</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SMKN 1 Denpasar (2022-sekarang)</li>
        <li>SMP (SLUB) Saraswati 1 Denpasar (2019-2022)</li>
      </ul>
    )
  }
]


const AboutMe = () => {
  const [tab, setTab] = useState("Skills");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }
  
  return (
    <section className='text-white' id="about">
      <div className='mt-20 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image src="/assets/k2.jpg" width={500} height={500} alt="k2"/>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className='text-4xl font-bold text-teal-500 mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
        I am a student majoring in Software Engineering at SMKN 1 Denpasar. I have a keen interest in the field of IT, especially in Website Development. I possess skills in basic HTML and CSS, as well as UI Design. Additionally, I am proficient in effective communication, teamwork, and exhibit perseverance with a constant desire to learn new things. With the determination and passion I have, my aspiration is to become a Website Developer who can contribute positively to society and personal growth.
        </p>
        <div className='flex flex-row mt-8'> 
          <TabButtons 
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          > 
          <span style={{margin: '8px'}}>Skills</span>
          </TabButtons>
          <TabButtons 
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          > 
          <span style={{margin: '8px'}}>Education</span>
          </TabButtons>
        </div>
        <div className="mt-8">
          {tab_data.find((t) => t.id === tab)?.content }
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutMe;