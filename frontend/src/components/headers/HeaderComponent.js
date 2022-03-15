import React, { useEffect, useState } from 'react'
import { AppState } from '../../AppContext';
import {useHistory, useLocation} from 'react-router-dom';


const HeaderComponent = () => {

  const {openLoginModal,setOpenLoginModal,setAuthTab} = AppState();

  const history = useHistory();
  const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
  
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);

  const location = useLocation();

  const showLoginTab = () => {
    setAuthTab("1");
    setOpenLoginModal(!openLoginModal);
  }

  const showSignupTab = () => {
    setAuthTab("2");
    setOpenLoginModal(!openLoginModal);
  }

  useEffect(()=>{
    if(userInfoFromStorage) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  },[location]);
  
  const logoutUser = () => {
    localStorage.removeItem("userDetails");
    setIsUserLoggedIn(false);
    history.push("/");
  }

  const showProfile = () => {
    history.push('/profile');
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
        {!isUserLoggedIn && (
              <>
              <button onClick={showLoginTab} className='btn-nav btn-secondary'>Login</button>
              <button onClick={showSignupTab} className='btn-nav btn-primary'>Sign up</button>  
              </>   
          )}

          {isUserLoggedIn && (
            <>
            <div className='btn-profile'>
              <img onClick={showProfile} src={userInfoFromStorage.userProfilePicture} />
              <button onClick={logoutUser} className='btn-nav btn-primary'>Logout</button>
            </div>
            </>
        )} 
      </div>
      
      
      

    </div>
  )
}

export default HeaderComponent