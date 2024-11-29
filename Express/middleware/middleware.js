const express = require('express')
const app = express()

// middleware de logs

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next()
}

function auth(req, res, next) {
    const token = req.headers['autorisation']

    if (token === 'mon-token-secret') {
        next()
    } else {
        res.status(401).send('acces non autorisé')
    }
}

// utilsation du middleware pour une route protégé



app.use(logger)

app.get('/', (req,res)=>{
    res.send("page d'acceuil")
})

app.get('/admin', auth, (req, res) => {
    res.send('Bienvenue dans la section administrateur')
})

app.listen(2000, ()=>{
    console.log("je suis en ecoute sur le port 2000");
})