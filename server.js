//importation du module http
const { log } = require('console')
const http = require ('http')
const port = 10

// creation du server http
const server = http.createServer((req, res)=>{
    // res.writeHead(400, {'content-Type' : 'text/plain'})
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); 
        res.write("<h1>Bienvenue sur la page d'accueil 🤳!</h1>");
        res.write(`voici l'url ${req.url}`);
        res.end();  
    
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write("<h1>Bienvenue sur la page A propos</h1>");
        res.write(`voici l'url ${req.url}`);
        res.end();  
    
    } else if (req.url == '/services') {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write("<h1>Voici les services proposés !</h1><br><ul><li>pimenter</li><li>encore pimenter</li><li>toujours pimenter</li></ul>");
        res.write(`voici l'url ${req.url}`);
        res.end();  
    
    } else if (req.url == '/produits') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const produits = {
            message: "Voici les produits proposés 💖❤!",
            items: ["Du piment", "Encore du piment", "Toujours du piment"]
        };
        res.write(JSON.stringify(produits));
        res.end();  
    
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("404 Not Found");  
    }
    
    // res.write('<h1>Hello word !</h1>'); 
})

server.listen(port, ()=>{
    log(`mon serveur ecoute sur le port ${port}`)
})