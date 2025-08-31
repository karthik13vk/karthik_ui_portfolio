import React from 'react'
import "./Banner.scss"
import banner from "./banner-img.png";
import scrollimg from "./../../../public/scroll.png";
import download from "./download.svg";
import Karthikeyan_resume from "./Karthikeyan_Frontend_Developer.pdf"
import { motion } from "framer-motion"
import { Audio } from 'react-loader-spinner';
import { IoMdDownload } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1, // Change opacity to 1 to make it visible
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,

        },
    },
};

const Bannernew = () => {
  return (
         <div className="banner" id="/">
            <div className="container">
                <div className="wrapper">
                    <motion.div className="textContainer" variants={textVariants} initial="initial"
                        animate="animate" >
                        <motion.h2 variants={textVariants} >Karthikeyan</motion.h2>
                        <motion.h1 variants={textVariants} >
                            Web Developer & Web Designer 
                        </motion.h1>
                        <motion.div variants={textVariants} className="buttons">
                            <a variants={textVariants} href={Karthikeyan_resume} download='Karthikeyan_resume'>
                            Resume &nbsp;<FaDownload/> </a>
                            {/* <a variants={textVariants} href='karthik_updated_file_new.pdf' download>See  the Works</a> */}
                            <a variants={textVariants}  href="#contact">Contact Us</a>
                        </motion.div>
                        <motion.img variants={textVariants} animate="scrollButton" src={scrollimg} alt="" />
                    </motion.div>


                </div>
            </div>
            <div className="imgcontainer">

                <img src={banner} alt="img" />
            </div>
            <motion.div variants={sliderVariants} className="slidingTextContainer" initial="initial"
                animate="animate">
                Web Developer, Web Designer, Frontend Developer, UI Developer
            </motion.div>


        </div>
  )
}

export default Bannernew