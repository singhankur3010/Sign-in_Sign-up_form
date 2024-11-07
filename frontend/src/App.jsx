// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Typography variant="h6" style={{ flexGrow: 1 }}>
//                             Authentication App
//                         </Typography>
//                         <Button color="inherit" component={Link} to="/signin">Sign In</Button>
//                         <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//                     </Toolbar>
//                 </AppBar>
//                 <Routes>
//                     <Route path="/signin" element={<SignIn />} />
//                     <Route path="/signup" element={<SignUp />} />
//                 </Routes>
//                 <ToastContainer />
//             </div>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Authentication App
                        </Typography>
                        <Button color="inherit" component={Link} to="/signin">Sign In</Button>
                        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
