const express = require('express'); // importa a biblioteca express

const app = express(); // atribui a biblioteca a uma contante para manipular

// trata qual será a resposta da requisição GET a pagina
app.get('/', (req, res) => {
    res.send("hello world!")
});

app.listen(3001);// declara qual porta sera ouvida
