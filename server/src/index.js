const express = require('express');
const app = express();
const cors = require('cors');

const locationsRouter = require('./routes/locations');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Mapdasher-API')
});

app.use('/api/locations', locationsRouter);

module.exports = app;