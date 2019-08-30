const express = require('express');
const routes = express.Router();

const ProductControler = require('./controllers/ProductController');

// trata qual será a resposta da requisição GET a pagina
routes.get('/products', ProductControler.index);// importa a função assincrona 'index' criada para pegar o registro dentro do mongoDB e que retorna um JSON 

routes.post('/products', ProductControler.store);



// exporta o routes para ser usado dentro do server.js
module.exports = routes;