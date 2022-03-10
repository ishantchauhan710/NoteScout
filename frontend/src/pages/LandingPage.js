import React from 'react'
import Lottie from 'lottie-react';
import noteAnimation from '../assets/noteanimation.json';

const LandingPage = () => {
  return (
    <div className='container-landing-page'>

        <div className='container-landing-page-child1'>

        <span className='txt-landing-page-title'>
            A Highly secure place to create and organize your notes
        </span>

        <span className='txt-landing-page-description'>
            Whether you want to write a journal or you want to store your passwords, NoteScout can be an excellent choice for you! Built using the power of express js, this website provides a really strong encryption mechanism to securely store your notes.
        </span>

       
        <button className='btn-getstarted-landing-page'>Get Started</button>
    
            
        </div>

        <div className='container-landing-page-child2'>
            <Lottie animationData={noteAnimation} loop={true} autoplay={true} style={{height: 700}}></Lottie>
        </div>


        
    </div>
  )
}

export default LandingPage