import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

import aboutimg from "./aboutimg.png"
import "./About.scss"
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className='aboutsection' id="about">
            <div className="container">
                <div className="row justify-content-between align-items-center ">
                    <motion.div
                        className="col-lg-6 col-md-6 col-12 order-md-2 order-1"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <div className="about-content text-center">
                            <div className='title-section '>
                                <h6 className='theme-color'>About me</h6>
                                <h1>About me </h1>
                            </div>
                            {/* <h2>About me</h2> */}
                            <div className=''>
                                <p>Creative and adaptable Front-End Web Developer with 4.7 years of experience building responsive, user-focused websites and applications. Skilled in ReactJS, JavaScript, Tailwind CSS, Material UI, PHP, and UI/UX implementation. Experienced in turning Figma designs into scalable, mobile-first, and SEO-optimized interfaces. Known for embracing new tools and frameworks to deliver high-quality, innovative solutions.</p>
                            </div>

                            <div className="about-links">
                                <a href="tel:+918072217943"><span> <FaPhoneAlt /></span>8072217943</a>
                                <a href="tel:+919944658008"><span><FaPhoneAlt /></span>9944658008</a>
                                <a href="mailto:vijayakarthik13@gmail.com"><span><FaEnvelope /></span>vijayakarthik13@gmail.com</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-5 col-md-6 col-12 order-md-1 order-2"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <div className="about-img mt-5 mt-md-0">
                            <img src={aboutimg} alt="img" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About