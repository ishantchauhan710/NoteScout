import { Button, TextField } from '@material-ui/core'
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { AppState } from '../AppContext';
import NoteMarkdownComponent from '../components/dialog/NoteMarkdownComponent';
import {useHistory} from 'react-router-dom';

const EditNotePage = () => {


    const {openNoteMarkdownModal,setOpenNoteMarkdownModal,noteContent,setNoteContent,setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant,editNoteId,setEditNoteId} = AppState();

    const [noteTitle,setNoteTitle] = useState("");
    
    const [noteCategory,setNoteCategory] = useState("");
    const [noteImageURL,setNoteImageURL] = useState("");

    const userInfoFromStorage = localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")): null;
    const showError = (msg) => {
      setSnackbarVariant("error");
      setMessage(msg);
      setShowMessage(true);
    }


    const history = useHistory();



    const showNoteMarkdownModal = () => {
        setOpenNoteMarkdownModal(!openNoteMarkdownModal);
      }

    
      const fetchOldNote = async () => {

        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfoFromStorage.token}`
                }
            }
            const {data} = await axios.get(`/api/notes/editnote/${editNoteId}`,config);
            setNoteTitle(data.noteTitle);
            setNoteContent(data.noteContent);
            setNoteCategory(data.noteCategory);
            setNoteImageURL(data.noteImageURL);
            setLoading(false);
        } catch(error) {
            setLoading(true);
            const message = error.response && error.response.data.message?error.response.data.message:error.message;
            showError(message);
            setLoading(false);
            history.push('/notes');
        }
        
    }


    const updateNote = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${userInfoFromStorage.token}`
            }
          }

          const {data} = await axios.post(`/api/notes/updatenote/${editNoteId}`,{
            noteTitle: noteTitle,
            noteContent: noteContent,
            noteCategory: noteCategory,
            noteImageURL: noteImageURL
          },config);

          setLoading(false);
          history.push('/notes');

        } catch(error) {
          setLoading(true);
          const message = error.response && error.response.data.message?error.response.data.message:error.message;
          showError(message);
          setLoading(false);
        }
    }
    
    useEffect(() => {

      fetchOldNote();

        if(!userInfoFromStorage) {
            history.push('/');
          }},[]);


  return (
    <div className='container-create-note'>
        <TextField value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Title" variant="outlined" />
        <TextField value={noteContent} onChange={(e) => setNoteContent(e.target.value)} multiline minRows={4} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Content" variant="outlined" />
       
        <Button onClick={showNoteMarkdownModal} type='submit' color="primary" variant="contained" style={{marginBottom: 10, alignSelf: "flex-end"}}>Show Markdown</Button>
        <TextField value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Category" variant="outlined" />
        <TextField value={noteImageURL} onChange={(e) => setNoteImageURL(e.target.value)} style={{width: "100%", marginBottom: 10}} id="outlined-basic" label="Note Image URL (Optional)" variant="outlined" />
    
        <Button onClick={(e) => updateNote(e)} color="primary" variant="contained" style={{marginTop: 10, width: "100%"}}>Update Note</Button>
    
        <NoteMarkdownComponent />

    </div>
  )
}

export default EditNotePage