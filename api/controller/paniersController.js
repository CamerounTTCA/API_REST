//Importation de mon model
const Paniers = require('../model/Paniers')


//findById(id)
exports.getPaniers = (req, res) => {

   
  Paniers.find().exec().then((result) =>{
      res.status(200).json({
          count: result.length,
          data: result
      })
  }).catch(error =>{
      console.log(error)
      res.status(500).json({
          error
      })
  })
}

//Ajout d'articles
exports.addPaniers =  (req, res) =>{
    var pan = new Paniers({
        qte:req.body.qte,
        article:req.body.article,
        client:req.body.client,
       
    })
    pan.save().then((result)=>{
        res.status(201).json({
            message:'Cration réussie',
            data: result
        })
    })

}

//Pour retourner un seul article
exports.getPanier =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Paniers.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Panier retrouvé',
            data :result
        })
    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}
//update

exports.updatePanier =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let pan = {}
    if(req.body.nom) pan.nom=req.body.nom
    if(req.body.prix) pan.prix=req.body.prix
    if(req.body.qte) pan.qte=req.body.qte
    if(req.body.categorie)  pan.categorie=req.body.categorie
    if(req.body.vendeur)  pan.vendeur=req.body.vendeur
 
    Paniers.update({_id:id}, {$set:pan}).exec().then(result => {
        res.status(200).json({
            message : 'succes',
            data : result
        })

    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}

exports.deletePanier =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    

    Paniers.remove({_id:id}).exec().then(result => {
        res.status(200).json({
            message : 'succes',
            data : result
        })

    }).catch(error =>{
        console.log(error)
        res.status(500).json({
            error
        })
    })
}