import React from 'react'
import { useHistory } from 'react-router-dom';
import { AppState } from '../../AppContext';

const NoteComponent = ({noteId,noteTitle,noteContent,noteCategory,noteImageURL,noteTime}) => {
  
  const {setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant,editNoteId,setEditNoteId,viewNoteId,setViewNoteId} = AppState();

  const isValidImageURL = (imgUrl) => {
    if (typeof imgUrl !== 'string') {
      return false;
    }
    return (imgUrl.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
  }

  const history = useHistory();
  const editNote = () => {
    setEditNoteId(noteId);
    history.push(`/editnote/${noteId}`);
  }

  const showError = (msg) => {
    setSnackbarVariant("error");
    setMessage(msg);
    setShowMessage(true);
  }
  
  const openNotePage = (noteId) => {
      setViewNoteId(noteId)
      history.push(`/note/${noteId}`);
}

  return (
    <div className='note'>
        <img className='note-image' src={isValidImageURL(noteImageURL)?noteImageURL:'https://homestaymatch.com/images/no-image-available.png'} />
        <div className='note-body' onClick={() => openNotePage(noteId)} >
          <span className='note-title'>{noteTitle}</span>
          <span className='note-content'>{noteContent}</span>
          <span className='note-category'>{noteCategory}</span>
          <span className='note-date'>7 Oct 2001, 12:00 am</span>
        </div>
        <button onClick={editNote} className='btn-note-controls'><i className="material-icons">edit</i></button>



    </div>
  )
}

export default NoteComponent