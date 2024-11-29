const { ifError } = require('assert');
const express = require('express')
const path = require('path')
const port = 1000

const useRouter = require('./router-users')

const app = express();


app.use('/users', useRouter)

app.get('/', (req, res)=>{
    
    
    res.status(200).send("<h1>Les utilisateurs</h1> <a href='/users'>les utilisateurs</a>")
})



// app.post('/user', (req, res)=>{
//     res.send('methode post')
// })

app.listen(port, ()=>{
    console.log(`notre serveur ecoute sur le port ${port}`);
})

