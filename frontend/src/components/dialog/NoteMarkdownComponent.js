import { Box, Modal } from '@material-ui/core'
import React from 'react'
import { AppState } from '../../AppContext';
import ReactMarkdown from 'react-markdown';

const NoteMarkdownComponent = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        bgcolor: '#ffffff',
        boxShadow: 24,
      };

    const {openNoteMarkdownModal,setOpenNoteMarkdownModal,noteContent,setNoteContent} = AppState();

    const handleClose = () => setOpenNoteMarkdownModal(false);

    const showNoteMarkdownModal = () => {
        setOpenNoteMarkdownModal(!openNoteMarkdownModal);
      }
    
   
  return (
        <Modal
        open={openNoteMarkdownModal}
        onClose={handleClose}>

        <Box sx={style}>
            <div className='container-btn-notemarkdown'>
            <span className='txt-note-markdown-caption'>Markdown Output</span>    
            <button onClick={showNoteMarkdownModal} className='btn-close-note-markdown-modal'><i class="material-icons">close</i></button>
            </div>
            <div className='container-notemarkdown'>
                <ReactMarkdown>{noteContent}</ReactMarkdown>
            </div>
        </Box>
        
        </Modal>
  )
}

export default NoteMarkdownComponent