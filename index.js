// Importer express 
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const articles = require('./api/router/articles')
const utilisateurs = require('./api/router/utilisateurs')
const categories = require('./api/router/categories')
const paniers = require('./api/router/paniers')
// Initialise l'application 
const app = express();
dotenv.config()


// Configure bodyparser to handle post requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Connecter a la bd swb_maket"));



// Configuration du port du serveur 
const port = process.env.PORT || 8080 ;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/articles', articles)
app.use('/utilisateurs', utilisateurs)
app.use('/categories', categories)
app.use('/paniers', paniers)
// Lancer l'application pour écouter le port spécifié 
app.listen(port, function () { 
     console.log("Exécution de RestHub sur le port " + port); 
});