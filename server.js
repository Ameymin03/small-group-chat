// server.js
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

let messages = [];

app.post('/login', (req, res) => {
    const { username } = req.body;
    // Store username in session or in-memory data structure
    res.redirect('/');
});

app.post('/', (req, res) => {
    const { message } = req.body;
    const username = getUsernameFromSessionOrMemory(); // Get username from session or memory
    messages.push({ username, message });
    fs.appendFileSync('messages.txt', `${username}: ${message}\n`);
    // Broadcast message to all connected clients
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    // Return HTML page for main chat
});

app.get('/messages', (req, res) => {
    // Read messages from file or database and send to client
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
