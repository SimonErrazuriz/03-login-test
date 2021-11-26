const express = require('express');
const app = express();
const port = 3001;
require('./database');

app.use(require('./routes/user'));

app.listen(3000);
console.log('Servidor en el puerto: ', port);
