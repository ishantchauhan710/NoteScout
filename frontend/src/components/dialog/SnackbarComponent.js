import React, { useEffect, useState } from 'react'
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';


const SnackbarComponent = ({snackbarType,snackbarMessage,showMessage,setShowMessage}) => {

    

    const handleClose = () => {
        setShowMessage(false);
    }

  return (
    <Snackbar open={showMessage} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity={snackbarType} sx={{ width: '100%' }}>
            {snackbarMessage}
        </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent