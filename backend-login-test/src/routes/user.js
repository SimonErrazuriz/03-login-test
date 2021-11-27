const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get('/', (req, res) => res.send('Respuesta para probar ruta'));

router.post('/registro', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.send('Registrado')
});


module.exports = router;