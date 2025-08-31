import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import "./workslider.scss"
import axios from 'axios';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@radix-ui/react-tooltip';
// import alumina from "./project/alumina.png";
import raretex from "./project/raretex.png";
import sigmaprint from "./project/sigmaprint.png";
import signatureinteriors from "./project/signatureinteriors.png";
import smile3denterprises from "./project/smile3denterprises.png";
import starnine from "./project/starnine-screen.png";
import astrology from "./project/astrology-screen.png";
import nanoex from "./project/nanoex-screen.png";
// import systechaquasolution from "./project/systechaquasolution.png";
// import bharathchemicals from "./project/bharathchemicals.png";
// import blazon from "./project/blazon.png";
import drmmyusuf from "./project/drmmyusuf.png";
import grpromoters from "./project/grpromoters.png";
import gowriplates from "./project/gowriplates.png";
// import kintechind from "./project/kintechind.png";
import pmgschool from "./project/pmgschool.png";
// import pressoms from "./project/pressoms.png";
// import setmatrix from "./project/setmatrix.png";
// import cloudynest from "./project/cloudynest.png";
import tekmakindustrials from "./project/tekmakindustrials.png";




import 'swiper/css';
import { BsArrow90DegDown, BsArrowUpRight } from 'react-icons/bs';
import Worksliderbtn from './Worksliderbtn';
import { useEffect } from 'react';
const projects = [
  
    {
    num: "01",
    category: "Nanoex ",
    title: "projects 30",
    desc: "Developed the Nanoex website from scratch using React.js for the front-end architecture, SCSS for modular and maintainable styling, and Material UI for consistent, modern components. The site incorporates smooth scroll animations powered by GSAP and is fully optimized for responsiveness, delivering a seamless and visually appealing user experience across desktops, tablets, and mobile devices.",
    stack: [{ name: "React Js" }, { name: "SCSS" }, {  name: "Material UI"},],
    projimg: nanoex,
    projectlink: 'https://karthik13vk.github.io/Nanoex_MUI/'
  },
  {
    num: "02",
    category: "Smile3denterprises",
    title: "projects 1",
    desc: "Developed a custom website for Smile3denterprises using HTML, CSS, Bootstrap, and JavaScript for their gift product business. Integrated jQuery FancyBox for interactive image galleries and AOS animations for dynamic scrolling effects. The site features a responsive, user-friendly design with high-quality product images to create an engaging online shopping experience across all devices.",
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "JavaScript" }, { name: "jQuery" }],
    projimg: smile3denterprises,
    projectlink: ' http://smile3denterprises.com/'
  },
  {
    num: "03",
    category: "Starnine Solutions ",
    title: "projects 21",
    desc: "Developed a custom website for Starnine Solutions, an IT company, using HTML, CSS, Bootstrap, and JavaScript to support their mobile app, web app, and website services. Integrated smooth scroll animations with GSAP and built a dynamic, responsive, and user-friendly design featuring high-quality images for a seamless experience across all devices.",
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "JavaScript" },{ name: "Bootstrap" }, { name: "jQuery" }],
    projimg: starnine,
    projectlink: 'https://starninesolutions.com/'
  },
  {
    num: "04",
    category: "Agasthiya Maha Siva Nadi Jothidam ",
    title: "projects 30",
    desc: "Designed and developed a dynamic website for Agasthiya Maha Siva Nadi Jothidam, an astrology service specializing in thumb impression-based readings, with image galleries and detailed content. Built using HTML, CSS, Bootstrap, Jquery, PHP the site includes GSAP-powered scroll animations and a fully responsive, visually engaging design optimized for all devices.",
    stack: [{ name: "Html" }, { name: "CSS" }, {  name: "PHP (CodeIgniter)"},],
    projimg: astrology,
    projectlink: 'https://agasthiyamahasivanadijothidam.com/'
  },

  {
    num: "05",
    category: "Raretex Fashions",
    title: "projects 2",
    desc: " Designed and developed a custom website for RareTex Fashions, utilizing HTML, CSS, Bootstrap, and JavaScript for a responsive layout. Incorporated jQuery FancyBox for stylish image galleries, AOS for smooth scrolling animations, and optimized the site with high-quality product images to enhance the visual experience and user engagement.",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }, { name: "Bootstrap" }],
    projimg: raretex,
    projectlink: 'https://www.raretexfashions.com/'
  },
  {
    num: "06",
    category: "signatureinteriors",
    title: "projects 3",
    desc: "Developed a fully static website for Signature Interiors using HTML, CSS, Bootstrap, JavaScript, and jQuery. The website features a responsive design, interactive image galleries, and smooth scrolling effects to showcase interior design projects. Optimized for mobile devices, the site provides an engaging user experience with high-quality visuals and intuitive navigation.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Bootstrap" }, { name: "JavaScript" }],
    projimg: signatureinteriors,
    projectlink: 'https://www.signatureinteriors.in/'
  },
  {
    num: "07",
    category: "GR Promoters",
    title: "projects 4",
    desc: " A fully static website for GR's Lotus has been developed using HTML, CSS, Bootstrap, JavaScript, and jQuery. The website features a responsive design, interactive image galleries, and smooth scrolling effects, making it ideal for promoting apartments and homes for family purchases. Optimized for mobile devices, the site offers an engaging user experience with high-quality visuals and intuitive navigation.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Bootstrap" }],
    projimg: grpromoters,
    projectlink: 'https://grpromoters.com/'
  },
  {
    num: "08",
    category: "Gowri Plates",
    title: "projects 5",
    desc: `Gowri Plates makes food-safe plastic buffet plates in Coimbatore.
  We offer sizes: 11-inch, 12-inch, 13-inch, and 13-inch heavy.
  Our plates come in vibrant colors, perfect for wholesale orders.
  The website uses HTML, CSS, JavaScript, and PHP.
  It’s mobile-friendly and includes WOW animations for a dynamic experience.`,
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    projimg: gowriplates,
    projectlink: 'https://www.gowriplates.com/'
  },
  {
    num: "09",
    category: "PMG School",
    title: "projects 6",
    desc: "The PMG School website is built as a dynamic platform using HTML, CSS, JavaScript, and PHP with the CodeIgniter framework. The site is powered by a Content Management System (CMS), making it easy to manage and update content dynamically. This CMS allows the website to be user-friendly, offering administrators an intuitive interface for managing pages, news, events, and more.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "PHP (CodeIgniter)" }],
    projimg: pmgschool,
    projectlink: 'https://www.pmgschool.com/'
  },
  {
    num: "10",
    category: "Sigmaprint",
    title: "projects 7",
    desc: " I crafted a custom website for Sigmaprint using HTML, CSS, Bootstrap, and JavaScript to achieve a responsive design. jQuery was integrated to create stylish image galleries, while the wow.js library was used to add smooth scrolling animations. To further elevate the user experience, the site was optimized with high-quality product images, enhancing both visual appeal and engagement.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "PHP" }],
    projimg: sigmaprint,
    projectlink: 'https://www.sigmaprint.co.in/'
  },
  {
    num: "11",
    category: "Dr Mm Yusuf",
    title: "projects 8",
    desc: "The Dr. MM Yusuf website is a dynamic platform constructed with HTML, CSS, JavaScript, and PHP, leveraging the CodeIgniter framework. It operates on a Content Management System (CMS), enabling easy and flexible content updates. This CMS design ensures a user-friendly experience for administrators, providing an intuitive interface for managing pages, news, events, and other site features. ",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "PHP (CodeIgniter)" }],
    projimg: drmmyusuf,
    projectlink: 'http://www.drmmyusuf.com/'
  },
  {
    num: "12",
    category: "Tekmak industrials",
    title: "projects 9",
    desc: " I designed and developed a custom website for Tekmak Industrials using HTML, CSS, Bootstrap, owl.carousel, and JavaScript to create a responsive layout. To enhance visual appeal, I integrated jQuery FancyBox for stylish image galleries and applied the wow animation effect for smooth scrolling animations. Additionally, I optimized the website with high-quality product images, elevating the visual experience and boosting user engagement.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Bootstrap" }],
    projimg: tekmakindustrials,
    projectlink: 'https://tekmakindustrials.com/'
  },
];


