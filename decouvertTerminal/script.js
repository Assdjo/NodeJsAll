// let http = require('http')
// let fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'content-type' : 'text/html'})
//         res.write(data)
//        return res.end() 
//     })
    
// }).listen(3030);

// fs.appendFile('mynewfile.txt', 'hello content!', function(err){
//     if (err) throw err;
//     console.log('Saved!')
// })

 console.log('Hello word 🤳');





// const {celsiusToFahrenheit, add, SayHello} = require('./convertion.js')

// console.log(celsiusToFahrenheit, add, SayHello);


// let freezing = celsiusToFahrenheit(0)
// let building= celsiusToFahrenheit(50)

// console.log(`il fait froid ${freezing}`)
// console.log(`il fait chaud ${building}`)

// let somme = add(2, 7)
// console.log(`voici la somme ${somme}`)

// let name = SayHello('Dieubeni')
// console.log(name)

const {aireCarré, aireCercle, aireRectangle, aireTriangle} = require('./aire.js')

const Acarre = aireCarré(5)
const ACercle = aireCercle(5)
const ARectangle = aireRectangle(10, 4)
const ATriangle = aireTriangle(10, 5)

console.log(Acarre);
console.log(ARectangle);
console.log(ACercle);
console.log(ATriangle);


  

