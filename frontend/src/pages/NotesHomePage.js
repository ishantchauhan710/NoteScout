import React, { useEffect, useState } from 'react'
import NoteComponent from '../components/cards/NoteComponent'
import axios from 'axios'

const NotesHomePage = () => {

    const [notes,setNotes] = useState([]);

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