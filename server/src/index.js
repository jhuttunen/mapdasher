const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./db/prisma');
const cors = require('cors');

dotenv.config();

const app = express();

const locationsRouter = require('./routes/locations');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Mapdasher-API')
});

app.use('/api', locationsRouter);

module.exports = app;