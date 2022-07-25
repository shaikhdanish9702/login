import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import './App.css';
import SignInOutContainer from './containers';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';

function App() {
  const [sign, setsign] = useState(0);
  const [visible, setvisible] = useState(false);
  const [value, setValue] = useState(sign);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  const loginClick = () => {
    if (visible == false) {
        setvisible(true);
      setsign(0);
    } else {
      setvisible(false);
    }
  }
  const signClick = () => {
    if (visible == false ) {
      setvisible(true);
      setsign(1)
    } else {
      setvisible(false);
    }
  }
  return (
    <>
      <div className="App">
        <div>
          <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Home" />
    
            <Tab label="About" />
          <Tab label="Contact" />

          </Tabs>
          <TabPanel value={value} index={0}>
            <h1>Home</h1>
          </TabPanel>
          <TabPanel value={value} index={1}>
     <h1>about</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
    <h1>Contact</h1>
      </TabPanel>
        </div>
        <div className='LoginSignupContainer'>

          <button className='Btn' onClick={loginClick}>login</button>
      <button className='Btn' onClick={signClick}>Sign-up</button>
        </div>
      </div>
      {visible ? <SignInOutContainer sign={sign} />:""}
     
    </>
  );
}

export default App;
