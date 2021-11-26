const express = require('express');
const app = express();
const port = 3000;
app.listen(app.get(port));
console.log('servidor en el puerto: ', port);