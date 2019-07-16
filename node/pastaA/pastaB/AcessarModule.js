const _ = require('../../ModuleB')

console.log(_)

//possivel criar um modulo dentro do node_modules

const __ = require('saudacoes')
console.log(__)

const http = require('http')

http.createServer((req,res)=> {
    res.write('Bom dia') 
    res.end()
}).listen(8000)