const express = require('express'); // importa a biblioteca express
const mongoose = require('mongoose'); // importa a biblioteca mongoose
const requireDir = require('require-dir');


//inicia o app
const app = express(); // atribui a biblioteca a uma contante para manipular

// inicia o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true}); // 'mongodb://user@passworld'

//importa o esquema dos produtos do banco de dados
//require('./src/models/Product');
requireDir("./src/models");// a biblioteca require-dir permite apontar somente para a pasta models

//acessa o model Product para inserir valores no banco de dados
const Product = mongoose.model('Product');


// trata qual será a resposta da requisição GET a pagina
app.get('/', (req, res) => {
    //cria um produto para ser inserido no banco de dados
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: "http://github.com/facebook/react-native"
     });
    
    return res.send("hello world !");
});

app.listen(3001);// declara qual porta sera ouvida
