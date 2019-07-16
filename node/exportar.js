console.log(module.exports ===this)
console.log(module.exports === exports)

exports = {
    nome: 'Teste'
}

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)



//Como já foi atribuida, ele mantém os valores
console.log(exports)

module.exports = {publico:this}