import React, { useState } from 'react'
import Paper from '@mui/material/Paper/Paper';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import Login from '../components/login';
import Signup from '../components/signup'; 


const SignInOutContainer=({sign})=>{
const [value,setValue]=useState(sign)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:340,margin:"20px 75vw"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div 
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="login In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      </Paper>
      
    )
}

export default SignInOutContainer;