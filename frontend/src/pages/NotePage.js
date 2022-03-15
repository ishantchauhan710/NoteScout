import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AppState } from '../AppContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const NotePage = () => {

  const {setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant,viewNoteId,setViewNoteId} = AppState();

  const [noteContent,setNoteContent] = useState();

  const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;


  const showError = (msg) => {
    setSnackbarVariant("error");
    setMessage(msg);
    setShowMessage(true);
  }


  const fetchNote = async () => {

    try {
        setLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${userInfoFromStorage.token}`
            }
        }
        const {data} = await axios.get(`/api/notes/getnote/${viewNoteId}`,config);
        setNoteContent(data.noteContent); 
        setLoading(false);
    } catch(error) {
        setLoading(true);
        const message = error.response && error.response.data.message?error.response.data.message:error.message;
        showError(message);
        setLoading(false);
    }
    
  }


  useEffect(() => {
    fetchNote();
  },[]);


  return (
    <div className='container-note-page'>
       <ReactMarkdown>{noteContent}</ReactMarkdown>
    </div>
  )
}

export default NotePage