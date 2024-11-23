// index.js
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.send('Hello SSOW from Express! (multi stage)');
});

app.get('/service', (req, res) => {
  res.send('Hello SSOW from Express! (multi stage)');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
