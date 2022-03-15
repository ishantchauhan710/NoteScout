import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import noteAnimation from '../assets/noteanimation.json';
import LoginSignupComponent from '../components/dialog/LoginSignupComponent';
import { AppState } from '../AppContext';
import {useHistory} from 'react-router-dom';

const LandingPage = () => {

  const {openLoginModal,setOpenLoginModal,setAuthTab} = AppState();

  const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
  const history = useHistory();
  useEffect(() => {
      if(userInfoFromStorage) {
          history.push('/notes');
        }},[]);


  const showLoginTab = () => {
    setAuthTab("1");
    setOpenLoginModal(!openLoginModal);
  }




  return (
    <div className='container-landing-page'>

        <div className='container-landing-page-child1'>

        <span className='txt-landing-page-title'>
            A Highly secure place to create and organize your notes
        </span>

        <span className='txt-landing-page-description'>
            Whether you want to write a journal or you want to store your passwords, NoteScout can be an excellent choice for you! Built using the power of express js, this website provides a really simple data storing mechanism to securely store your notes.
        </span>

       
        <button onClick={showLoginTab} className='btn-getstarted-landing-page'>Get Started</button>

        <span className='txt-landing-page-subtitle'>Why choose NoteScout?</span>

        <ul className='list-features'>
            <li>Signup for free</li>
            <li>Create and Modify your Notes</li>
            <li>Use Markdown for formatting your notes</li>
            <li>Store them securely on this website</li>
        </ul>
        
        

            
        </div>

        <div className='container-landing-page-child2'>
            <Lottie animationData={noteAnimation} loop={true} autoplay={true} style={{height: 700}}></Lottie>
        </div>

    <LoginSignupComponent />
        
    </div>
  )
}

export default LandingPage