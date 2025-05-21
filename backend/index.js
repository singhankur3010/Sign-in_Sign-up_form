// const express = require('express');
// const app = express();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// require("dotenv").config();
// const cors = require('cors');
// const PORT = 4000;
// const users = [];
// app.use(cors({
//     origin: 'http://localhost:5173', 
// }));
// app.use(express.json());
// app.use(cookieParser());
// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
// // Sign-up
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     const existingUser = users.find(u => u.username === username);
//     if (existingUser) {
//         return res.status(400).send('User already exists');
//     }
//     const hashedPassword = await bcrypt.hash(password, 8);
//     users.push({ username, password: hashedPassword });
//     res.status(201).send('User created');
// });
// // Sign-in 
// app.post('/signin', async (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(u => u.username === username);
//     if (user && await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
//         res.cookie('token', token, { httpOnly: true, secure: false }); // Set secure to true in production
//         return res.status(200).send('Sign-in successful');
//     }
//     res.status(401).send('Invalid credentials');
// });

// const authenticateToken = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) return res.sendStatus(401);
//     jwt.verify(token, JWT_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };
// app.get('/protected', authenticateToken, (req, res) => {
//     res.send(`Hello ${req.user.username}, you are authenticated!`);
// });
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
//two codes


const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const cors = require('cors');
const PORT = 4000;
const users = [];
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Sign-up
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const userExist = users.find(u => u.username === username);
    if (userExist) {
        return res.status(400).send('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User created');
});
// Sign-in 
app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: false }); 
        return res.status(200).send('Sign-in successful');
    }
    res.status(401).send('Invalid credentials');
});

//logout
app.post('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.status(200).send('Logged out successfully');
});
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
// app.get('/protected', authenticateToken, (req, res) => {
//     res.send(`Hello ${req.user.username}, you are authenticated!`);
// });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
