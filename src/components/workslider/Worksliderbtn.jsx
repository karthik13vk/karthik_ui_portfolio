"use client";
// import React from 'react'
import { useSwiper } from 'swiper/react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Worksliderbtn = ({ containerStyle, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
        <div className="slidermainbtn">
            <div className={containerStyle} >
                <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                    <BsArrowLeft className={iconsStyles} />
                </button>
                <button className={btnStyles} onClick={() => swiper.slideNext()}>
                    <BsArrowRight className={iconsStyles} />
                </button>
            </div>
        </div>
    );
};

export default Worksliderbtn;