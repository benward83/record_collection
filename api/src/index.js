const express = require('express');
const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid');

uuidv4();

app.use('/artists', require('./routes/artists'));
app.use('/songs', require('./routes/songs'));
app.use('/vinyls', require('./routes/vinyls'));

app.listen(port, () => {
  console.log(`Rocking and rolling at http://localhost:${port}`);
});
