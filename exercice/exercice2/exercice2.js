let express = require ('express')
let app = express()
const port = 1000

app.get('/hello/:name?', (req, res) => {
    const { name } = req.params;

    if (!name) {
        res.status(400).send('Le nom est requis !');
    } else {
        res.status(200).send(`Bonjour ${name}`);
    }
});


app.listen(port, ()=>{
    console.log(`Je suis en écoute sur le port ${port}`);
    
})