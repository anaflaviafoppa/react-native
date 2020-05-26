'use strict';

require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireAuth = require('./middleware/requireAuth');
const dotenv = require('dotenv');
/**Routers** */
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri=process.env.MONGODB_PASSWORD;


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (error) => {
  console.error('Error connecting to mongo', error);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3002, () => {
  console.log('App listening on port 3002');
});
