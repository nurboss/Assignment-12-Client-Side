import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../images/register.png';
import TextField from '@mui/material/TextField';
import { Container, Button, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../Hook/useAuth';

const Registration = () => {
    
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = {...loginData};
        newLogindata[field] = value;
        console.log(newLogindata);
        setLoginData(newLogindata);

    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match!')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
        console.log(loginData);
        
    }

   
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sx={{ mt: 10 }} xs={12} md={6}>
            <h2 className="text-center fw-bold">Register</h2>
            {!isLoading &&
            
            <form onSubmit={handleLoginSubmit} >

                <TextField 
                sx={{width: "100%", m: 1}}
                id="standard-basic"
                name="name"
                onBlur={handleOnBlur}
                label="Your Name" 
                variant="standard" />

                <TextField 
                sx={{width: "100%", m: 1}}
                id="standard-basic"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                label="Your Email" 
                variant="standard" />

                <TextField 
                sx={{width: "100%", m: 1}}
                id="standard-basic" 
                label="Your Password" 
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                <TextField 
                sx={{width: "100%", m: 1}}
                id="standard-basic" 
                label="Retype your Password" 
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                <Button
                sx={{width: "100%", m: 1, mt: 5, backgroundColor: "#e10a1d" }} 
                variant="contained"
                type="submit">
                    Register
                </Button>

                <NavLink  style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login.</Button>
                </NavLink>

            </form>}
            {
                isLoading &&  <CircularProgress />
            }
            {user?.email && <Alert severity="success">User Created Successfully.</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={login} style={{width: "100%"}} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Registration;



