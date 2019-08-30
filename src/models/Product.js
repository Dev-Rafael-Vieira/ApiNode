const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
 
// adiciona o plugin do mongoosePaginate ao ProductSchema para que ele seja envocado posteriormente
ProductSchema.plugin(mongoosePaginate);

// registra o model Product na aplicação  
mongoose.model('Product', ProductSchema);