const mongoose = require('mongoose');
const schema= mongoose.Schema;
const ArticlesSchema = new schema({
    nom:{
        type: String,
        required:false,
        default:"Le Grand Pat"
    },
    prix:{
        type:Number,
        required:true,
    },
    qte:{
        type:Number,
        require:false,
        default:1
    },
    categorie:{
        type: schema.Types.ObjectId,
        ref:"categories"
    },
    vendeur:{
        type: schema.Types.ObjectId,
        ref:"utilisateurs"
    }
})

//Pour recuperer mon model créer plus haut
let  Articles = mongoose.model('articles', ArticlesSchema)
module.exports = Articles