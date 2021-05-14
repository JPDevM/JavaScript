const express = require('express');
const app = express();

// Server Listen and running
app.listen(3000, () => console.log('Server ready'));

// Routes system 
const imagesRouter = require('./routes/imagesRouter');
app.use('/images', imagesRouter);