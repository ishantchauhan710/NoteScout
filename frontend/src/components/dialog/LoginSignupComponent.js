import React from 'react'
import {Box, Tab, Tabs} from '@material-ui/core'
import {TabContext, TabPanel} from '@material-ui/lab'

export const LoginSignupComponent = () => {


    const [value, setValue] = React.useState(2);

  return (
    <div>
    <TabContext value={value}>
        <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <Tab label="Active TAB One" />
            <Tab label="Active TAB Two" />
            </Tabs>
            <TabPanel value={1}>
            Item One
            </TabPanel>
            <TabPanel value={2}>
            Item Two
            </TabPanel>
            <TabPanel value={3}>
            Item Three
            </TabPanel>
        </TabContext>
    </div>
  )
}
