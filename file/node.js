const { log } = require('console')
const http = require('http')
const fs = require('fs')
const port = 1010
const server = http.createServer((req, res)=>{

  if (req.url == '/') {
    fs.readFile('./index.html', (err, data)=>{
        if (err) {
           log(`Quelque chose se passe ici ${err}`) 
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html;'})
            res.write(data)
        }        
        return res.end()
    })

  } else if (req.url == '/about'){

        fs.readFile('./about.html', (err, data)=>{
            if (err) {
                log(`Quelque chose se passe ici ${err}`) 
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html;'})
                res.write(data)
            }        
            return res.end()
        })

    } else if (req.url == "/services") {
        fs.readFile('./services.html', (err, data)=>{
            if (err) {
                log(`Quelque chose se passe ici ${err}`) 
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html;'})
                res.write(data)
            }        
            return res.end()
            
        })
  } else if (req.url == "/produits") {
    fs.readFile('./produit.json', (err, data)=>{
        if (err) {
            log(`Quelque chose se passe ici ${err}`) 
        } else {
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.write(data)
        }        
        return res.end()
    })
  }



    

})

server.listen(port, ()=>{
    log(`mon server ecoute desormais sur le port ${port}`)
})