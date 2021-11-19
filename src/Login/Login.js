import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../images/herocars-login.png';
import TextField from '@mui/material/TextField';
import { Container, Button, Alert, CircularProgress } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hook/useAuth';




const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = {...loginData};
        newLogindata[field] = value;
        console.log(newLogindata);
        setLoginData(newLogindata);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, history, location)
        e.preventDefault();
        
    }
    

    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sx={{ mt: 10 }} xs={12} md={6}>
            <h2 className="text-center fw-bold">Login</h2>
            <form onSubmit={handleLoginSubmit} >

                <TextField 
                sx={{width: "100%", m: 1}}
                id="standard-basic"
                name="email"
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
                <Button
                sx={{width: "100%", m: 1, mt: 5, backgroundColor: "#e10a1d"}} 
                variant="contained"
                type="submit">
                    Login
                </Button>

                <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register.</Button>
                </NavLink>

            </form>
           
            {
                isLoading &&  <CircularProgress />
            }
            {user?.email && <Alert severity="success">Login Successfully.</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={login} style={{width: "100%"}} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Login;