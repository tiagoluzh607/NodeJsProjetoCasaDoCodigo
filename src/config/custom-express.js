const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app); //rotas precisa receber como parâmetro um app

module.exports = app; //exporta um appp jah com as rotas estabelecidas