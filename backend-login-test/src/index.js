const express = require('express');
const app = express();
const port = 3000;
require('./database');

app.use(express.json());
app.use('/api', require('./routes/user'));

app.listen(port, () => {
    console.log(`Servidor en el puerto http://localhost:${port}/api`)
});

