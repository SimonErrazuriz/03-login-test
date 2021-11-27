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
    const token = jwt.sign({_id: newUser._id}, 'secretKey');
    res.status(200).json({token});
});


module.exports = router;