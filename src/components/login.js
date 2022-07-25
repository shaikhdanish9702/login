import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import  Checkbox  from '@mui/material/Checkbox/Checkbox';
import { useState } from 'react';

const Login = ({ handleChange }) => {
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
       const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);


     function handleLogin(e) {
    e.preventDefault();
         let pass = localStorage
             .getItem(passwordlog);
    let mail = localStorage.getItem(emaillog);
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
      console.log("incorrect");

    } else {
      setHome(!home);
      console.log("succes")
      setFlag(false);
    }
  }

    const paperStyle={padding :20,height:'59vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login In</h2>
                </Grid>
                
                <TextField label='Username' onChange={(e)=>setEmaillog(e.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='Password' onChange={(e)=>setPasswordlog(e.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                    <Button type='submit' onClick={handleLogin} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                {flag && (
                    
                       alert("Fill correct Info else keep trying.")
                    )}
        
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                    </Typography>
                    
            </Paper>
        </Grid>
    )
}

export default Login