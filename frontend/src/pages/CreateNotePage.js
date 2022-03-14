import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { AppState } from '../AppContext';
import NoteMarkdownComponent from '../components/dialog/NoteMarkdownComponent';

const CreateNotePage = () => {

    const {openNoteMarkdownModal,setOpenNoteMarkdownModal,noteContent,setNoteContent} = AppState();

    const [noteTitle,setNoteTitle] = useState("");
    
    const [noteCategory,setNoteCategory] = useState("");
    const [noteImage,setNoteImage] = useState("");

    const showNoteMarkdownModal = () => {
        setOpenNoteMarkdownModal(!openNoteMarkdownModal);
      }
    
  

  return (
    <div className='container-create-note'>
        <TextField onChange={(e) => setNoteTitle(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Title" variant="outlined" />
        <TextField onChange={(e) => setNoteContent(e.target.value)} multiline minRows={4} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Content" variant="outlined" />
       
        <Button onClick={showNoteMarkdownModal} type='submit' color="primary" variant="contained" style={{marginBottom: 10, alignSelf: "flex-end"}}>Show Markdown</Button>
        <TextField onChange={(e) => setNoteCategory(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Category" variant="outlined" />
        <TextField onChange={(e) => setNoteImage(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Image (Optional)" variant="outlined" />
    
        <Button type='submit' color="primary" variant="contained" style={{marginTop: 10, width: "100%"}}>Create Note</Button>
    
        <NoteMarkdownComponent />

    </div>
  )
}

export default CreateNotePage