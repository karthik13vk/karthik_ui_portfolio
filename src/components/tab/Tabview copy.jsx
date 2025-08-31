
"use client"
import React, { useRef } from 'react'
import { motion, } from "framer-motion"


import {
    FaFigma,
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaBootstrap,
    FaPhp,
    FaLaravel,
    FaGithub,
    FaSass
} from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from '@radix-ui/react-tooltip';
import 'react-tabs/style/react-tabs.css';

import "./tab.scss"
import { SiAdobephotoshop, SiMui, SiMysql } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

const Variants = {
    initial: {
        x: isMobile ? -200 : -500, // Change x based on mobile or desktop
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const about = {
    title: "About me",
    description: 'I am a web developer with around 4 years of experience, skilled in a wide range of technologies. I avoid limiting myself to a single framework, embracing new tools and trends to stay adaptable. This flexibility has been key to my success in delivering high-quality, innovative solutions.',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Karthikeyan"
        },
        {
            fieldName: "Phone",
            fieldValue: "8072217943, 9944658008"
        },
        {
            fieldName: "Experience",
            fieldValue: "Around 4.5+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "vijayakarthik13@gmail.com"
        },
        {
            fieldName: "Location",
            fieldValue: "Erode"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Tamil"
        },

    ]
}

const experience = {
    title: "Experience",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum",
    items: [
        {
            company: "Starnine Solutions",
            position: "Front End Web Developer",
            duration: "Sep 2024 - Present",
        },
        {
            company: "Blazon Technology",
            position: "Junior Web Developer",
            duration: "May 2023 - June 2024",
        },
        {
            company: "The Banyan Infotech",
            position: "Web Designer",
            duration: "Sep 2021 - Feb 2023",
        },
        {
            company: "Zavien Solutions",
            position: "Web Developer",
            duration: "May 2020 - Jul 2021",
        },
    ]
}

const education = {
    title: "Education",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum",
    items: [
        {
            institution: "K S Rangasamy College Of Technology",
            courses: "MBA",
            year: "2017",
        },
        {
            institution: "K S Rangasamy College Of Arst and  Science",
            courses: "BA English",
            year: "2015",
        },
        {
            institution: "Ashram Matriculation Higher Secondary School",
            courses: "12th ",
            year: "2012",
        },
        {
            institution: "CSI Boys Higher Secondary School",
            courses: "10th ",
            year: "2010",
        },
    ]
}
const skills = {
    title: "My Skills",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum",
    skillslist: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React Js",
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap",
        },
        {
            icon: <SiMui />,
            name: "Material UI",
        },
       
        
        {
            icon: <RiTailwindCssFill />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaSass />,
            name: "Sass",
        },
             {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaLaravel />,
            name: "Laravel",
        },
        {
            icon: <SiMysql />,
            name: "Mysql",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Adobe Photoshop",
        },
    
        {
            icon: <FaGithub />,
            name: "GitHub"
        },
    ]
}



const Tabview = () => {

    // const ref = useRef()

    // const isInView = useInView(ref,{margin:"-100px"})
    return (
        <motion.div id="about"
            initial={{ opatity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}

            className='tab-section'>
            <div className="container">
            <div className='title-section'>
                 <h6 className='theme-color'>Work & Education</h6> 
                 <h1>My Work & Education </h1> 
             </div>
                <div className="wrapper">
                    <motion.div className="tab-inner mt-2 mt-lg-5"
                        variants={Variants} initial="initial"
                        whileInView="animate"
                    >
                        <Tabs className='tabmain'>
                            <TabList className="tanlistclass">
                                <Tab>Experience</Tab>
                                {/* <Tab>Experience</Tab> */}
                                <Tab>Education</Tab>
                                <Tab>Skills</Tab>
                            </TabList>

                            <div className='tabcontent'>
                                <TabPanel>
                                    <div className='tanpinnercontent'>
                                         <h2>{experience.title}</h2>
                                        <p>{experience.description}</p>
                                    </div>

                                    <div className='tabscroll'>
                                        <ul>
                                            {experience.items.map((item, index) => {
                                                return <li key={index}>
                                                    <div>
                                                        <h6 >{item.company}</h6>
                                                        <h4>{item.position}</h4>
                                                    </div>
                                                    <div>
                                                        <span></span> <p>{item.duration}</p>
                                                    </div>
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </TabPanel>
                                {/* <TabPanel>
                                    <div className='tanpinnercontent'>
                                        <h2>{experience.title}</h2>
                                        <p>{experience.description}</p>
                                    </div>

                                    <div className='tabscroll'>
                                        <ul>
                                            {experience.items.map((item, index) => {
                                                return <li key={index}>
                                                    <div>
                                                        <h6 >{item.company}</h6>
                                                        <h4>{item.position}</h4>
                                                    </div>
                                                    <div>
                                                        <span></span> <p>{item.duration}</p>
                                                    </div>
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </TabPanel> */}
                                <TabPanel>
                                    <div className='tanpinnercontent'>
                                        <h2>{education.title}</h2>
                                        <p>{education.description}</p>
                                    </div>

                                    <div className='tabscroll'>
                                        <ul>
                                            {education.items.map((item, index) => {
                                                return <li key={index}>
                                                    <div>
                                                        <h6 >{item.courses}</h6>
                                                        <h4>{item.institution}</h4>
                                                    </div>
                                                    <div>
                                                        <span></span> <p>{item.year}</p>
                                                    </div>
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='tanpinnercontent'>
                                        <h2>{skills.title}</h2>
                                        <p>{skills.description}</p>
                                    </div>

                                    <div className='tabscroll tabscrollicon'>
                                        <ul>
                                            {skills.skillslist.map((item, index) => {
                                                return <li key={index}>
                                                    <div>

                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className='tooltip-btn'>

                                                                    <h4 className='icons'>{item.icon}</h4>
                                                                    <TooltipContent>
                                                                        <h6 >{item.name}</h6>
                                                                    </TooltipContent>
                                                                </TooltipTrigger>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </div>
                                                    {/* <div>
                                                    <span></span> <p>{item.year}</p>
                                                </div> */}
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </motion.div>
                </div>
            </div>
        </motion.div>


    )
}

export default Tabview