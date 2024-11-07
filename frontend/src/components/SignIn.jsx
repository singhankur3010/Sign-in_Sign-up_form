// import React, { useState } from "react";
// import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { toast } from 'react-toastify';

// const SignIn = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const paperStyle = {
//         padding: 20,
//         height: "70vh",
//         width: 280,
//         margin: "20px auto",
//     };
//     const avatarstyle = { backgroundColor: "red" };
//     const btnstyle = { margin: "8px 0" };

//     const handleSignIn = async (e) => {
//         // e.preventDefault();
//         const response = await fetch('http://localhost:4000/signin', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: JSON.stringify({ username, password }),
//         });
//         if (response.ok) {
//             toast.success('Login successful!');
//         } else {
//             toast.error('Sign-in failed');
//         }
//     };

//     return (
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align="center">
//                     <Avatar style={avatarstyle}>
//                         <LockIcon />
//                     </Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <form onSubmit={handleSignIn}>
//                     <TextField
//                         label="Username"
//                         placeholder="Enter Username"
//                         fullWidth
//                         required
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         style={{ marginBottom: '16px' }}
//                     />
//                     <TextField
//                         label="Password"
//                         placeholder="Enter Password"
//                         type="password"
//                         fullWidth
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <FormControlLabel
//                         control={<Checkbox name="checkedB" color="primary" />}
//                         label="Remember Me"
//                     />
//                     <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle}>
//                         Sign In
//                     </Button>
//                 </form>
//                 <Typography>
//                     <Link href="#" >
//                         Forgot Password?
//                     </Link>
//                 </Typography>
//                 <Typography>
//                     Do You Have An Account?
//                     <Link href="/signup">
//                         Sign Up
//                     </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     );
// };

// export default SignIn;

import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarstyle = { backgroundColor: "red" };
    const btnstyle = { margin: "8px 0" };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            toast.success('Login successful!');
            navigate('/welcome');
        } else {
            toast.error('Sign-in failed');
        }
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}>
                        <LockIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSignIn}>
                    <TextField
                        label="Username"
                        placeholder="Enter Username"
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ marginBottom: '16px' }}
                    />
                    <TextField
                        label="Password"
                        placeholder="Enter Password"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />}
                        label="Remember Me"
                    />
                    <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle}>
                        Sign In
                    </Button>

                </form>
                <Typography>
                    <Link href="#" >
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography>
                    Do You Have An Account?
                    <Link href="/signup">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default SignIn;
