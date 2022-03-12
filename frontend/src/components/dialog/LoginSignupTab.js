import {useState} from 'react'
import { Box, Button, Tab, TextField, ThemeProvider} from '@material-ui/core'
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import { appTheme } from '../../styles/theme';
import { AppState } from '../../AppContext';
import axios from 'axios';

export const LoginSignupTab = () => {

    const {authTab,setAuthTab,loginEmail,setLoginEmail,loginPassword,setLoginPassword,setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant} = AppState();

    const handleChange = (event, newTabValue) => {
      setAuthTab(newTabValue);
    };

    
    
    
    

    const loginUser = async(e) => {
        e.preventDefault();
        console.log('Email: ',loginEmail, 'Password: ',loginPassword);
        try {
            const config = {
              headers: {
                "Content-type": "application/json"
              }
            }

            setLoading(true);

            const {data} = await axios.post("/api/auth/login",{userEmail: loginEmail,userPassword: loginPassword},config);
            console.log('API Response:', data);
            localStorage.setItem('userDetails',JSON.stringify(data));
            setLoading(false);

        } catch(e) {
            setMessage(e.response.data.message);
            setSnackbarVariant("error");
            setShowMessage(true);
            console.log(loading);
            setLoading(false);
        }
    }

  return (
      <ThemeProvider theme={appTheme}>
        <TabContext value={authTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList TabIndicatorProps={{style: {background:'#ff4848'}}}variant="fullWidth" onChange={handleChange}>
                <Tab label="Login" value="1" />
                <Tab label="Signup" value="2" />
            </TabList>
            </Box>

            <TabPanel value="1">
               <form onSubmit={loginUser}>
                  <TextField onChange={(e) => setLoginEmail(e.target.value)} id="outlined-basic" label="Email" style={{width: '100%'}} variant="outlined" />
                  <TextField onChange={(e) => setLoginPassword(e.target.value)} id="outlined-basic" label="Password" style={{width: '100%', marginTop: 20}} variant="outlined" />
                 <Button type='submit' color="primary" variant="contained" style={{marginTop: 20, width: '100%'}}>Login</Button>
               </form>
            </TabPanel>

            <TabPanel value="2">
                <TextField id="outlined-basic" label="Username" style={{width: '100%'}} variant="outlined" />
                <TextField id="outlined-basic" label="Email" style={{width: '100%', marginTop: 20}} variant="outlined" />
                    
                <TextField id="outlined-basic" label="Password" style={{width: '100%', marginTop: 20}} variant="outlined" />
                <TextField id="outlined-basic" label="Confirm Password" style={{width: '100%', marginTop: 20}} variant="outlined" />
                    
                <Button color="primary" variant="contained" style={{marginTop: 20, width: '100%'}}>Signup</Button>
            </TabPanel>
        </TabContext>
    </ThemeProvider>  
  )
}
