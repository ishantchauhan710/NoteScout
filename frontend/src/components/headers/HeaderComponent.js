import React from 'react'
import { AppState } from '../../AppContext';

const HeaderComponent = () => {

  const {openLoginModal,setOpenLoginModal} = AppState();

  const toggleModal = () => {
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
        <button onClick={toggleModal} className='btn-nav btn-secondary'>Login</button>
        <button onClick={toggleModal} className='btn-nav btn-primary'>Sign up</button>
      </div>
      
      
      

    </div>
  )
}

export default HeaderComponent