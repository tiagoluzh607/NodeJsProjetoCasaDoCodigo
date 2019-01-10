require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Filtro para Paginas estaticas
app.use('/estatico', express.static('src/app/public'));


app.use(bodyParser.urlencoded({
    extended: true
}))

const rotas = require('../app/rotas/rotas');
rotas(app); //rotas precisa receber como parâmetro um app

module.exports = app; //exporta um appp jah com as rotas estabelecidas