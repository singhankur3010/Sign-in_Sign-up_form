// import React, { useState } from 'react';
// import { Avatar, Grid, Paper, Typography, TextField, Button, Link} from '@mui/material';
// import { toast } from 'react-toastify';

// const SignUp = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const paperstyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
//     const headerStyle = { margin: 10 };

//     const handleSignUp = async (e) => {
//         // e.preventDefault();
//         const response = await fetch('http://localhost:4000/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });
//         if (response.ok) {
//             toast.success('Account created successfully!');
//         } else {
//             toast.error('Sign-up failed');
//         }
//     };

//     return (
//         <div>
//             <Grid>
//                 <Paper elevation={20} style={paperstyle}>
//                     <Grid align='center'>
//                         <Avatar />
//                         <h2 style={headerStyle}>Sign Up</h2>
//                         <Typography variant='caption'>Please Fill the Form Below</Typography>
//                     </Grid>
//                     <form onSubmit={handleSignUp}>
//                         <TextField
//                             label="Username"
//                             placeholder="Enter Username"
//                             fullWidth
//                             required
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                         <TextField
//                             label="Password"
//                             placeholder="Enter Password"
//                             type="password"
//                             fullWidth
//                             required
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '16px 0' }}>
//                             Sign Up
//                         </Button>
//                         <Link href="/signin">
//                         Sign In
//                     </Link>
//                     </form>
//                 </Paper>
//             </Grid>
//         </div>
//     );
// };

// export default SignUp;


import React, { useState } from 'react';
import { Avatar, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const paperstyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 10 };

    const handleSignUp = async (e) => {
        e.preventDefault(); 
        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            toast.success('Account created successfully!');
        } else {
            toast.error('Sign-up failed');
        }
    };

    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar />
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption'>Please Fill the Form Below</Typography>
                    </Grid>
                    <form onSubmit={handleSignUp}>
                        <TextField
                            label="Username"
                            placeholder="Enter Username"
                            fullWidth
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '16px 0' }}>
                            Sign Up
                        </Button>
                        <Link href="/signin">
                            Sign In
                        </Link>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default SignUp;
