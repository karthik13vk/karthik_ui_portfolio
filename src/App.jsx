import { useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import './App.css'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarnew from './components/navbar/Navbarnew';
// import Banner from './components/Banner/Banner';
// import { motion } from "framer-motion";

import Parallax from './components/parallax/Parallax';
import Workslider from './components/workslider/Workslider';
import Contactus from './components/contactus/Contactus';
import Cursor from './components/cursor/cursor';
import Services from './components/services/Services';
import Tabview from './components/tab/Tabview';
import Loader from './components/workslider/preloader/preloader';
import About from './components/about/about';
import Marquee from './components/Marqueerunning/marquee';
import Marqueerunning from './components/Marqueerunning/marquee';
import Banner from './components/Banner/Banner';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);  // State to trigger fade out

  useEffect(() => {
    // Set a timer to hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);  // Trigger fade-out effect
      // Hide the loader completely after fade-out
      setTimeout(() => {
        setLoading(false);  // Hide the loader after fade-out (1 second delay)
      }, 1000);  // Wait for 1 second to complete fade-out
    }, 2000);  // Show loader for 2 seconds

    // Clear the timeout when the component is unmounted or re-renders
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill(); // Cleanup
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <>
            <Cursor />
            <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
              <Loader />
            </div>
          </>
        ) : (
          <section className='p-0'>
            <Navbarnew />
          </section>
        )}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <section className='pb-0'>
              <Banner />
            </section>
            <section className='p-0'>
              <Marqueerunning />
            </section>
            <section className=''>
              <About />
            </section>
            <section className='p-0'>
              <Parallax type="services" />
            </section>
            <section>
              <Tabview />
            </section>
            <section className='p-0'>
              <Marqueerunning />
            </section>
            <section>
              <Workslider />
            </section>
            <section className='p-0'>
              <Parallax type="otherType" />
            </section>
            <section className='pb-0'>
              <Contactus />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
