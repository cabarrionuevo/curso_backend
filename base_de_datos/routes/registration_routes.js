//Al definir un archivo _router.js es una recomendación preguntarte que objeto/elemento vas a manipular
//en este archivo, en este caso manipularemos Usuarios.
const express = require('express');

let registrationController = require('../controllers/registrations');
let router = express.Router();

router.get('/singup',registrationController.new);

router.post('/users',registrationController.create);

// router.route('/users').post(registrationController.create);

module.exports = router;