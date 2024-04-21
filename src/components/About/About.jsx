import React from 'react'
import './About.css'
import Lottie from 'lottie-react'
import char from './Op2mFCXf4d.json'
import char2 from './aboutme.json'
function About() {
  return (
    <div className='about'>
      <div className='intro'>
        <h2 id='top'>My Intro</h2>
        <h1 id='bottom'>About Me</h1>
      </div>




      <div className='contain'>
      {/* <div  className='char2'>
      </div> */}
        <Lottie animationData={char2} loop= {true} className='img'/>

      <div className='contain2'>
      <div className='boxes'>
        <div className='box1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9584e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        <h1 className='exp'>
          Experience
        </h1>
        <h2 className='fresher'>
          Fresher
        </h2>
        </div>
        <div className='box2'>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9584e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
        <h1 className='complete'>
          Completed
        </h1>

        <h2 className='fresher'>
          10 + Projects
        </h2>
        </div>
        <div className='box3'>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9584e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>

        <h1 className='support'>
          Support
        </h1>

        <h2 className='fresher'>
        24/7
        </h2>

          
        </div>
      </div>
      <div className='txt'>
        
      
        Frontend Developer. I create web pages with UI / UX user interfaces, 
        
      </div>
      <div className='contact-me'> <button className='btn3'>
        <a href="#contact" id='btn3'> Contact Me</a></button></div>
      </div>
      </div>
    </div>
  )
}

export default About
