const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Respuesta para probar ruta'));

router.post('/registro', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    /* Token */
    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({ token });
});

router.post('/ingreso', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('email no encontrado');
    if(user.password !== password) return res.status(401).send('contraseña incorrecta');

    const token = jwt.sign({_id: user.id}, 'secretKey');
    return res.status(200).json({token});

});


module.exports = router;