import React from 'react'

const NoteComponent = ({noteId,noteTitle,noteContent,noteCategory,noteTime}) => {
  return (
    <div className='note'>
        <img className='note-image' src='https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175__340.png' />
        <span className='note-title'>{noteTitle}</span>
        <span className='note-content'>{noteContent}</span>
        <span className='note-category'>{noteCategory}</span>
        <span className='note-date'>7 Oct 2001, 12:00 am</span>
    </div>
  )
}

export default NoteComponent