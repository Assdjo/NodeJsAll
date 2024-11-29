let express = require ('express')
let app = express()
const port = 3000


// app.get('/user/', (req, res)=>{
    
//     res.status(400).send(`Données incomplètes`)   
    
// })
// app.get('/user/:id', (req, res)=>{
    
//     res.status(400).send(`Données incomplètes`)   
    
// })

app.get('/user/:nom?/:age?', (req, res)=>{
    
    let {nom, age} = req.params

    console.log(nom, age);
    if (nom && nom.trim() === '') {
        nom = undefined;
    }
    if (age && age.trim() === '') {
        age = undefined;
    }
    
    if (!nom && !age) {
        res.status(400).send(`Données incomplètes !`)      
    } else {
        res.status(200).send(`Utilisateur créé avec succès : nom: ${nom}, Age : ${age}`)    
    }   
})

app.get('/dashboard', (req, res)=>{
    const apikey = req.headers['x-api-key']
    if (apikey) {
        res.status(200).send("Bienvenue dans le tableau de bord")
    } else {
        res.status(403).send("Accès refusé")
    }
})

app.listen(port, ()=>{
    console.log(`Je suis en écoute sur le port ${port}`);    
})