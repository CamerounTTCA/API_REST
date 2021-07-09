const mongoose = require('mongoose');
const CategoriesSchema = mongoose.Schema({
    nom:{
        type: String,
        required:true
    }
})

//Pour recuperer mon model créer plus haut
let  Categories = mongoose.model('categories', CategoriesSchema)
module.exports = Categories