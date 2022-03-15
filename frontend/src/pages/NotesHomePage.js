import React, { useEffect, useState } from 'react'
import NoteComponent from '../components/cards/NoteComponent'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import { AppState } from '../AppContext';

const NotesHomePage = () => {

    const [notes,setNotes] = useState([]);

    const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
    const history = useHistory();
    useEffect(() => {
        if(!userInfoFromStorage) {
            history.push('/');
          }},[]);

    const {setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant} = AppState();

    const showError = (msg) => {
      setSnackbarVariant("error");
      setMessage(msg);
      setShowMessage(true);
    }

    const fetchNotes = async () => {

        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfoFromStorage.token}`
                }
            }
            const {data} = await axios.get('/api/notes',config);
            console.log('Notes API: ',data);
            setNotes(data); 
            setLoading(false);
        } catch(error) {
            setLoading(true);
            const message = error.response && error.response.data.message?error.response.data.message:error.message;
            showError(message);
            setLoading(false);
        }
        
    }


    useEffect(() => {
        fetchNotes();
    },[]);


  return (
    <div className='container-notes-home-page'>
       <div className='container-notes-data'>
            {notes.length} notes
        </div>

        <div className='container-notes'>
           {
               (notes.map((note) => (
                <NoteComponent key={note._id} noteId={note._id} noteTitle={note.noteTitle} noteContent={note.noteContent} noteCategory={note.noteCategory} noteImageURL={note.noteImageURL} noteTime={note.createdAt} />
           )))
           }
        </div>

        <div className='btn-create-note'>
            +
        </div>

    </div>
  )
}

export default NotesHomePage