const { log } = require('console')
const url = require('url')
const http = require('http')

const urlString = 'https://www.example.com/search?lesson=Drague&category=Peace%20and%20love&sort=asc'

const ParseUrl = new URL(urlString)


// const customUrl = {}
// customUrl.protocol = 'https'
// customUrl.hostname = 'www.bravocode.io'
// customUrl.port = '3000'
// customUrl.search = '?lesson=nodejs&level=beginner'
// customUrl.pathname = '/learn/5'

// const UrlFormat = url.format(customUrl)
// log(UrlFormat)




// log(ParseUrl)
// log(ParseUrl.searchParams)

const KeyAndVal = ParseUrl.searchParams
log(KeyAndVal)

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    res.write(`l'utilisateur est sur la leçon "${KeyAndVal.get('lesson')}" dans la catégorie "${KeyAndVal.get('category')}" trier dans l'ordre "${KeyAndVal.get('sort')}"`)
    res.end()
}).listen(1010, ()=>{
    log('ecoute sur le port 1010')
})
// log(ParseUrl2)