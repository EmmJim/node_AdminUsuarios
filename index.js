const express = require('express');
const server = express();
const mongooose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//Importar variables de entorno locales
require('dotenv').config({path: 'variables.env'});


//Conectar a Mongo
mongooose.Promise = global.Promise;
mongooose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongooose.set('debug', true);

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use('/', routes());

//Leer localhost de variables y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//Servidor 
server.listen(port, host, () => {
    console.log('Servidor Funcionando');
})