import React from 'react'

const HeaderComponent = () => {
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
        <button className='btn-nav btn-secondary'>Login</button>
        <button className='btn-nav btn-primary'>Sign up</button>
      </div>
      
      
      

    </div>
  )
}

export default HeaderComponent