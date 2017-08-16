const express = require('express');
require('./models/User');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongodbURI);

const app = express();

require('./routes/authRoutes')(app);
//the require statement returns a function, and then we call it with the app argument

const PORT = process.env.PORT || 5000;
app.listen(PORT);
