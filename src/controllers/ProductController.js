const mongoose = require('mongoose'); // importa a biblioteca mongoose

const Product = mongoose.model('Product'); // importa o modelo Product

// exporta uma função assincrona
module.exports = {
    //pega os produtos
    async index(req, res) {
        const products = await Product.find();// products recebe um find ***que poderia receber um paramtro  como where***

        return res.json(products); // retorna um JSON
    },

    async show(req, res){
        const products = await Product.findById(req.params.id); // pega o parametro id 

        return res.json(products);
    },

    //armazena um post no banco de dados
    async store(req, res) {
        const products = await Product.create(req.body); // passa o corpo da requisição para products
    
        return res.json(products);
    },

    //recebe um id e atualiza com o corpo da requisição
    async update(req, res) {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true}) //{new : true} serve para retornar o valor já atualizado
    
        return res.json(products);
    },

    //recebe um id e deleta da base de dados
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); // retorna uma mensagem vazia de sucesso
    }
};