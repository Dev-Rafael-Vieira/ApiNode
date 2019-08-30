const mongoose = require('mongoose'); // importa a biblioteca mongoose

const Product = mongoose.model('Product'); // importa o modelo Product

// exporta uma função assincrona
module.exports = {
    //pega os produtos
    async index(req, res) {
        const products = await Product.find();// products recebe um find ***que poderia receber um paramtro  como where***

        return res.json(products); // retorna um JSON
    },

    //armazena um post no banco de dados
    async store(req, res) {
        const products = await Product.create(req.body); // passa o corpo da requisição para products
    return res.json(products);
    }
};