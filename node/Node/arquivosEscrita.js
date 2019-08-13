const fs = require('fs')
const produto = {
    nome:   'celular',
    preco: 123,
    desconto: 0.15
}
fs.writeFile(__dirname + '/lendoArquivo.json', JSON.stringify(produto),err =>{
    console.log(err || 'Arquivo salvo!')
})
