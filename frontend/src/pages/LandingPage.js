import React, { useState } from 'react'
import Lottie from 'lottie-react';
import noteAnimation from '../assets/noteanimation.json';
import { LoginSignupComponent } from '../components/dialog/LoginSignupComponent';
import { Modal } from '@material-ui/core';

const LandingPage = () => {

    const [toggleModal,setToggleModal] = useState(false);


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

        <span className='txt-landing-page-subtitle'>Why choose NoteScout?</span>

        <ul className='list-features'>
            <li>Easily organize your notes</li>
            <li>Export them in PDF format</li>
            <li>Share them with your friends and collegues</li>
            <li>Store them securely on this website</li>
        </ul>
        
        

            
        </div>

        <div className='container-landing-page-child2'>
            <Lottie animationData={noteAnimation} loop={true} autoplay={true} style={{height: 700}}></Lottie>
        </div>

    
        
    </div>
  )
}

export default LandingPage