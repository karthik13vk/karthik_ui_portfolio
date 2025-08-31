import React from 'react'
import Marquee from "react-fast-marquee";
import './Marquee.scss'
import { FaArrowsToDot } from 'react-icons/fa6';
const Marqueenew = () => {
  return (
       <div className='marquee-section'>

      <Marquee>
      <ul>
        <li>
          
            Frontend Developer
          <span><FaArrowsToDot /></span>
        </li>
        <li>
          
            Web Developer
            <span><FaArrowsToDot /></span>
        </li>
        <li>
          
            Web Designer
            <span><FaArrowsToDot /></span>
        </li>
        <li>
          
            UI Designer
            <span><FaArrowsToDot /></span>
        </li>
        <li>
          
           Web Design
            <span><FaArrowsToDot /></span>
        </li>
        <li>
          
           Responsive Web Design
            <span><FaArrowsToDot /></span>
        </li>
        <li>
          
           CMS Development
            <span><FaArrowsToDot /></span>
        </li>
      </ul>
      </Marquee>

    </div>
  )
}

export default Marqueenew