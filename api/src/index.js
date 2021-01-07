const express = require('express');
const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid');

uuidv4();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Rocking and rolling at http://localhost:${port}`);
});
