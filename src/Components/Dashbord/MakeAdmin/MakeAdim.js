import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';


const MakeAdim = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://whispering-chamber-86517.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount)
            setSuccess(true);
            setEmail(' ');
            console.log(data)
        })
        e.preventDefault();
    }

    return (
        <div className="screen d-flex justify-content-center pt-5">
            <div>
            <h1 className="text-center fw-bold mb-3">Make admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            type="email"
            onBlur={handleOnBlur}
            label="Email" 
            variant="standard" />
            <Button sx={{backgroundColor: "#e10a1d"}} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully.</Alert>}
            </div>

        </div>
    );
};

export default MakeAdim;