import React from "react";
import "./About.css";
import Lottie from "lottie-react";
import char2 from "./aboutme.json";
import { motion } from "framer-motion";

const variants = {
  initial: {
   y:300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};



function About({Light}) {
  return (
    <div className="about">
      <div className="intro">
        <h2 id="top">My Intro</h2>
        <h1 id="bottom">About Me</h1>
      </div>

      <div className="contain">
        {/* <div  className='char2'>
      </div> */}
        <Lottie animationData={char2} loop={true} className="img" />

        <motion.div className="contain2" 
         variants={variants}
      initial="initial"
      whileInView="animate">
          <div className="boxes">
            <div className={!Light ? 'lightBox1' : 'box1'} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9584e6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-award"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <h1 className="exp"  id={!Light ? 'lightComplete' : 'complete'}>Experience</h1>
              <h2 className="fresher"  id={!Light ? 'lightCompl' : 'complete'}>Fresher</h2>
            </div>
            <motion.div className={!Light ? 'lightBox2' : 'box2'}   variants={variants}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9584e6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-briefcase"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
              <h1 className="complete" id={!Light ? 'lightComplete' : 'complete'}>Completed</h1>

              <h2 className="fresher"  id={!Light ? 'lightCompl' : 'complete'}>10 + Projects</h2>
            </motion.div>
            <motion.div className={!Light ? 'lightBox3' : 'box3'}  variants={variants}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9584e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>

              <h1 className="support"  id={!Light ? 'lightComplete' : 'complete'}>Education</h1>

              <h2 className="fresher"  id={!Light ? 'lightCompl' : 'complete'}>B.Tech</h2>
            </motion.div>
          </div>
          <motion.div className={!Light ? 'lighttxt' : 'txt'} variants={variants}>
            Frontend Developer. I create web pages with UI / UX user interfaces,
          </motion.div>
          <div className="contact-me">
            {" "}
            <motion.button className="btn3" variants={variants}>
              <a href="#contact" id="btn3">
                {" "}
                Contact Me
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
