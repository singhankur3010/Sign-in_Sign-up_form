import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Welcome = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch('http://localhost:4000/logout', {
            method: 'POST',
            credentials: 'include',
        });
        if (response.ok) {
            navigate('/signin'); 
            toast.success('Successfully LogOut')
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4">Hello!</Typography>
            <Typography variant="h6">You are logged in.</Typography>
            <Button variant="contained" color="sucess" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Welcome;
