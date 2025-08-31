"use client";
// import Link from 'next/Link';
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";

import "./service.scss"


const services = [
    {
        num: '01',
        title: 'About Us',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum repellendus cupiditate vitae aliquid non unde cumque, excepturi maiores, itaque quibusdam laboriosam velit eligendi corporis.",
    },
    {
        num: '02',
        title: 'Web Development',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum repellendus cupiditate vitae aliquid non unde cumque, excepturi maiores, itaque quibusdam laboriosam velit eligendi corporis.",
    },
    {
        num: '03',
        title: 'Skills',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum repellendus cupiditate vitae aliquid non unde cumque, excepturi maiores, itaque quibusdam laboriosam velit eligendi corporis.",
    },
    {
        num: '04',
        title: 'Web Development',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Tempora illo id reprehenderit illum repellendus cupiditate vitae aliquid non unde cumque, excepturi maiores, itaque quibusdam laboriosam velit eligendi corporis.",
    },
]


const Services = () => {
    return (
        <div className='services' >
            <div className="wrapper">
                <div className="service-section">
                    <div className="service-left">
                        <motion.div
                            initial={{ opatity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                            }} 
                            className='services-gird'>
                            {services.map((service, index) => {
                                return (
                                    <div key={index}
                                    className='serrive-inner-flex'
                                    >
                                        <div className='service-head'>
                                            <div className='ser-num'>
                                                {service.num}

                                            </div>
                                            <a href='' className='service-link'>
                                                <BsArrowDownRight />
                                            </a>
                                        </div>
                                        <h2 className='ser-title'>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <div className='servi-border'></div>
                                    </div>
                                )
                            })}
                        </motion.div>
                        
                    </div>
                    <div className="service-right">
                            fsafsadfdads
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Services