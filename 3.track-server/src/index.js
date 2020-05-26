const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUri = process.env.MONGODB_INSTANCE;
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

app.get('/', (req, res) => {
  res.send('hi there!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