const Workslider = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get Correct index
    const currentIndex = swiper.activeIndex;
    //update project state based on current 
    setProject(projects[currentIndex]);

  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://demo.tbi.net.in/global_web/Apidata/banners';
    axios.post(apiUrl)
      .then((response) => {
        setData(response.data.records);
      })
      .catch((error) => {
        if (error.response) {
          console.log('Server Error:', error.response.data);
        } else if (error.request) {
          console.log('No Response Received');
        } else {
          console.log('Error:', error.message);
        }
      });
  }, []);

  // console.log(data);

  return (
    <>


      <motion.div id='portfolio'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}>
        <div className="sliderinner">
          <div className="container">
               <div className='title-section'>
                 <h6 className='theme-color'>My Portfolio</h6> 
                 <h1>My Portfolio </h1> 
             </div>
            <div className="wrapper">
              <div className="sliderdetails mt-5 mt-md-6">
                <div className="slidercontent">
                  <h2>{project.num}</h2>
                  <h3>{project.category}  </h3>
                  <p>{project.desc}</p>
                  <ul>
                    {project.stack.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );

                    })}
                  </ul>
                  <div className='border-top'>
                    <br></br>
                    <a href={project.projectlink} target='_blank'>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='tooltip-btn'>
                            <BsArrowUpRight />
                            <TooltipContent>

                              <p>
                                Live Project
                              </p>

                            </TooltipContent>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>

                </div>
                <div className="sliderimg-main">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className='slider-height'
                    onSlideChange={handleSlideChange}
                  >
                    {projects.map((project, index) => {
                      return (
                        <SwiperSlide key={project.id || index} className="sliderimg">
                          <div className="innerslider-part">
                            <img src={project.projimg} alt={project.title} />
                          </div>
                        </SwiperSlide>
                      );
                    })}

                    <Worksliderbtn />
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          {data.slice(2, 3).map((item, index) => {
            return (
              <div key={index}> 
                <div>{item.title} 21</div>
                <div>{item.description}</div>
                <div>{item.link}</div>
              </div>
            );
          })} 212
        </div> */}
      </motion.div>
    </>
  );
};

export default Workslider;
