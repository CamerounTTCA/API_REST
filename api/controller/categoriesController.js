//Importation de mon model
const Categories = require('../model/Categories')


//findById(id)
exports.getCategories = (req, res) => {

    var query = ""
    if(req.query.s)  query=req.query.s
   
  Categories.find({nom: {$regex: query, $options: "$i"}}).exec().then((result) =>{
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
exports.addCategories =  (req, res) =>{
    var cat = new Categories({
        nom:req.body.nom
    })
    cat.save().then((result)=>{
        res.status(201).json({
            message:'Creation réussie',
            data: result
        })
    })

}

//Pour retourner un seul article
exports.getCategorie =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    Categories.findById(id).exec().then(result => {
        res.status(200).json({
            message:'Categorie retrouvé',
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

exports.updateCategorie =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    let cat = {}
    if(req.body.nom) cat.nom=req.body.nom
   
    Categories.update({_id:id}, {$set:cat}).exec().then(result => {
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

exports.deleteCategorie =  (req, res) => {
    const id = req.params.id
    if(id.length != 24) return res.status(400).json({
        message: 'id invalid'
    })
    

    Categories.remove({_id:id}).exec().then(result => {
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