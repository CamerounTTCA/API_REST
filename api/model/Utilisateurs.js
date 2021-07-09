const mongoose = require('mongoose');
const UtilisateursSchema = mongoose.Schema({
    nom:{
        type: String,
        required:false,
        default:"tiako"
    },
    prenom:{
        type: String,
        required:false,
        default:"cedric"
    },
    email:{
        type: String,
        required:true
    },
    tel:{
        type:Number,
        required:true
    },
    sexe:{
        type:String,
        required:true
    },
    isvendeur:{
        type:Boolean,
        required:false,
        default:false
    }
})

//Pour recuperer mon model créer plus haut
let  Utilisateurs = mongoose.model('clients', UtilisateursSchema)
module.exports = Utilisateurs