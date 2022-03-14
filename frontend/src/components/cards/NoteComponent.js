import React from 'react'

const NoteComponent = ({noteId,noteTitle,noteContent,noteCategory,noteImageURL,noteTime}) => {
  
  const isValidImageURL = (imgUrl) => {
    if (typeof imgUrl !== 'string') {
      return false;
    }
    return (imgUrl.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
  }
  

  return (
    <div className='note'>
        <img className='note-image' src={isValidImageURL(noteImageURL)?noteImageURL:'https://homestaymatch.com/images/no-image-available.png'} />
        <span className='note-title'>{noteTitle}</span>
        <span className='note-content'>{noteContent}</span>
        <span className='note-category'>{noteCategory}</span>
        <span className='note-date'>7 Oct 2001, 12:00 am</span>
    </div>
  )
}

export default NoteComponent