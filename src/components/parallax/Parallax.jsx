import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './parallax.scss';
import sun from "./../../../public/sun.png";
import planets from "./../../../public/planets.png";

gsap.registerPlugin(ScrollTrigger);

const Parallax = ({ type }) => {
  const sectionRef = useRef();
  const bgRef = useRef();
  const textRef = useRef();
  const starsRef = useRef();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.to(textRef.current, {
          y: progress * 500 + "%",
          overwrite: 'auto'
        });
        gsap.to(bgRef.current, {
          y: progress * 100 + "%",
          overwrite: 'auto'
        });
        gsap.to(starsRef.current, {
          x: progress * 300 + "%",
          overwrite: 'auto'
        });
      }
    });

    return () => trigger.kill();
  }, []);

  const bgImage = type === "services" ? planets : sun;
  const gradient = type === "services"
    ? "linear-gradient(180deg, #111132, #0c0c1d)"
    : "linear-gradient(180deg, #111132, #505064)";

  return (
    <div className="parallax-section">
      <div className="parallax" ref={sectionRef} style={{ background: gradient }}>
        <h1 ref={textRef}>{type === "services" ? "My Role" : "What We Did"}</h1>
        <div className="mountain"></div>
        <div
          className="plants"
          ref={bgRef}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="stars" ref={starsRef}></div>
      </div>
    </div>
  );
};

export default Parallax;
