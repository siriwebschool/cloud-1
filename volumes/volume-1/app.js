const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Volume Demo!');
  });

// Endpoint to create a file
app.get('/create-file', (req, res) => {
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }
    const filePath = path.join(tempDir, 'generated-file.txt'); 
    fs.writeFileSync(filePath, 'Hello from inside the container - file generated with its content !', 'utf8');
    res.send(`File created at: ${filePath}`);
});

// Endpoint to list files
app.get('/list-files', (req, res) => {
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        return res.send('No files & Directory does not exist.');
    }
    const files = fs.readdirSync(tempDir);
    res.json({ files });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
