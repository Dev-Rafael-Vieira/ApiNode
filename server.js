const express = require('express'); // importa a biblioteca express
const mongoose = require('mongoose'); // importa a biblioteca mongoose
const requireDir = require('require-dir'); // importa a biblioteca require-dir
const cors = require('cors'); // importa a biblioteca cors responsavel por liberar o acesso da aplicação a IPs externos



//inicia o app
const app = express(); // atribui a biblioteca a uma contante para manipular

app.use(express.json()); //permite o envio de dados para aplicação no formato de JSON

app.use(cors()); // faz a atribuição da biblioteca 'cors'

// inicia o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true}); // 'mongodb://user@passworld'

//importa o esquema dos produtos do banco de dados
//require('./src/models/Product'); //versão sem a biblioteca require-dir
requireDir("./src/models");// a biblioteca require-dir permite apontar somente para a pasta models



//roteia as requisições que batem em '/api' e envia para './src/routes' sejam elas GET, POST, PUT ou DELETE
app.use('/api', require('./src/routes'));

app.listen(3001);// declara qual porta sera ouvida
