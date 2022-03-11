import React from 'react'
import { AppState } from '../../AppContext';

const HeaderComponent = () => {

  const {openLoginModal,setOpenLoginModal,setAuthTab} = AppState();

  const showLoginTab = () => {
    setAuthTab("1");
    setOpenLoginModal(!openLoginModal);
  }

  const showSignupTab = () => {
    setAuthTab("2");
    setOpenLoginModal(!openLoginModal);
  }

  

  return (
    <div className='container-header'>

      <div className='container-logo'>
        <span className='txt-logo'>Note</span>Scout
      </div>

      <div>
        <a className='nav-link' href="#">Home</a>
        <a className='nav-link' href="#">About</a>
        <a className='nav-link' href="#">Contact</a>
      </div>

      <div>
        <button onClick={showLoginTab} className='btn-nav btn-secondary'>Login</button>
        <button onClick={showSignupTab} className='btn-nav btn-primary'>Sign up</button>
      </div>
      
      
      

    </div>
  )
}

export default HeaderComponent