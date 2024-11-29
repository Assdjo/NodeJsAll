let express = require ('express')
let app = express()
const port = 3000

app.get('/welcome', (req, res)=>{
    res.send("Bienvenue sur mon API Express !")
})

app.listen(port, ()=>{
    console.log(`Je suis en écoute sur le port ${port}`);
    
})