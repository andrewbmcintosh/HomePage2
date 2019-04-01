const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

require('dotenv').config();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = process.env.MONGO_URI_KEY;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/members', require('./routes/api/members'));
app.use('/api/pings', require('./routes/api/pings'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
