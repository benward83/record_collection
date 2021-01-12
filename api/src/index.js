const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.contentType('application/json');
  next();
});

app.use('/artists', require('./routes/artists'));
app.use('/songs', require('./routes/songs'));
app.use('/vinyls', require('./routes/vinyls'));

app.listen(port, () => {
  console.log(`Rocking and rolling at http://localhost:${port}`);
});
