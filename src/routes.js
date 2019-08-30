const express = require('express');
const routes = express.Router();

const ProductControler = require('./controllers/ProductController');

// trata qual será a resposta da requisição GET ou POST a pagina
routes.get('/products', ProductControler.index);// importa a função assincrona 'index' criada para pegar o registro dentro do mongoDB e que retorna um JSON 
routes.get('/products/:id', ProductControler.show)
routes.post('/products', ProductControler.store);
routes.put('/products/:id', ProductControler.update);
routes.delete('/products/:id', ProductControler.destroy);



// exporta o routes para ser usado dentro do server.js
module.exports = routes;