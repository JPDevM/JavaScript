const express = require('express');
const server = express();

// Permitir que el servidor procese y envíe información de tipo "application/json"
server.use(express.json());

// Permitir que el servidor procese y envíe información de tipo "application/x-www-form-urlencoded"
server.use(express.urlencoded({ extended: true }));

const contactRouter = require('./routes/contact');

server.use('/contact', contactRouter);

server.listen(3000, () => console.log('Servidor andando en el puerto 3000'));