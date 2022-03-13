import React, { useEffect, useState } from 'react'
import NoteComponent from '../components/cards/NoteComponent'
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const NotesHomePage = () => {

    const [notes,setNotes] = useState([]);

    const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
    const history = useHistory();
    useEffect(() => {
        if(!userInfoFromStorage) {
            history.push('/');
          }},[]);

    const fetchNotes = async () => {

        try {
            const {data} = await axios.get('/api/notes');
            console.log('Notes API: ',data);
            setNotes(data); 
            
        } catch(e) {
            console.log(e.message);
        }
        
    }

    useEffect(() => {
        fetchNotes();
    },[]);


  return (
    <div className='container-notes-home-page'>
       <div className='container-notes-data'>
            27 notes
        </div>

        <div className='container-notes'>
           {
               (notes.map((note) => (
                <NoteComponent key={note._id} noteTitle={note.noteTitle} noteContent={note.noteContent} noteCategory={note.noteCategory} />
           )))
           }
        </div>

    </div>
  )
}

export default NotesHomePage