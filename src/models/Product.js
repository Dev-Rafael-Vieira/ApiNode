const mongoose = require('mongoose');

//controi um esquema que será passado ao banco de dados 
const ProductSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,        
    },
    url:{
        type: String,
        required: true,      
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

// registra o model Product na aplicação 
mongoose.model('Product', ProductSchema);