const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '.db.json')));
    newNote.id = Date.now().toString();

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '.db.json'), JSON.stringify(notes));
    res.json(newNote);
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${3001}`);
});