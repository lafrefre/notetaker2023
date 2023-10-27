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

const dbFilePath = path.join(__dirname, 'db.json');

// Routes for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
// Routes for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
// Routes for all of the notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = fs.readFileSync(dbFilePath, 'utf-8');
    newNoteData = Date.now().toString();
    notes.push(newNote);
    fs.writeFileSync(dbFilePath, JSON.stringify(notesData));
    res.json(newNote);
});
    res.status(500).json({ error: 'Could not save note' });
try {
    // Routes for all of the notes
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        const notes = fs.readFileSync(dbFilePath, 'utf-8');
        newNoteData = Date.now().toString();
        notes.push(newNote);
        fs.writeFileSync(dbFilePath, JSON.stringify(notesData));
        res.json(newNote);
    });
} catch (err) {
    res.status(500).json({ error: 'Could not save note' });
}

try {
    // Routes for all of the notes
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        const notes = fs.readFileSync(dbFilePath, 'utf-8');
        newNoteData = Date.now().toString();
        notes.push(newNote);
        fs.writeFileSync(dbFilePath, JSON.stringify(notesData));
        res.json(newNote);
    });
} catch (err) {
    res.status(500).json({ error: 'Could not save note' });
}

// BEGIN: be15d9bcejpp
app.post('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, './public/style.css'));
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, './index.js'));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
// END: be15d9bcejpp
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });


app.post('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, './public/style.css'));
    });
    
app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, './index.js'));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${3001}`);
});