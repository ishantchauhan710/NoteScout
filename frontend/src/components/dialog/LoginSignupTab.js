import {useState} from 'react'
import { Box, Button, Tab, TextField, ThemeProvider} from '@material-ui/core'
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import { appTheme } from '../../styles/theme';
import { AppState } from '../../AppContext';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const LoginSignupTab = () => {

    const {authTab,setAuthTab,loginEmail,setLoginEmail,loginPassword,setLoginPassword,setMessage,loading,setLoading,showMessage,setShowMessage,setSnackbarVariant,registerUsername,setRegisterUsername,registerEmail,setRegisterEmail,registerPassword,setRegisterPassword,registerConfirmPassword,setRegisterConfirmPassword,registerProfilePicture,setRegisterProfilePicture,setOpenLoginModal} = AppState();

    const handleChange = (event, newTabValue) => {
      setAuthTab(newTabValue);
    };

    const history = useHistory();

    const showError = (msg) => {
      setSnackbarVariant("error");
      setMessage(msg);
      setShowMessage(true);
    }

    const configureProfilePicture = (pictures) => {

      if(!pictures) {
        return showError("Please select an image");
      }

      if(pictures.type==='image/jpeg' || pictures.type==='image/png') {
        const data = new FormData();
        data.append('file',pictures);
        data.append('upload_preset','notescout');
        data.append('cloud_name','ishantchauhan');
        fetch("https://api.cloudinary.com/v1_1/ishantchauhan/image/upload",{
          method: "post",
          body: data
        }).then((res)=>res.json())
        .then((data) => {
          console.log('Data:', data);
          setRegisterProfilePicture(data.url.toString());
        })
        .catch((e) => {
          showError(e);
        })
      } else {
        return showError("Image format not supported");
      }

    }
    

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
            setOpenLoginModal(false);
            setLoading(false);
            history.push("/notes");

        } catch(e) {
            setMessage(e.response.data.message);
            setSnackbarVariant("error");
            setShowMessage(true);
            setLoading(false);
        }
    }

    const registerUser = async(e) => {
      e.preventDefault();
      if(registerPassword!==registerConfirmPassword) {
        showError("Passwords do not match");
      } else {
        try {
          const config = {
            headers: {
              "Content-type": "application/json"
            }
          }

          setLoading(true);

          const {data} = await axios.post("/api/auth",{userName: registerUsername,userEmail: registerEmail,userPassword: registerPassword, userProfilePicture: registerProfilePicture},config);
          console.log('API Response:', data);
          localStorage.setItem('userDetails',JSON.stringify(data));
          setOpenLoginModal(false);
          setLoading(false);
          history.push("/notes");
        } catch(e) {
          setMessage(e.response.data.message);
          setSnackbarVariant("error");
          setShowMessage(true);
          setLoading(false);
        }
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

              <form onSubmit={registerUser}>
                  <TextField onChange={(e) => setRegisterUsername(e.target.value)} id="outlined-basic" label="Username" style={{width: '100%'}} variant="outlined" />
                  <TextField onChange={(e) => setRegisterEmail(e.target.value)} id="outlined-basic" label="Email" style={{width: '100%', marginTop: 20}} variant="outlined" />
                      
                  <TextField onChange={(e) => setRegisterPassword(e.target.value)} id="outlined-basic" label="Password" style={{width: '100%', marginTop: 20}} variant="outlined" />
                  <TextField onChange={(e) => setRegisterConfirmPassword(e.target.value)} id="outlined-basic" label="Confirm Password" style={{width: '100%', marginTop: 20}} variant="outlined" />

                  <TextField disabled onClick={() => {document.getElementById('filePicker').click()}} id="outlined-basic" label={registerProfilePicture?"Image Selected":"Choose Image"} style={{width: '100%', marginTop: 20}} variant="outlined" />

                  <input id='filePicker' type="file" onChange={(e) => configureProfilePicture(e.target.files[0])}  style={{display: "none"}} />

                  <Button type='submit' color="primary" variant="contained" style={{marginTop: 20, width: '100%'}}>Signup</Button>
                </form>
            </TabPanel>
        </TabContext>
    </ThemeProvider>  
  )
}
