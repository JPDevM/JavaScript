const express = require('express');
const server = express();

// Permitir que el servidor procese y envíe información en JSON
server.use(express.json());

const contactRouter = require('./routes/contact');

server.use('/contact', contactRouter);

server.listen(3000, () => console.log('Servidor andando en el puerto 3000'));