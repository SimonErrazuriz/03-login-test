const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/03-login-test')
        .then(db => console.log('Conectado a la base de datos'))
        .catch(err => console.log(err));