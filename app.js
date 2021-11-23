const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
require('dotenv').config();

console.log(process.env)

const app = express();

// Directorio publico

app.use( express.static('public') );

app.use(bodyParser.json());

app.use(cors())

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

app.listen(process.env.PORT, () => {

console.log('Servidor corriendo en el puerto', process.env.PORT)

});