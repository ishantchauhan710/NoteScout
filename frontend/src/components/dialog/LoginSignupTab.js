import { Box, Button, Tab, Tabs, TextField, ThemeProvider} from '@material-ui/core'
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import { appTheme } from '../../styles/theme';
import React from 'react'
import { AppState } from '../../AppContext';

export const LoginSignupTab = () => {

    const {authTab,setAuthTab} = AppState();

    const handleChange = (event, newTabValue) => {
      setAuthTab(newTabValue);
    };

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
                <TextField id="outlined-basic" label="Email" style={{width: '100%'}} variant="outlined" />
                <TextField id="outlined-basic" label="Password" style={{width: '100%', marginTop: 20}} variant="outlined" />
                <Button color="primary" variant="contained" style={{marginTop: 20, width: '100%'}}>Login</Button>
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
