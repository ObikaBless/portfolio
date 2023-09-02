'use client'
import { createContext } from "react";
import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { smile } from '@/public/assets';



const About = () => {
  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="I" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4">
            <p>
                Hello! My name is Bless Obika a dedicated front-end software developer
                with a passion for creating exceptional user experiences. With a keen eye
                for design and a knack for turning ideas into interactive reality, I specialize 
                in crafting intuitive and visually appealing websites and applications.
            </p>
            <p>
                 If you &apos;re looking for a front-end software developer who is passionate,  
                   <span className="text-textGreen">
                    skilled, and dedicated to delivering top-notch solutions
                 </span>, I would be thrilled 
                 to collaborate with you. <span className="text-textGreen">
                        Let &apos;s  work together to build remarkable digital experiences </span> that inspire and delight users! 
                   
            </p>
            <p>
                Here are a few technologies i have been working with recently:
            </p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2
            mt-6
            ">
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    JavaScript
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    React
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    ASP.NET
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    ADOBE XD / Figma
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    SQL
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    TailwindCSS
                </li>

                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    .NET
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    CSS
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    HTML
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    Git
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    VueJS
                </li>
            </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                     <Image 
                      className="rounded-lg h-full object-cover"
                      src={ smile }
                      alt="smile"
                      /> 
                      <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
                rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2
                transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  )
}

export default About;

