const express = require('express');
const app = express();
const cors = require('cors');

const locationsRouter = require('./routes/locations');
app.use(cors());
app.use('/api/locations', locationsRouter);

module.exports = app;