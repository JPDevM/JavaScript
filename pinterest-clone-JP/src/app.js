const express = require('express');
const app = express();

// Para parsear el body que viene en el request
app.use(express.urlencoded({ extended: false }));

// Para recibir y enviar información en JSON 
app.use(express.json());

// Server Listen and running
app.listen(3000, () => console.log('Server ready'));

// Routes system 
const imagesRouter = require('./routes/imagesRouter');
app.use('/images', imagesRouter);