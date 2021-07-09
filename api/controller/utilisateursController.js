//Importation de mon model
const Utilisateurs = require('../model/Utilisateurs')


//findById(id)
exports.getUtilisateurs = (req, res) => {

    var query = ""
    if(req.query.s)  query=req.query.s
   
  Utilisateurs.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
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

//Ajout d'clients
exports.addUtilisateurs =  (req, res) =>{
    var user = new Utilisateurs({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        tel:req.body.tel,
        sexe:req.body.sexe,
        isvendeur:req.body.isvendeur
    })
    user.save().then((result)=>{
        res.status(201).json({
            message:'Creation réussie',
            data: result
        })
    })

}

//Pour retourner un seul client
exports.getUtilisateur =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Utilisateurs.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Utilisateur retrouvé',
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

exports.updateUtilisateur =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let user = {}
    if(req.body.nom) user.nom=req.body.nom
    if(req.body.prenom) user.prenom=req.body.prenom
    if(req.body.email) user.email=req.body.email
    if(req.body.tel) user.tel=req.body.tel
    if(req.body.isvendeur) user.isvendeur=req.body.isvendeur
   
    Utilisateurs.update({_id:id}, {$set:user}).exec().then(result => {
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

exports.deleteUtilisateur =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    

    Utilisateurs.remove({_id:id}).exec().then(result => {
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