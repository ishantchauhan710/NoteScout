import React from 'react'

const NotesHomePage = () => {
  return (
    <div className='container-notes-home-page'>
       <div className='container-notes-data'>
            27 notes
        </div>

        <div className='container-notes'>
            <div className='note'>
                <img className='note-image' src='https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175__340.png' />
                <span className='note-title'>Note Title</span>
                <span className='note-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                <span className='note-category'>Category</span>
                <span className='note-date'>7 Oct 2001, 12:00 am</span>
            </div>
        </div>

    </div>
  )
}

export default NotesHomePage