const express = require('express');
const app = express();
const port = 3000; 
const path = require('path')

const urlP= path.join(__dirname, 'public')

app.use('/public', express.static(urlP))


app.get("/", (req, res)=>{
    res.sendFile(path.join(urlP, 'home.html'));
});


app.get("/toto", (req, res)=>{
    res.download("./dieubeni.json");
});

app.get('/services', (req, res)=>{
    const services = {'title': 'Cahier de charge', 'price': 75000 }
    res.status(200).json(services)
})

app.listen(port, ()=>{
    console.log(`Application exemple à l'écoute sur le port ${port}!`);
});