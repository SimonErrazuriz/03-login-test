const express = require('express');
const app = express();
const port = 3000;
require('./database');

app.listen(app.get(port));
console.log('Servidor en el puerto: ', port);
