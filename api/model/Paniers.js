const mongoose = require('mongoose');
const schema= mongoose.Schema;
const PaniersSchema = new schema({
    qte:{
        type:Number,
        require:false,
        default:1
    },
    client:{
        type: schema.Types.ObjectId,
        ref:"utilisateurs"
    },
    article:{
        type: schema.Types.ObjectId,
        ref:"articles"
    }
})

//Pour recuperer mon model créer plus haut
let  Paniers = mongoose.model('paniers', PaniersSchema)
module.exports = Paniers